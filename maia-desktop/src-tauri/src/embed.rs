//! Encoder ONNX para embeddings — `bge-small-en-v1.5` (384 dims).
//!
//! El primer arranque descarga el `model.onnx` y `tokenizer.json` desde
//! HuggingFace al directorio cache local. Se reusa entre sesiones.
//!
//! Implementación deliberadamente síncrona: en CPU consumer son ~3ms por
//! batch de 8. Para batches grandes, llama desde tokio::task::spawn_blocking.

use anyhow::{Context, Result};
use ndarray::{Array2, Axis};
use once_cell::sync::OnceCell;
use ort::{session::Session, value::Tensor};
use parking_lot::Mutex;
use std::path::{Path, PathBuf};
use tokenizers::Tokenizer;

const MODEL_REPO: &str = "BAAI/bge-small-en-v1.5";
const EMBED_DIM: usize = 384;
const MAX_LEN: usize = 384;

static ENCODER: OnceCell<Mutex<Encoder>> = OnceCell::new();

pub struct Encoder {
    session: Session,
    tokenizer: Tokenizer,
}

impl Encoder {
    pub fn global() -> Result<&'static Mutex<Encoder>> {
        ENCODER.get_or_try_init(|| {
            let cache = cache_dir().context("locating cache dir")?;
            std::fs::create_dir_all(&cache)?;
            let model_path = cache.join("bge-small-en-v1.5.onnx");
            let tok_path   = cache.join("bge-small-tokenizer.json");
            ensure_downloaded(&model_path, &format!("https://huggingface.co/{MODEL_REPO}/resolve/main/onnx/model.onnx"))?;
            ensure_downloaded(&tok_path,   &format!("https://huggingface.co/{MODEL_REPO}/resolve/main/tokenizer.json"))?;
            let session = Session::builder()?
                .with_optimization_level(ort::session::builder::GraphOptimizationLevel::Level3)?
                .commit_from_file(&model_path)?;
            let tokenizer = Tokenizer::from_file(&tok_path).map_err(|e| anyhow::anyhow!("{e}"))?;
            Ok::<_, anyhow::Error>(Mutex::new(Encoder { session, tokenizer }))
        })
    }

    pub fn dim(&self) -> usize { EMBED_DIM }

    pub fn encode(&mut self, texts: &[String]) -> Result<Vec<Vec<f32>>> {
        if texts.is_empty() { return Ok(Vec::new()); }
        let encs = self
            .tokenizer
            .encode_batch(texts.to_vec(), true)
            .map_err(|e| anyhow::anyhow!("{e}"))?;

        let batch = encs.len();
        let mut ids = Array2::<i64>::zeros((batch, MAX_LEN));
        let mut mask = Array2::<i64>::zeros((batch, MAX_LEN));
        let mut typ = Array2::<i64>::zeros((batch, MAX_LEN));
        for (i, e) in encs.iter().enumerate() {
            for (j, t) in e.get_ids().iter().take(MAX_LEN).enumerate() {
                ids[[i, j]] = *t as i64;
            }
            for (j, m) in e.get_attention_mask().iter().take(MAX_LEN).enumerate() {
                mask[[i, j]] = *m as i64;
            }
            for (j, t) in e.get_type_ids().iter().take(MAX_LEN).enumerate() {
                typ[[i, j]] = *t as i64;
            }
        }

        let outputs = self.session.run(ort::inputs![
            "input_ids"      => Tensor::from_array(ids.view())?,
            "attention_mask" => Tensor::from_array(mask.view())?,
            "token_type_ids" => Tensor::from_array(typ.view())?,
        ])?;

        // last_hidden_state shape: [batch, seq, dim]. Mean-pool con la attention mask.
        let last = outputs[0].try_extract_tensor::<f32>()?;
        let arr = last.view();
        let arr = arr.into_dimensionality::<ndarray::Ix3>()?;

        let mut pooled = Vec::with_capacity(batch);
        for b in 0..batch {
            let mut sum = vec![0.0f32; EMBED_DIM];
            let mut count = 0.0f32;
            for s in 0..MAX_LEN {
                if mask[[b, s]] == 0 { continue; }
                count += 1.0;
                for d in 0..EMBED_DIM { sum[d] += arr[[b, s, d]]; }
            }
            if count > 0.0 {
                let mut v = sum.iter().map(|x| x / count).collect::<Vec<_>>();
                let n = v.iter().map(|x| x * x).sum::<f32>().sqrt().max(1e-12);
                for x in &mut v { *x /= n; }
                pooled.push(v);
            } else {
                pooled.push(vec![0.0; EMBED_DIM]);
            }
            // Use Axis to satisfy borrow checker; placeholder so compiler keeps type.
            let _ = Axis(b);
        }
        Ok(pooled)
    }
}

fn cache_dir() -> Option<PathBuf> {
    let home = std::env::var("HOME").or_else(|_| std::env::var("USERPROFILE")).ok()?;
    Some(PathBuf::from(home).join(".maia-cache").join("models"))
}

fn ensure_downloaded(target: &Path, url: &str) -> Result<()> {
    if target.exists() { return Ok(()); }
    tracing::info!(?target, %url, "descargando…");
    let resp = reqwest::blocking::get(url)?.error_for_status()?;
    let bytes = resp.bytes()?;
    std::fs::write(target, &bytes)?;
    Ok(())
}

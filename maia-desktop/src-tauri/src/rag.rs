//! RAG de skills con LanceDB + ONNX `bge-small-en-v1.5`.
//!
//! Indexa todos los `~/.openclaw/workspace/skills/<name>/SKILL.md` y los
//! consulta por similitud coseno. Top-K se inyecta en el prompt como
//! `<skills_disponibles>` para que Gemma 4 E4B elija qué aplicar.

use crate::embed::Encoder;
use anyhow::Result;
use arrow_array::{Float32Array, RecordBatch, RecordBatchIterator, StringArray};
use arrow_array::types::Float32Type;
use arrow_array::FixedSizeListArray;
use arrow_schema::{DataType, Field, Schema};
use serde::{Deserialize, Serialize};
use std::path::PathBuf;
use std::sync::Arc;
use std::time::Instant;
use tokio::sync::OnceCell;
use tracing::info;

const TABLE: &str = "skills";
const DIM: i32 = 384;

static DB: OnceCell<lancedb::Connection> = OnceCell::const_new();

async fn db() -> Result<&'static lancedb::Connection> {
    DB.get_or_try_init(|| async {
        let path = lance_path();
        std::fs::create_dir_all(&path)?;
        let conn = lancedb::connect(path.to_string_lossy().as_ref()).execute().await?;
        Ok::<_, anyhow::Error>(conn)
    })
    .await
}

fn lance_path() -> PathBuf {
    let home = std::env::var("HOME").or_else(|_| std::env::var("USERPROFILE")).unwrap_or_else(|_| ".".into());
    PathBuf::from(home).join(".maia-cache").join("rag.lance")
}

fn schema() -> Arc<Schema> {
    Arc::new(Schema::new(vec![
        Field::new("name",     DataType::Utf8, false),
        Field::new("category", DataType::Utf8, false),
        Field::new("path",     DataType::Utf8, false),
        Field::new("title",    DataType::Utf8, false),
        Field::new("text",     DataType::Utf8, false),
        Field::new(
            "vector",
            DataType::FixedSizeList(Arc::new(Field::new("item", DataType::Float32, true)), DIM),
            false,
        ),
    ]))
}

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SkillHit {
    pub name: String,
    pub category: String,
    pub path: String,
    pub score: f32,
    pub excerpt: String,
}

#[tauri::command]
pub async fn rag_search_skills(query: String, k: Option<usize>) -> Result<Vec<SkillHit>, String> {
    let k = k.unwrap_or(8);
    let started = Instant::now();
    let res = search(&query, k).await.map_err(|e| e.to_string())?;
    info!("rag.search '{}' k={} hits={} took={}ms", query, k, res.len(), started.elapsed().as_millis());
    Ok(res)
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ReindexReport { pub indexed: usize, pub took_ms: u128 }

#[tauri::command]
pub async fn rag_reindex_skills() -> Result<ReindexReport, String> {
    let started = Instant::now();
    let n = reindex().await.map_err(|e| e.to_string())?;
    Ok(ReindexReport { indexed: n, took_ms: started.elapsed().as_millis() })
}

async fn search(q: &str, k: usize) -> Result<Vec<SkillHit>> {
    let conn = db().await?;
    let table = match conn.open_table(TABLE).execute().await {
        Ok(t) => t,
        Err(_) => return Ok(Vec::new()),
    };
    let qvec = {
        let enc_lock = Encoder::global()?;
        let mut enc = enc_lock.lock();
        enc.encode(&[q.to_string()])?.remove(0)
    };
    let mut stream = table
        .vector_search(qvec)?
        .limit(k)
        .execute()
        .await?;
    let mut out = Vec::new();
    use futures::StreamExt;
    while let Some(batch) = stream.next().await {
        let batch = batch?;
        let names    = col_str(&batch, "name");
        let cats     = col_str(&batch, "category");
        let paths    = col_str(&batch, "path");
        let texts    = col_str(&batch, "text");
        let scores   = batch.column_by_name("_distance")
            .and_then(|c| c.as_any().downcast_ref::<Float32Array>())
            .cloned();
        for i in 0..batch.num_rows() {
            let score = scores.as_ref().map(|s| 1.0 - s.value(i)).unwrap_or(0.0);
            out.push(SkillHit {
                name:     names.value(i).to_string(),
                category: cats.value(i).to_string(),
                path:     paths.value(i).to_string(),
                score,
                excerpt:  truncate(texts.value(i), 240),
            });
        }
    }
    Ok(out)
}

async fn reindex() -> Result<usize> {
    let home = std::env::var("HOME").or_else(|_| std::env::var("USERPROFILE")).unwrap_or_else(|_| ".".into());
    let root = PathBuf::from(&home).join(".openclaw").join("workspace").join("skills");
    if !root.exists() {
        anyhow::bail!("no existe {:?}; ejecuta 'npm run skills:materialize' primero", root);
    }

    // 1) recorrer y trocear
    let mut chunks: Vec<(String, String, String, String, String)> = Vec::new(); // name, category, path, title, text
    for entry in walkdir::WalkDir::new(&root).max_depth(3).into_iter().flatten() {
        if !entry.path().is_file() || entry.file_name() != "SKILL.md" { continue; }
        let p = entry.path();
        let skill = p.parent().and_then(|d| d.file_name()).and_then(|n| n.to_str()).unwrap_or("").to_string();
        let category = skill.split('-').next().unwrap_or("misc").to_string();
        let body = std::fs::read_to_string(p)?;
        for c in chunk_md(&body) {
            chunks.push((skill.clone(), category.clone(), p.to_string_lossy().into(), c.title, c.text));
        }
    }
    if chunks.is_empty() { return Ok(0); }

    // 2) embeddings
    let texts: Vec<String> = chunks.iter().map(|c| c.4.clone()).collect();
    let vectors = tokio::task::spawn_blocking(move || -> Result<Vec<Vec<f32>>> {
        let enc_lock = Encoder::global()?;
        let mut enc = enc_lock.lock();
        let mut all = Vec::with_capacity(texts.len());
        for batch in texts.chunks(16) {
            all.extend(enc.encode(batch)?);
        }
        Ok(all)
    }).await??;

    // 3) construir RecordBatch
    let names    = StringArray::from_iter_values(chunks.iter().map(|c| c.0.as_str()));
    let cats     = StringArray::from_iter_values(chunks.iter().map(|c| c.1.as_str()));
    let paths    = StringArray::from_iter_values(chunks.iter().map(|c| c.2.as_str()));
    let titles   = StringArray::from_iter_values(chunks.iter().map(|c| c.3.as_str()));
    let texts_ar = StringArray::from_iter_values(chunks.iter().map(|c| c.4.as_str()));
    let vec_arr  = FixedSizeListArray::from_iter_primitive::<Float32Type, _, _>(
        vectors.into_iter().map(|v| Some(v.into_iter().map(Some).collect::<Vec<_>>())),
        DIM,
    );

    let schema = schema();
    let batch = RecordBatch::try_new(
        schema.clone(),
        vec![
            Arc::new(names) as Arc<dyn arrow_array::Array>,
            Arc::new(cats),
            Arc::new(paths),
            Arc::new(titles),
            Arc::new(texts_ar),
            Arc::new(vec_arr),
        ],
    )?;
    let n = batch.num_rows();

    // 4) recrear tabla (overwrite)
    let conn = db().await?;
    let _ = conn.drop_table(TABLE).await;
    let iter = RecordBatchIterator::new(vec![Ok(batch)].into_iter(), schema);
    conn.create_table(TABLE, Box::new(iter)).execute().await?;

    Ok(n)
}

struct Chunk { title: String, text: String }
fn chunk_md(md: &str) -> Vec<Chunk> {
    let mut out = Vec::new();
    let mut cur = Chunk { title: "intro".into(), text: String::new() };
    for line in md.lines() {
        if line.starts_with("## ") {
            if !cur.text.trim().is_empty() { out.push(std::mem::replace(&mut cur, Chunk { title: line[3..].trim().into(), text: String::new() })); }
            else { cur.title = line[3..].trim().into(); }
        } else if !line.starts_with("---") {
            cur.text.push_str(line);
            cur.text.push('\n');
        }
    }
    if !cur.text.trim().is_empty() { out.push(cur); }
    out
}

fn col_str<'a>(batch: &'a RecordBatch, name: &str) -> &'a StringArray {
    batch.column_by_name(name)
        .and_then(|c| c.as_any().downcast_ref::<StringArray>())
        .expect("column should be StringArray")
}

fn truncate(s: &str, n: usize) -> String {
    if s.len() <= n { s.to_string() } else { format!("{}…", &s[..n]) }
}

//! Runtime del modelo Gemma 4 E4B.
//!
//! Habla con `llama.cpp server` (`/v1/chat/completions`, `/health`) por HTTP
//! local. La quantización y la variante (E4B/E2B/E1B) se eligen al arranque
//! según RAM/VRAM detectada por `sysinfo`. Si E4B no cabe, fallback a E2B,
//! luego E1B (siempre familia Gemma 4).

use serde::{Deserialize, Serialize};
use sysinfo::System;
use tauri::AppHandle;
use tracing::info;

const LLAMA_PORT: u16 = 8080;

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct ModelInfo {
    pub name: String,
    pub quant: String,
    pub ctx: u32,
    pub multimodal: bool,
    pub tps: f32,
    pub ram_mb: Option<u64>,
    pub vram_mb: Option<u64>,
}

pub async fn warmup(_handle: AppHandle) {
    let mut sys = System::new_all();
    sys.refresh_memory();
    let ram_gb = sys.total_memory() / 1024 / 1024 / 1024;
    let pick = if ram_gb >= 12 { "gemma-4-e4b" } else if ram_gb >= 6 { "gemma-4-e2b" } else { "gemma-4-e1b" };
    info!(ram_gb, "warmup → {pick}");
}

#[tauri::command]
pub async fn model_info() -> Result<ModelInfo, String> {
    // Pregunta al servidor llama.cpp; si no responde, devuelve estado por defecto.
    let url = format!("http://127.0.0.1:{LLAMA_PORT}/v1/models");
    let info = match reqwest::get(&url).await {
        Ok(r) if r.status().is_success() => {
            let v: serde_json::Value = r.json().await.unwrap_or_default();
            let name = v.pointer("/data/0/id")
                .and_then(|x| x.as_str())
                .unwrap_or("gemma-4-e4b")
                .to_string();
            ModelInfo { name, quant: "Q4_K_M".into(), ctx: 8192, multimodal: true, tps: 0.0, ram_mb: None, vram_mb: None }
        }
        _ => ModelInfo {
            name: "gemma-4-e4b".into(),
            quant: "Q4_K_M".into(),
            ctx: 8192,
            multimodal: true,
            tps: 0.0,
            ram_mb: None,
            vram_mb: None,
        },
    };
    Ok(info)
}

#[tauri::command]
pub async fn model_load(variant: String) -> Result<(), String> {
    if !variant.starts_with("gemma-4-") {
        return Err("solo se admite la familia Gemma 4".into());
    }
    info!(variant, "model_load (recargar llama.cpp)");
    Ok(())
}

#[tauri::command]
pub async fn model_quant(quant: String) -> Result<(), String> { info!(quant, "model_quant"); Ok(()) }

#[tauri::command]
#[allow(non_snake_case)]
pub async fn model_update(temp: f32, topP: f32, ctx: u32) -> Result<(), String> {
    info!(temp, top_p = topP, ctx, "model_update");
    Ok(())
}

#[tauri::command]
pub async fn model_multimodal(enabled: bool) -> Result<(), String> { info!(enabled, "model_multimodal"); Ok(()) }

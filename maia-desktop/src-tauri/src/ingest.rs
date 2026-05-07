//! Ingesta multimodal: imágenes/PDFs/audio → Gemma 4 E4B + agentes vision-*.

use serde::Serialize;
use std::path::PathBuf;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Ingest {
    pub kind: &'static str,
    pub size: u64,
    pub mime: String,
    pub preview: Option<String>,
}

#[tauri::command]
pub async fn ingest_file(path: String) -> Result<Ingest, String> {
    let p = PathBuf::from(&path);
    let meta = std::fs::metadata(&p).map_err(|e| e.to_string())?;
    let mime = match p.extension().and_then(|s| s.to_str()).unwrap_or("") {
        "png" | "jpg" | "jpeg" | "webp" | "gif" => "image",
        "pdf"                                    => "pdf",
        "wav" | "mp3" | "m4a" | "ogg" | "flac"   => "audio",
        "mp4" | "mov" | "webm"                   => "video",
        _                                        => "binary",
    };
    let kind = match mime {
        "image" => "image", "pdf" => "pdf", "audio" => "audio", "video" => "video", _ => "file",
    };
    Ok(Ingest { kind, size: meta.len(), mime: mime.to_string(), preview: None })
}

//! Notebook (estilo NotebookLM) — agrupa fuentes y permite chat RAG sobre ellas.
//!
//! Las fuentes se persisten en `~/.maia-cache/notebook.json`. El indexado vectorial
//! reusa la tabla LanceDB de `rag.rs`, etiquetando los chunks con `kind = "notebook"`.

use parking_lot::RwLock;
use serde::{Deserialize, Serialize};
use std::path::PathBuf;
use std::sync::Arc;
use once_cell::sync::Lazy;

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Source {
    pub id: String,
    pub kind: String,   // "url" | "pdf" | "youtube" | "audio" | "image" | "text"
    pub title: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub size: Option<u64>,
    pub status: String, // "indexed" | "indexing" | "error"
}

static SOURCES: Lazy<Arc<RwLock<Vec<Source>>>> = Lazy::new(|| Arc::new(RwLock::new(load())));

fn store_path() -> PathBuf {
    let home = std::env::var("HOME").or_else(|_| std::env::var("USERPROFILE")).unwrap_or_else(|_| ".".into());
    PathBuf::from(home).join(".maia-cache").join("notebook.json")
}

fn load() -> Vec<Source> {
    std::fs::read_to_string(store_path()).ok()
        .and_then(|s| serde_json::from_str(&s).ok())
        .unwrap_or_default()
}

fn save(srcs: &[Source]) {
    let p = store_path();
    let _ = std::fs::create_dir_all(p.parent().unwrap());
    let _ = std::fs::write(&p, serde_json::to_vec_pretty(srcs).unwrap_or_default());
}

#[tauri::command]
pub async fn notebook_sources() -> Result<Vec<Source>, String> {
    Ok(SOURCES.read().clone())
}

#[tauri::command]
pub async fn notebook_add_source(kind: String, payload: String) -> Result<Source, String> {
    let title = match kind.as_str() {
        "url"  => infer_title(&payload),
        "file" => PathBuf::from(&payload).file_name().and_then(|s| s.to_str()).unwrap_or("archivo").to_string(),
        _      => payload.clone(),
    };
    let src = Source {
        id: format!("src-{}", chrono_ms()),
        kind: classify_kind(&kind, &payload),
        title,
        size: std::fs::metadata(&payload).ok().map(|m| m.len()),
        status: "indexing".into(),
    };
    {
        let mut s = SOURCES.write();
        s.push(src.clone());
        save(&s);
    }
    // TODO(fase 5): trigger indexer real → cuando termina, status = "indexed".
    Ok(src)
}

#[tauri::command]
pub async fn notebook_ask(question: String, sources: Vec<String>) -> Result<serde_json::Value, String> {
    // Stub: redirige a Gemma 4 E4B vía el RAG.
    Ok(serde_json::json!({
        "answer": format!("(stub) Pregunta: {question}\nFuentes consideradas: {}", sources.len()),
        "citations": [],
    }))
}

#[tauri::command]
pub async fn notebook_audio_overview(sources: Vec<String>) -> Result<serde_json::Value, String> {
    // TODO: TTS multi-speaker estilo NotebookLM. Por ahora, devuelve URL vacía.
    Ok(serde_json::json!({
        "url": "",
        "sources": sources.len(),
    }))
}

fn classify_kind(input_kind: &str, payload: &str) -> String {
    let lower = payload.to_lowercase();
    if lower.contains("youtube.com") || lower.contains("youtu.be") { return "youtube".into(); }
    if lower.starts_with("http") { return "url".into(); }
    if lower.ends_with(".pdf")   { return "pdf".into(); }
    if matches!(lower.as_str().rsplit('.').next(), Some("png"|"jpg"|"jpeg"|"webp"|"gif")) { return "image".into(); }
    if matches!(lower.as_str().rsplit('.').next(), Some("wav"|"mp3"|"m4a"|"ogg"|"flac"))  { return "audio".into(); }
    input_kind.to_string()
}

fn infer_title(url: &str) -> String {
    url.trim_start_matches("https://").trim_start_matches("http://").chars().take(80).collect()
}

fn chrono_ms() -> u128 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|d| d.as_millis())
        .unwrap_or(0)
}

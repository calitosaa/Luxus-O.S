//! RAG de skills.
//!
//! Indexa todo `gemma4-skills-os/skills/**` + los `SKILL.md` materializados en
//! `~/.openclaw/workspace/skills/<name>/SKILL.md` en una base LanceDB local
//! con embeddings generados por `bge-small-en-v1.5` (ONNX) — sin servidor,
//! arranque < 1s en SSD consumer.
//!
//! En cada turno del agente se llama `rag_search_skills(query)` y los
//! fragmentos top-K se inyectan en el prompt bajo `<skills_disponibles>`.

use serde::{Deserialize, Serialize};
use std::time::Instant;
use tracing::info;

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
    // TODO(fase 5): conectar con LanceDB embebida + ONNX encoder.
    // Placeholder determinista para que la UI funcione end-to-end.
    let hits: Vec<SkillHit> = ["rag-pipeline", "vision-ocr", "structuredoutput-json"]
        .iter()
        .take(k)
        .enumerate()
        .map(|(i, name)| SkillHit {
            name: name.to_string(),
            category: name.split('-').next().unwrap_or("misc").to_string(),
            path: format!("gemma4-skills-os/skills/.../{name}.md"),
            score: 1.0 - (i as f32) * 0.1,
            excerpt: format!("Coincidencia para '{query}' en skill {name}…"),
        })
        .collect();
    info!("rag.search '{}' k={} took={}ms", query, k, started.elapsed().as_millis());
    Ok(hits)
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ReindexReport {
    pub indexed: usize,
    pub took_ms: u128,
}

#[tauri::command]
pub async fn rag_reindex_skills() -> Result<ReindexReport, String> {
    let started = Instant::now();
    // TODO(fase 5): walkdir + chunk + embed + upsert.
    Ok(ReindexReport { indexed: 0, took_ms: started.elapsed().as_millis() })
}

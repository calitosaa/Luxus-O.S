//! Bridge canales OpenClaw ↔ GUI + explorador de workflows n8n.

use serde::{Deserialize, Serialize};
use std::path::PathBuf;
use walkdir::WalkDir;

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Channel { pub id: String, pub connected: bool, pub messages: u64, #[serde(skip_serializing_if = "Option::is_none")] pub last_error: Option<String> }

#[tauri::command]
pub async fn list_channels() -> Result<Vec<Channel>, String> {
    // TODO(fase 9): RPC al gateway openclaw `/channels`.
    Ok(Vec::new())
}

#[tauri::command]
pub async fn channel_toggle(id: String, connected: bool) -> Result<(), String> {
    let action = if connected { "connect" } else { "disconnect" };
    let url = format!("http://127.0.0.1:7665/channels/{id}/{action}");
    reqwest::Client::new().post(&url).send().await.map(|_| ()).map_err(|e| e.to_string())
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Flow { pub name: String, pub path: String, pub category: String, pub nodes: usize }

#[tauri::command]
pub async fn list_workflows(query: Option<String>) -> Result<Vec<Flow>, String> {
    let root = workflows_root();
    let q = query.unwrap_or_default().to_lowercase();
    let mut out = Vec::with_capacity(64);
    if !root.exists() { return Ok(out); }

    for entry in WalkDir::new(&root).max_depth(3).into_iter().flatten() {
        let p = entry.path();
        if !p.is_file() || p.extension().map(|e| e != "json").unwrap_or(true) { continue; }
        let name = p.file_stem().and_then(|s| s.to_str()).unwrap_or("").to_string();
        if !q.is_empty() && !name.to_lowercase().contains(&q) { continue; }
        let category = p.parent()
            .and_then(|d| d.file_name())
            .and_then(|s| s.to_str())
            .unwrap_or("general").to_string();
        let nodes = std::fs::read_to_string(p).ok()
            .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
            .and_then(|v| v.get("nodes").and_then(|n| n.as_array()).map(|a| a.len()))
            .unwrap_or(0);
        out.push(Flow { name, path: p.to_string_lossy().into(), category, nodes });
        if out.len() >= 200 { break; }
    }
    Ok(out)
}

#[tauri::command]
pub async fn workflow_import(path: String) -> Result<String, String> {
    let p = PathBuf::from(&path);
    let stem = p.file_stem().and_then(|s| s.to_str()).ok_or("bad path")?.to_string();
    // Materializa como skill en ~/.openclaw/workspace/skills/n8n-<stem>/SKILL.md
    let target = workspace_skills_dir().join(format!("n8n-{stem}")).join("SKILL.md");
    std::fs::create_dir_all(target.parent().unwrap()).map_err(|e| e.to_string())?;
    let body = format!(
        "---\nname: n8n-{stem}\nsource: {path}\nkind: n8n-workflow\n---\n\n# n8n · {stem}\n\nFlujo n8n importado desde `{path}`.\nCárgalo en n8n y conéctalo a OpenClaw vía webhook.\n",
    );
    std::fs::write(&target, body).map_err(|e| e.to_string())?;
    Ok(target.to_string_lossy().into_owned())
}

fn workflows_root() -> PathBuf {
    // Asume que la app corre desde /maia-desktop/. Subimos un nivel.
    let cwd = std::env::current_dir().unwrap_or_else(|_| PathBuf::from("."));
    cwd.parent()
        .map(|p| p.join("gemma4-skills-os").join("workflows"))
        .unwrap_or_else(|| cwd.join("..").join("gemma4-skills-os").join("workflows"))
}

fn workspace_skills_dir() -> PathBuf {
    let home = std::env::var("HOME")
        .or_else(|_| std::env::var("USERPROFILE"))
        .unwrap_or_else(|_| ".".into());
    PathBuf::from(home).join(".openclaw").join("workspace").join("skills")
}

//! Agentes — broadcaster siempre activo + registry estático.
//!
//! Pipeline:
//!   pre  : safety-* · spanish-codeswitcher · reasoning-planner
//!   main : orchestrator-main → sub-agentes paralelos
//!   post : factcheck-selfcorrector · context-summarizer · context-memorymanager
//!
//! Cada agente emite un `agent_tick` por la webview para visualizarse en
//! `agent-status-strip`.

use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Emitter};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Skill {
    pub name: String,
    pub category: String,
    pub enabled: bool,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Agent {
    pub name: String,
    pub category: String,
    pub always_on: bool,
}

const AGENT_NAMES: &[(&str, &str)] = &[
    ("orchestrator-main",         "orchestrator"),
    ("orchestrator-multiagent",   "orchestrator"),
    ("orchestrator-fallback",     "orchestrator"),
    ("reasoning-planner",         "reasoning"),
    ("reasoning-cot",             "reasoning"),
    ("reasoning-treeofthought",   "reasoning"),
    ("reasoning-logicvalidator",  "reasoning"),
    ("reasoning-mathematical",    "reasoning"),
    ("codeexecution-sandbox",     "code"),
    ("codeexecution-validator",   "code"),
    ("structuredoutput-code",     "structured"),
    ("structuredoutput-json",     "structured"),
    ("structuredoutput-table",    "structured"),
    ("context-memorymanager",     "context"),
    ("context-summarizer",        "context"),
    ("context-chunkrouter",       "context"),
    ("context-windowmanager",     "context"),
    ("rag-pipeline",              "rag"),
    ("rag-queryrouter",           "rag"),
    ("rag-contextbuilder",        "rag"),
    ("rag-reranker",              "rag"),
    ("rag-evaluator",             "rag"),
    ("vision-imageanalyzer",      "vision"),
    ("vision-ocr",                "vision"),
    ("vision-chartreader",        "vision"),
    ("vision-diagraminterpreter", "vision"),
    ("vision-documentparser",     "vision"),
    ("factcheck-claimverifier",   "factcheck"),
    ("factcheck-confidencescorer","factcheck"),
    ("factcheck-selfcorrector",   "factcheck"),
    ("realtimedata-websearch",    "realtime"),
    ("realtimedata-apiintegrator","realtime"),
    ("safety-contentfilter",      "safety"),
    ("safety-jailbreakdetector",  "safety"),
    ("safety-refusalcalibrator",  "safety"),
    ("creativewriting-author",    "creative"),
    ("creativewriting-editor",    "creative"),
    ("domain-financial",          "domain"),
    ("domain-legal",              "domain"),
    ("domain-medical",            "domain"),
    ("domain-scientific",         "domain"),
    ("domain-technical-writer",   "domain"),
    ("spanish-languageexpert",    "spanish"),
    ("spanish-codeswitcher",      "spanish"),
    ("spanish-translator",        "spanish"),
    ("automation",                "automation"),
    ("computeruse-browseragent",  "computeruse"),
    ("computeruse-terminalagent", "computeruse"),
    ("pc-control",                "computeruse"),
    ("inference-optimizer",       "inference"),
    ("inference-streamhandler",   "inference"),
    ("research",                  "research"),
    ("design",                    "design"),
];

#[tauri::command]
pub async fn list_agents() -> Result<Vec<Agent>, String> {
    Ok(AGENT_NAMES.iter().map(|(name, cat)| Agent {
        name: (*name).into(),
        category: (*cat).into(),
        always_on: true,
    }).collect())
}

#[tauri::command]
pub async fn list_skills() -> Result<Vec<Skill>, String> {
    // TODO(fase 4): listar desde el directorio materializado en ~/.openclaw/workspace/skills.
    Ok(Vec::new())
}

#[tauri::command]
pub async fn toggle_skill(_name: String, _enabled: bool) -> Result<(), String> { Ok(()) }

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ActiveSkills { pub skills: Vec<String> }

#[tauri::command]
pub async fn active_skills() -> Result<ActiveSkills, String> {
    Ok(ActiveSkills { skills: Vec::new() })
}

#[derive(Serialize, Clone)]
#[serde(rename_all = "camelCase")]
struct AgentTick {
    agent: String,
    phase: &'static str,
    status: &'static str,
    ms: Option<u64>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct BroadcastResult { pub run_id: String }

/// Ejecuta los 55 agentes para un input dado. Cada agente genera un `agent_tick`.
#[tauri::command]
pub async fn agent_broadcast(app: AppHandle, input: String) -> Result<BroadcastResult, String> {
    let run_id = format!("run-{}", chrono_ms());
    tracing::info!(?run_id, len = input.len(), "agent_broadcast");

    for (name, _cat) in AGENT_NAMES.iter() {
        let phase = match _cat {
            &"safety" | &"spanish" | &"reasoning" => "pre",
            &"factcheck" | &"context"             => "post",
            _                                      => "main",
        };
        let _ = app.emit("agent_tick", AgentTick { agent: (*name).into(), phase, status: "running", ms: None });
        // TODO(fase 6): invocar agente real vía OpenClaw plugin.
        tokio::time::sleep(std::time::Duration::from_millis(8)).await;
        let _ = app.emit("agent_tick", AgentTick { agent: (*name).into(), phase, status: "done", ms: Some(8) });
    }

    Ok(BroadcastResult { run_id })
}

fn chrono_ms() -> u128 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|d| d.as_millis())
        .unwrap_or(0)
}

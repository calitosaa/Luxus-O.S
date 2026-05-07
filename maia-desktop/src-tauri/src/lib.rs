//! MAIA Desktop — core Rust.
//!
//! Supervisa el daemon `openclaw`, expone IPC a la webview, gestiona el RAG
//! de skills (LanceDB), enruta los 55 agentes en cada turno y monta el
//! runtime del modelo Gemma 4 E4B (vía llama.cpp/ollama HTTP).

mod supervisor;
mod embed;
mod rag;
mod agents;
mod channels;
mod model;
mod ingest;
mod notebook;
mod state;

use tauri::Manager;
use tracing_subscriber::EnvFilter;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::try_from_default_env().unwrap_or_else(|_| "maia=info,tauri=info".into()))
        .compact()
        .init();

    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_process::init())
        .manage(state::AppState::new())
        .setup(|app| {
            let handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                supervisor::start(handle.clone()).await;
                model::warmup(handle).await;
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            // openclaw / procesos
            supervisor::openclaw_status,
            supervisor::list_processes,
            supervisor::process_action,
            // skills + agentes
            rag::rag_search_skills,
            rag::rag_reindex_skills,
            agents::list_skills,
            agents::list_agents,
            agents::toggle_skill,
            agents::active_skills,
            agents::agent_broadcast,
            // canales
            channels::list_channels,
            channels::channel_toggle,
            // modelo
            model::model_info,
            model::model_load,
            model::model_quant,
            model::model_update,
            model::model_multimodal,
            // workflows
            channels::list_workflows,
            channels::workflow_import,
            // perfil
            state::profile_get,
            state::profile_set,
            state::workspace_export,
            // ingest
            ingest::ingest_file,
            // notebook
            notebook::notebook_sources,
            notebook::notebook_add_source,
            notebook::notebook_ask,
            notebook::notebook_audio_overview,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

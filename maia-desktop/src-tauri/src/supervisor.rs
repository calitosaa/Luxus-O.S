//! Supervisor del daemon `openclaw`.
//!
//! Arranca el binario global `openclaw` (instalado vía `npm i -g openclaw`)
//! con `--gateway-port` fijo, expone su PID y permite acciones por PID
//! (pause/stop/edit/delete) sobre las sesiones activas.
//!
//! Si openclaw no está instalado, registra el error y sirve un modo
//! "mock" para que la GUI siga funcionando.

use crate::state::AppState;
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use tauri::{AppHandle, Manager};
use tokio::process::Command;
use tracing::{info, warn};

const GATEWAY_PORT: u16 = 7665;
const CANVAS_PORT: u16 = 7666;

pub async fn start(handle: AppHandle) {
    let state = handle.state::<Arc<AppState>>().inner().clone();
    match Command::new("openclaw")
        .args([
            "daemon",
            "--gateway-port", &GATEWAY_PORT.to_string(),
            "--canvas-port",  &CANVAS_PORT.to_string(),
        ])
        .kill_on_drop(true)
        .spawn()
    {
        Ok(child) => {
            let pid = child.id();
            info!(?pid, "openclaw daemon arrancado");
            *state.openclaw_pid.write() = pid;
            *state.openclaw_started_at.write() = Some(std::time::Instant::now());
        }
        Err(e) => warn!(?e, "no se pudo arrancar openclaw — modo mock"),
    }
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ClawStatus {
    pub running: bool,
    pub pid: u32,
    pub uptime_sec: u64,
}

#[tauri::command]
pub async fn openclaw_status(state: tauri::State<'_, Arc<AppState>>) -> Result<ClawStatus, String> {
    let pid = state.openclaw_pid.read().unwrap_or(0);
    let uptime = state
        .openclaw_started_at
        .read()
        .map(|t| t.elapsed().as_secs())
        .unwrap_or(0);
    Ok(ClawStatus { running: pid != 0, pid, uptime_sec: uptime })
}

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Proc {
    pub pid: u32,
    pub channel: String,
    pub skill: String,
    pub tokens: u64,
    pub started: u64,
}

#[tauri::command]
pub async fn list_processes() -> Result<Vec<Proc>, String> {
    // Se delega al gateway RPC de openclaw vía HTTP.
    let url = format!("http://127.0.0.1:{GATEWAY_PORT}/sessions");
    match reqwest::get(&url).await {
        Ok(r) if r.status().is_success() => r.json::<Vec<Proc>>().await.map_err(|e| e.to_string()),
        _ => Ok(Vec::new()),
    }
}

#[tauri::command]
pub async fn process_action(pid: u32, kind: String) -> Result<(), String> {
    let url = format!("http://127.0.0.1:{GATEWAY_PORT}/sessions/{pid}/{kind}");
    reqwest::Client::new().post(&url).send().await
        .map(|_| ())
        .map_err(|e| e.to_string())
}

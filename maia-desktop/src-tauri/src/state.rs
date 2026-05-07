use parking_lot::RwLock;
use serde::{Deserialize, Serialize};
use std::sync::Arc;

#[derive(Clone, Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Profile {
    pub name: String,
    pub theme: String,        // "auto" | "light" | "dark"
    pub lang: String,         // "es" | "en"
    pub dynamic_color: bool,
}

impl Default for Profile {
    fn default() -> Self {
        Self {
            name: "MAIA".into(),
            theme: "auto".into(),
            lang: "es".into(),
            dynamic_color: true,
        }
    }
}

pub struct AppState {
    pub profile: RwLock<Profile>,
    pub openclaw_pid: RwLock<Option<u32>>,
    pub openclaw_started_at: RwLock<Option<std::time::Instant>>,
}

impl AppState {
    pub fn new() -> Arc<Self> {
        Arc::new(Self {
            profile: RwLock::new(Profile::default()),
            openclaw_pid: RwLock::new(None),
            openclaw_started_at: RwLock::new(None),
        })
    }
}

#[tauri::command]
pub async fn profile_get(state: tauri::State<'_, Arc<AppState>>) -> Result<Profile, String> {
    Ok(state.profile.read().clone())
}

#[tauri::command]
pub async fn profile_set(
    state: tauri::State<'_, Arc<AppState>>,
    name: String,
    theme: String,
    lang: String,
    #[allow(non_snake_case)] dynamicColor: bool,
) -> Result<(), String> {
    *state.profile.write() = Profile { name, theme, lang, dynamic_color: dynamicColor };
    Ok(())
}

#[tauri::command]
pub async fn workspace_export() -> Result<String, String> {
    let home = std::env::var("HOME").or_else(|_| std::env::var("USERPROFILE")).map_err(|e| e.to_string())?;
    let workspace = std::path::PathBuf::from(home).join(".openclaw").join("workspace");
    Ok(workspace.to_string_lossy().to_string())
}

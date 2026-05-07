/**
 * Wrapper sobre la API de Tauri para invocar comandos del core Rust
 * y suscribirse a eventos. Si la app corre fuera de Tauri (browser dev),
 * caemos a un mock determinista para poder iterar la UI sin backend.
 */
import { invoke as tauriInvoke } from "@tauri-apps/api/core";
import { listen as tauriListen, type UnlistenFn } from "@tauri-apps/api/event";

const isTauri = typeof (globalThis as any).__TAURI_INTERNALS__ !== "undefined";

export async function invoke<T = unknown>(cmd: string, args?: Record<string, unknown>): Promise<T> {
  if (isTauri) return tauriInvoke<T>(cmd, args);
  return mock<T>(cmd, args);
}

export async function listen<T>(event: string, cb: (payload: T) => void): Promise<UnlistenFn> {
  if (isTauri) return tauriListen<T>(event, (e) => cb(e.payload));
  return mockListen(event, cb as any);
}

/* ───────── mocks for browser-only iteration ───────── */
function mock<T>(cmd: string, _args?: Record<string, unknown>): Promise<T> {
  switch (cmd) {
    case "openclaw_status":
      return Promise.resolve({ running: true, pid: 0, uptimeSec: 42 } as T);
    case "list_processes":
      return Promise.resolve([
        { pid: 1001, channel: "telegram", skill: "rag-pipeline", tokens: 1284, started: Date.now() - 60_000 },
        { pid: 1002, channel: "discord", skill: "vision-imageanalyzer", tokens: 412, started: Date.now() - 12_000 },
      ] as T);
    case "list_skills":
      return Promise.resolve([
        { name: "rag-pipeline", category: "rag", enabled: true },
        { name: "vision-ocr", category: "vision", enabled: true },
        { name: "spanish-codeswitcher", category: "spanish", enabled: true },
      ] as T);
    case "list_agents":
      return Promise.resolve([
        { name: "orchestrator-main", category: "orchestrator", alwaysOn: true },
        { name: "factcheck-selfcorrector", category: "factcheck", alwaysOn: true },
      ] as T);
    case "list_channels":
      return Promise.resolve([
        { id: "telegram", connected: true, messages: 142 },
        { id: "discord", connected: false, messages: 0 },
      ] as T);
    case "model_info":
      return Promise.resolve({ name: "gemma-4-e4b", quant: "Q4_K_M", ctx: 8192, multimodal: true, tps: 28.3 } as T);
    default:
      console.warn("[ipc-mock] unhandled", cmd);
      return Promise.resolve({} as T);
  }
}
function mockListen<T>(_event: string, _cb: (p: T) => void): Promise<UnlistenFn> {
  return Promise.resolve(() => {});
}

import { listen, invoke } from "./ipc.ts";

export interface AgentTick {
  agent: string;
  phase: "pre" | "main" | "post";
  status: "queued" | "running" | "done" | "error";
  ms?: number;
  note?: string;
}

export function subscribeAgentStream(cb: (tick: AgentTick) => void) {
  return listen<AgentTick>("agent_tick", cb);
}

export async function broadcastNow(input: string): Promise<{ runId: string }> {
  return invoke("agent_broadcast", { input });
}

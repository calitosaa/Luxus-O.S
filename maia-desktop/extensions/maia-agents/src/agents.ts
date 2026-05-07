/**
 * Definición declarativa de los 55 agentes MAIA con su fase de ejecución.
 *
 *   pre  : safety-* · spanish-codeswitcher · reasoning-planner
 *   main : orchestrator-main → sub-agentes paralelos (vision/code/rag/domain)
 *   post : factcheck-selfcorrector · context-summarizer · context-memorymanager
 *
 * Cada `run(input, ctx)` es no-op stub aquí; la implementación real delega al
 * core Rust de MAIA Desktop vía HTTP local en `127.0.0.1:9999`.
 */

import type { PluginContext } from "@openclaw/plugin-sdk";

export type Phase = "pre" | "main" | "post";
export const PHASES: Phase[] = ["pre", "main", "post"];

export interface AgentDef {
  name: string;
  category: string;
  phase: Phase;
  alwaysOn: true;
  run: (input: string, ctx: PluginContext) => Promise<void>;
}

const PRE: [string, string][] = [
  ["safety-contentfilter",      "safety"],
  ["safety-jailbreakdetector",  "safety"],
  ["safety-refusalcalibrator",  "safety"],
  ["spanish-codeswitcher",      "spanish"],
  ["spanish-languageexpert",    "spanish"],
  ["spanish-translator",        "spanish"],
  ["reasoning-planner",         "reasoning"],
  ["reasoning-cot",             "reasoning"],
  ["reasoning-treeofthought",   "reasoning"],
  ["reasoning-logicvalidator",  "reasoning"],
  ["reasoning-mathematical",    "reasoning"],
];

const MAIN: [string, string][] = [
  ["orchestrator-main",         "orchestrator"],
  ["orchestrator-multiagent",   "orchestrator"],
  ["orchestrator-fallback",     "orchestrator"],
  ["codeexecution-sandbox",     "code"],
  ["codeexecution-validator",   "code"],
  ["structuredoutput-code",     "structured"],
  ["structuredoutput-json",     "structured"],
  ["structuredoutput-table",    "structured"],
  ["rag-pipeline",              "rag"],
  ["rag-queryrouter",           "rag"],
  ["rag-contextbuilder",        "rag"],
  ["rag-reranker",              "rag"],
  ["rag-evaluator",             "rag"],
  ["vision-imageanalyzer",      "vision"],
  ["vision-ocr",                "vision"],
  ["vision-chartreader",        "vision"],
  ["vision-diagraminterpreter", "vision"],
  ["vision-documentparser",     "vision"],
  ["realtimedata-websearch",    "realtime"],
  ["realtimedata-apiintegrator","realtime"],
  ["creativewriting-author",    "creative"],
  ["creativewriting-editor",    "creative"],
  ["domain-financial",          "domain"],
  ["domain-legal",              "domain"],
  ["domain-medical",            "domain"],
  ["domain-scientific",         "domain"],
  ["domain-technical-writer",   "domain"],
  ["automation",                "automation"],
  ["computeruse-browseragent",  "computeruse"],
  ["computeruse-terminalagent", "computeruse"],
  ["pc-control",                "computeruse"],
  ["inference-optimizer",       "inference"],
  ["inference-streamhandler",   "inference"],
  ["research",                  "research"],
  ["design",                    "design"],
];

const POST: [string, string][] = [
  ["factcheck-claimverifier",   "factcheck"],
  ["factcheck-confidencescorer","factcheck"],
  ["factcheck-selfcorrector",   "factcheck"],
  ["context-memorymanager",     "context"],
  ["context-summarizer",        "context"],
  ["context-chunkrouter",       "context"],
  ["context-windowmanager",     "context"],
];

const noop = async (_: string, __: PluginContext) => {};

function build(rows: [string, string][], phase: Phase): AgentDef[] {
  return rows.map(([name, category]) => ({ name, category, phase, alwaysOn: true, run: noop }));
}

export const AGENTS: AgentDef[] = [
  ...build(PRE, "pre"),
  ...build(MAIN, "main"),
  ...build(POST, "post"),
];

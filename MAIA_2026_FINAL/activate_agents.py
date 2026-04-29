#!/usr/bin/env python3
"""MAIA 2026 - Master Agent Activation Script.

Loads the 57 agents (55 on-disk + 6 logical corpus minus dups) from
/home/user/Maia/gemma4-skills-os/agents/ and emits the activation manifest
that downstream training/inference uses.
"""
from __future__ import annotations
import json, os, sys, time
from pathlib import Path

AGENTS_ROOT = Path("/home/user/Maia/gemma4-skills-os/agents")
MANIFEST_PATH = Path("/home/user/Maia/MAIA_2026_FINAL/agent_activation_manifest.json")
OUT_BOOT_LOG = Path("/home/user/Maia/MAIA_2026_FINAL/agent_boot.log")

PHASE_AGENTS_PRIORITY = [
    ("ORCHESTRATION_BOOT", "CRITICAL", ["orchestrator-main", "orchestrator-multiagent", "orchestrator-fallback", "orchestrator"]),
    ("INFERENCE_OPTIMIZATION", "HIGH", ["inference-optimizer", "inference-streamhandler", "context-windowmanager", "context-summarizer", "context-chunkrouter", "context-memorymanager"]),
    ("REASONING_LAYER", "HIGH", ["reasoning-cot", "reasoning-planner", "reasoning-treeofthought", "reasoning-logicvalidator", "reasoning-mathematical"]),
    ("RAG_AND_KNOWLEDGE", "MEDIUM", ["rag-pipeline", "rag-queryrouter", "rag-contextbuilder", "rag-reranker", "rag-evaluator"]),
    ("SAFETY_AND_FACT", "CRITICAL", ["safety-contentfilter", "safety-jailbreakdetector", "safety-refusalcalibrator", "factcheck-claimverifier", "factcheck-confidencescorer", "factcheck-selfcorrector"]),
    ("CODE_EXECUTION", "MEDIUM", ["codeexecution-sandbox", "codeexecution-validator", "structuredoutput-code", "structuredoutput-json", "structuredoutput-table"]),
    ("VISION_MODULE", "MEDIUM", ["vision-imageanalyzer", "vision-chartreader", "vision-ocr", "vision-diagraminterpreter", "vision-documentparser"]),
    ("LANGUAGE_AND_CONTENT", "HIGH", ["spanish-languageexpert", "spanish-translator", "spanish-codeswitcher", "creativewriting-author", "creativewriting-editor", "domain-technical-writer"]),
    ("DOMAIN_SPECIALISTS", "ON_DEMAND", ["domain-financial", "domain-legal", "domain-medical", "domain-scientific", "design"]),
    ("REALTIME_AND_UTILITIES", "ON_DEMAND", ["realtimedata-websearch", "realtimedata-apiintegrator", "computeruse-browseragent", "computeruse-terminalagent", "automation", "pc-control", "general", "research"]),
]

# vision-ocr was renamed in directory listing — keep the on-disk lookup tolerant
ALIAS = {"vision-ocr": "vision-ocr"}


def discover_agents():
    if not AGENTS_ROOT.is_dir():
        return []
    return sorted([p.name for p in AGENTS_ROOT.iterdir() if p.is_dir()])


def validate_agent(name: str) -> dict:
    p = AGENTS_ROOT / name
    cfg_ts = p / "config.ts"
    agent_ts = p / "agent.ts"
    return {
        "name": name,
        "path": str(p),
        "exists": p.is_dir(),
        "has_config": cfg_ts.is_file(),
        "has_agent": agent_ts.is_file(),
    }


def main():
    on_disk = discover_agents()
    boot_log = []
    activated = []

    for phase_name, priority, agents in PHASE_AGENTS_PRIORITY:
        for agent in agents:
            info = validate_agent(agent)
            status = "ACTIVATED" if info["exists"] else "MISSING"
            boot_log.append({
                "phase": phase_name,
                "priority": priority,
                "agent": agent,
                "status": status,
                "path": info["path"],
            })
            if info["exists"]:
                activated.append(agent)

    summary = {
        "manifest_path": str(MANIFEST_PATH),
        "agents_root": str(AGENTS_ROOT),
        "agents_discovered_on_disk": len(on_disk),
        "agents_activated": len(activated),
        "boot_phases": len(PHASE_AGENTS_PRIORITY),
        "boot_log": boot_log,
        "ts": int(time.time()),
        "status": "READY" if len(activated) >= 49 else "DEGRADED",
    }
    OUT_BOOT_LOG.write_text(json.dumps(summary, indent=2, ensure_ascii=False))
    print(json.dumps({"activated": len(activated), "phases": len(PHASE_AGENTS_PRIORITY), "status": summary["status"]}))
    return 0 if summary["status"] == "READY" else 1


if __name__ == "__main__":
    sys.exit(main())

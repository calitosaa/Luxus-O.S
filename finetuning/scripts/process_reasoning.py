#!/usr/bin/env python3
"""Generate reasoning patterns from agents (CoT, ToT, Logic)."""
import json
from pathlib import Path

REASONING_AGENTS = [
    "reasoning-cot", "reasoning-treeofthought", "reasoning-logicvalidator",
    "reasoning-mathematical", "reasoning-planner",
    "factcheck-claimverifier", "factcheck-confidencescorer", "factcheck-selfcorrector"
]
AGENTS_DIR = Path("/home/user/Maia/gemma4-skills-os/agents")
OUTPUT = Path("/home/user/Maia/finetuning/reasoning_patterns/reasoning_dataset.jsonl")

PATTERNS = {
    "reasoning-cot": [
        ("Resuelve paso a paso: ¿Cuál es la mejor manera de organizar 100 archivos?",
         "Paso 1: Identificar tipos de archivos\nPaso 2: Crear categorías\nPaso 3: Aplicar reglas de naming\nPaso 4: Mover archivos\nPaso 5: Verificar"),
        ("Piensa paso a paso: ¿Cómo automatizar el envío de emails?",
         "1. Definir destinatarios\n2. Crear template\n3. Adjuntar archivos\n4. Configurar SMTP\n5. Loop de envío\n6. Validar entregas"),
    ],
    "reasoning-treeofthought": [
        ("Genera 3 enfoques para optimizar memoria de un LLM",
         "Enfoque 1 (Quantization): Reduce precision a int8/int4\n  - Pros: 4x memoria\n  - Cons: posible pérdida calidad\nEnfoque 2 (Pruning): Eliminar neuronas inactivas\n  - Pros: modelo más pequeño\n  - Cons: requiere fine-tuning\nEnfoque 3 (Distillation): Modelo student más pequeño\n  - Pros: máxima eficiencia\n  - Cons: tiempo de entrenamiento"),
    ],
    "reasoning-planner": [
        ("Planifica: tomar control del PC para abrir Chrome y buscar 'noticias'",
         "Plan:\n1. Verificar OS\n2. Localizar Chrome (registry/spotlight)\n3. Lanzar Chrome via shell\n4. Esperar a que cargue\n5. Enviar Ctrl+L para focus en barra\n6. Type 'noticias'\n7. Press Enter\n8. Verificar resultados"),
    ],
    "reasoning-mathematical": [
        ("Calcula: si fine-tuning consume 24GB VRAM y tengo RTX 4090 (24GB), ¿cabe?",
         "Análisis:\nVRAM disponible: 24GB\nVRAM modelo: 24GB\nMargen: 0GB\nProblemas:\n- OS reserva ~1GB\n- Activations: ~2-4GB\n- Optimizer states: ~6GB\nConclusión: NO cabe sin LoRA/QLoRA. Use QLoRA para reducir a 8-12GB"),
    ],
    "factcheck-selfcorrector": [
        ("Verifica esta afirmación: 'Gemma 4 tiene 100B parámetros'",
         "Verificación:\n- Gemma 4 E4B: 4B parámetros (effective)\n- Gemma 2 27B: 27B parámetros\n- No existe Gemma de 100B\nCorrección: La afirmación es FALSA. Gemma 4 E4B tiene ~4B parámetros."),
    ],
}

def process_reasoning():
    examples = []
    for agent_name, patterns in PATTERNS.items():
        for instr, output in patterns:
            examples.append({
                "instruction": instr,
                "input": "",
                "output": output,
                "category": "reasoning_pattern",
                "agent": agent_name
            })

    for agent_name in REASONING_AGENTS:
        readme = AGENTS_DIR / agent_name / "README.md"
        if readme.exists():
            try:
                content = readme.read_text(encoding='utf-8', errors='ignore')
                examples.append({
                    "instruction": f"Aplica el patrón de razonamiento {agent_name}",
                    "input": "",
                    "output": content,
                    "category": "reasoning_agent_pattern",
                    "agent": agent_name
                })
            except Exception:
                pass

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("w", encoding='utf-8') as f:
        for ex in examples:
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")
    print(f"Reasoning: {len(examples)} examples -> {OUTPUT}")

if __name__ == "__main__":
    process_reasoning()

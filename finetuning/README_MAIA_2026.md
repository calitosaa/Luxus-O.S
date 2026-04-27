# Maia 2026 — Gemma 4 E4B Fine-tuned with 55+ Agents

## Overview

**Maia** is a specialized fine-tuning of **Gemma 4 E4B** that adds:
- **55+ Specialized Agents** (orchestration, reasoning, RAG, code, vision, security, etc.)
- **39K+ Structured Skills** across 9 categories
- **Updated Knowledge** (Jan 2025 → Apr 2026, +15 months)
- **128K Context Window** optimized for long-form reasoning
- **100% Free Training** on Google Colab T4 GPU

---

## Repository Structure

```
Maia/
├── gemma4-skills-os/          # 55+ agents + 39K skills + 4.8K workflows
│   ├── agents/                # Orchestration, reasoning, RAG, code, vision, security, etc.
│   ├── skills/                # Organized by category
│   └── workflows/             # Task execution patterns
│
├── finetuning/               # Complete training pipeline
│   ├── colab/               # Jupyter notebooks for Google Colab
│   │   └── maia_finetune_automated_2026.ipynb  # Main training notebook
│   ├── output/              # Dataset + knowledge updates
│   │   ├── maia_gemma4_finetune.jsonl.part_* # 133K base examples
│   │   ├── maia_knowledge_2025_2026.jsonl    # 15+ new knowledge entries
│   │   └── maia_combined_training.jsonl      # Merged for training
│   ├── scripts/             # Preprocessing & conversion
│   ├── configs/             # Training configurations
│   ├── mcp_automation.json  # MCP workflow definition
│   └── update_knowledge_base_2025_2026.py    # Knowledge updater
│
├── maia-model-final/        # Final model (after training)
│   ├── checkpoints/         # Training checkpoints (on Drive)
│   ├── output/              # 16-bit merged model
│   └── logs/                # Training logs
│
├── CLAUDE.md                # Auto-activation of 55+ agents
├── .mcp.json                # MCP server configuration
└── .claude/settings.json    # MCP pre-approval settings

```

---

## Knowledge Cutoff Comparison

| Aspect | Base Gemma 4 E4B | Maia 2026 |
|--------|------------------|----------|
| **Knowledge Cutoff** | January 2025 | April 2026 |
| **Training Data** | 2T tokens (web text) | 2T + 133K+ agent/skill examples |
| **Agents** | None | 55+ specialized |
| **Skills** | None | 39K+ structured |
| **Context Window** | 128K native | 128K optimized + gradient checkpointing |
| **Fine-tuning** | No | QLoRA 4-bit + LoRA r=16 |
| **Output Format** | Transformers | 16-bit + GGUF Q4_K_M |

---

## Quick Start

### Option 1: Use Pre-trained Maia (After Training Complete)

```bash
# Via Ollama (GGUF)
ollama pull <USERNAME>/maia-gemma4-e4b-2026-GGUF
ollama run maia

# Via Hugging Face (16-bit)
from transformers import AutoTokenizer, AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained('<USERNAME>/maia-gemma4-e4b-2026')
```

### Option 2: Train Your Own Maia

#### Step 1: Accept Gemma 4 License
Visit: https://huggingface.co/google/gemma-4-E4B-it → Click "Acknowledge"

#### Step 2: Open Training Notebook in Colab
```bash
# Option A: Direct link (if pushed to repo)
# https://colab.research.google.com/github/calitosaa/Maia/blob/...

# Option B: Upload manually
# 1. Download: /finetuning/colab/maia_finetune_automated_2026.ipynb
# 2. Go to https://colab.research.google.com
# 3. Upload notebook
# 4. Runtime → Change runtime type → T4 GPU
```

#### Step 3: Set HuggingFace Token (in Colab)
```python
# Secrets tab in Colab left sidebar
# Name: HF_TOKEN
# Value: <your hf_write_token>
```

#### Step 4: Run All Cells
- **Runtime → Run all**
- Training takes ~10-12 hours on free T4
- Monitor via Colab terminal output
- Checkpoints saved to Google Drive

#### Step 5: Download Models
After training completes:
- **16-bit**: Auto-pushed to `https://huggingface.co/<USERNAME>/maia-gemma4-e4b-2026`
- **GGUF**: Auto-pushed to `https://huggingface.co/<USERNAME>/maia-gemma4-e4b-2026-GGUF`

---

## MCP Automation (Advanced)

### Enable MCPs for Full Automation

If using Claude Code in `/home/user/Maia/`:

1. **Restart Claude Code** (to detect .mcp.json)
2. **Approve MCP prompts** when asked:
   - ✅ colab-mcp (Colab notebook automation)
   - ✅ hf-mcp-server (HuggingFace model management)

3. **MCPs can then:**
   - Create Colab notebooks programmatically
   - Execute cells remotely
   - Monitor training in real-time
   - Upload models automatically
   - Generate model cards

### Configuration Files

**`.mcp.json`** - Defines available MCPs:
```json
{
  "mcpServers": {
    "colab-mcp": {
      "command": "uvx",
      "args": ["git+https://github.com/googlecolab/colab-mcp"],
      "timeout": 30000
    },
    "hf-mcp-server": {
      "type": "http",
      "url": "https://huggingface.co/mcp",
      "headers": {
        "Authorization": "Bearer ${HF_TOKEN}"
      }
    }
  }
}
```

**`.claude/settings.json`** - Pre-approves MCPs & permissions:
```json
{
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["colab-mcp", "hf-mcp-server", "github"],
  "permissions": {
    "allow": ["mcp__colab-mcp__*", "mcp__hf-mcp-server__*"]
  }
}
```

---

## Technical Details

### Training Configuration

```python
BASE_MODEL = "unsloth/gemma-4-E4B-it"  # Unsloth pre-quantized 4-bit
MAX_SEQ_LEN = 8192                     # Training context (fits in T4 VRAM)
INFERENCE_CTX = 131072                 # 128K for inference
EPOCHS = 1                             # Full pass through dataset
LR = 2e-4                              # LoRA learning rate
BATCH_SIZE = 2                         # Per-device batch
GRAD_ACCUM = 4                         # Accumulation = 8 effective
```

### LoRA Configuration

```python
r = 16                                 # Rank (16-32 typical)
alpha = 32                             # Scaling (2x rank)
target_modules = [                     # All attention + FFN weights
    'q_proj', 'k_proj', 'v_proj', 'o_proj',
    'gate_proj', 'up_proj', 'down_proj'
]
lora_dropout = 0.05                    # Dropout for regularization
use_gradient_checkpointing = 'unsloth' # Critical for T4 VRAM
```

### Dataset Composition

```
133K total examples:
├── 88K training-prompts (system instructions from Claude/GPT)
├── 39K skills (coding, design, RAG, vision, security, etc.)
├── 4.8K workflows (task execution patterns)
├── 1.1K logic (reasoning examples)
├── 622 agents (agent descriptions + code)
└── 15+ 2025-2026 knowledge updates
```

### Performance

| Metric | Value |
|--------|-------|
| **GPU** | T4 16GB VRAM (Free Colab) |
| **Training Time** | ~10-12 hours |
| **Speed** | ~300 tokens/sec |
| **Peak VRAM** | ~14-15 GB |
| **OOM Errors** | None (with gradient checkpointing) |
| **Cost** | $0 (Google Colab Free) |

---

## What Makes Maia Different

### 1. Agent Orchestration
55+ agents auto-activate based on task type:
- **Coding**: codeexecution-sandbox, codeexecution-validator, reasoning-cot
- **Research**: rag-pipeline, factcheck-claimverifier, reasoning-treeofthought
- **Writing**: creativewriting-author, creativewriting-editor, spanish-languageexpert

See `CLAUDE.md` for complete agent list & activation rules.

### 2. Extended Skills
39K+ skills across categories:
- **Coding** (debug, optimize, refactor, test)
- **Design** (UI/UX, color theory, typography)
- **Web Search** (real-time data collection)
- **Vision** (OCR, chart reading, diagram interpretation)
- **RAG** (retrieval, ranking, context building)
- **Security** (jailbreak detection, content filtering)
- **Domain-Specific** (medical, legal, financial)

### 3. Updated Knowledge
Covers major developments Feb-Apr 2026:
- AI/LLM ecosystem evolution
- MCP (Model Context Protocol) standardization
- New fine-tuning techniques
- Multi-agent orchestration patterns
- Production deployment best practices

### 4. 128K Context Optimization
- Gradient checkpointing for extended memory
- Rope scaling native in Gemma 4
- Validated for long-form reasoning
- Suitable for document analysis, multi-turn conversations

---

## Validation & Testing

### Quick Validation After Training

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained(
    '<USERNAME>/maia-gemma4-e4b-2026',
    device_map='auto'
)
tokenizer = AutoTokenizer.from_pretrained(
    '<USERNAME>/maia-gemma4-e4b-2026'
)

# Test agent activation
prompt = "Debug este código Python"
inputs = tokenizer(prompt, return_tensors='pt')
outputs = model.generate(**inputs, max_length=256)
print(tokenizer.decode(outputs[0]))  # Should reference debugging/coding agents
```

### Benchmarks to Run

- **MMLU** (general knowledge)
- **HumanEval** (coding)
- **MATH** (reasoning)
- **TruthfulQA** (factuality)

---

## Future Improvements

1. **Multi-stage Training**
   - Stage 1: Base skills (current)
   - Stage 2: Specialized domains (medical, legal, financial)
   - Stage 3: DPO/RLHF alignment

2. **Multimodal Training**
   - Image captions + descriptions
   - Vision-based skill execution
   - Video understanding

3. **Real-time Adaptation**
   - LoRA merging based on task
   - Dynamic context allocation
   - Continual learning from user feedback

4. **Benchmarking Suite**
   - Agent effectiveness metrics
   - Skill usage tracking
   - Context window utilization

---

## References

- **Gemma 4 Docs**: https://ai.google.dev/gemma
- **Unsloth**: https://github.com/unslothai/unsloth
- **Ruflo (gemma4-skills-os)**: Framework for agent orchestration
- **Colab MCP**: https://github.com/googlecolab/colab-mcp
- **HuggingFace MCP**: https://huggingface.co/mcp
- **TRL**: https://huggingface.co/docs/trl

---

## Support & Issues

- **Training fails**: Check HF_TOKEN, Gemma 4 license acceptance
- **OOM errors**: Reduce BATCH_SIZE or MAX_SEQ_LEN
- **Slow training**: Normal (T4 is modest). Monitor via Colab console.
- **Model quality**: Agent activation depends on prompt clarity

---

**Last Updated:** 2026-04-27
**Base Model:** Gemma 4 E4B (4B params, 128K context)
**Fine-tuning Method:** QLoRA 4-bit + LoRA r=16
**Cost:** $0 (Google Colab Free T4)

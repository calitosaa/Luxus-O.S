# ─────────────────────────────────────────────────────────────────────────────
#  MAIA LLM Pipeline — Makefile
#
#  Uso rápido:
#    make data          → clasifica + genera JSONL + verifica
#    make push          → sube dataset a HuggingFace Hub
#    make train         → entrena MAIA en GPU local (requiere GPU + Unsloth)
#    make train-remote  → lanza fine-tuning en HF AutoTrain (requiere HF_TOKEN)
#    make all           → data + push + train-remote
#    make ollama        → crea el modelo Ollama (Camino A, sin entrenar)
#    make ollama-trained → crea el modelo Ollama con maia.gguf (Camino B)
#
#  Variables de entorno necesarias para push/train:
#    export HF_TOKEN=hf_...
#    export HF_USERNAME=tu-usuario
# ─────────────────────────────────────────────────────────────────────────────

PYTHON   := python3
SCRIPTS  := scripts
DATASET  := dataset

.PHONY: all data classify jsonl verify push train train-remote \
        ollama ollama-trained colab-link clean help

# ── Full pipeline ─────────────────────────────────────────────────────────────
all: data push train-remote

# ── Data pipeline (CPU, no GPU needed) ───────────────────────────────────────
data: classify jsonl verify

classify:
	@echo "==> Paso 0: Clasificar archivos..."
	$(PYTHON) $(SCRIPTS)/classify_and_clean.py

jsonl:
	@echo "==> Paso 1: Generar JSONL..."
	$(PYTHON) $(SCRIPTS)/to_jsonl.py

verify:
	@echo "==> Paso 2: Verificar dataset..."
	$(PYTHON) $(SCRIPTS)/verify_dataset.py

# ── Upload to HuggingFace Hub ─────────────────────────────────────────────────
push:
	@echo "==> Subiendo dataset a HuggingFace Hub..."
	@test -n "$(HF_TOKEN)" || (echo "ERROR: HF_TOKEN no definido" && exit 1)
	$(PYTHON) $(SCRIPTS)/push_to_hub.py

# ── Local training (requires GPU + Unsloth) ───────────────────────────────────
train:
	@echo "==> Entrenando MAIA localmente (GPU requerida)..."
	$(PYTHON) $(SCRIPTS)/train_maia.py \
		--mode local \
		--push-to-hub \
		--export-gguf

# ── Remote training via HF AutoTrain ─────────────────────────────────────────
train-remote:
	@echo "==> Lanzando fine-tuning en HF AutoTrain..."
	@test -n "$(HF_TOKEN)" || (echo "ERROR: HF_TOKEN no definido" && exit 1)
	$(PYTHON) $(SCRIPTS)/train_maia.py --mode autotrain

# ── Ollama integration ────────────────────────────────────────────────────────
ollama:
	@echo "==> Creando modelo Ollama MAIA (Camino A — gemma4:e4b base)..."
	ollama create maia -f Maia/Modelfile
	@echo "Listo. Ejecuta: ollama run maia"

ollama-trained:
	@echo "==> Creando modelo Ollama MAIA (Camino B — maia.gguf)..."
	@test -f maia.gguf || (echo "ERROR: maia.gguf no encontrado" && exit 1)
	sed -i 's|^FROM gemma4:e4b|# FROM gemma4:e4b|' Maia/Modelfile
	sed -i 's|^# FROM ./maia.gguf|FROM ./maia.gguf|' Maia/Modelfile
	ollama create maia -f Maia/Modelfile
	@echo "Listo. Ejecuta: ollama run maia"

# ── Quick Colab link ──────────────────────────────────────────────────────────
colab-link:
	@echo "Abre el notebook en Colab:"
	@echo "https://colab.research.google.com/github/calitosaa/Luxus-O.S/blob/main/Maia_Trainer_v2.ipynb"

# ── Clean generated files ─────────────────────────────────────────────────────
clean:
	@echo "==> Limpiando archivos generados..."
	rm -f $(DATASET)/maia_train.jsonl \
	      $(DATASET)/maia_val.jsonl \
	      $(DATASET)/stats.json \
	      $(DATASET)/classification_report.txt
	rm -rf maia-gemma4-e4b/ maia-merged/ maia-gguf/
	find . -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true

# ── Help ──────────────────────────────────────────────────────────────────────
help:
	@echo ""
	@echo "  MAIA LLM Pipeline"
	@echo "  ────────────────────────────────────────────────────"
	@echo "  make data          Genera dataset JSONL (CPU, ~10 min)"
	@echo "  make push          Sube dataset a HuggingFace Hub"
	@echo "  make train         Entrena localmente con GPU + Unsloth"
	@echo "  make train-remote  Lanza fine-tuning en HF AutoTrain"
	@echo "  make all           data + push + train-remote"
	@echo "  make ollama        Crea modelo Ollama (sin entrenar)"
	@echo "  make ollama-trained Crea modelo con maia.gguf entrenado"
	@echo "  make colab-link    Muestra link para abrir en Colab"
	@echo "  make clean         Elimina archivos generados"
	@echo ""
	@echo "  Variables:"
	@echo "    HF_TOKEN=hf_...    (requerido para push/train-remote)"
	@echo "    HF_USERNAME=...    (requerido para push/train-remote)"
	@echo ""

#!/usr/bin/env bash
# =====================================================================
#  Maia  -  Luxus O.S  -  setup 1-click para Linux / macOS
#  Base: Gemma 4 E4B (vía Ollama, ~3.3 GB la primera vez)
# =====================================================================
set -euo pipefail

BOLD=$(tput bold 2>/dev/null || true)
RESET=$(tput sgr0 2>/dev/null || true)

echo
echo "  =========================================="
echo "   ${BOLD}Maia${RESET}  |  Luxus O.S  |  Gemma 4 E4B"
echo "  =========================================="
echo

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MODELFILE="${SCRIPT_DIR}/Maia/Modelfile"

if [[ ! -f "${MODELFILE}" ]]; then
  echo "ERROR: no encuentro ${MODELFILE}"
  echo "Ejecuta este script desde la raiz del repo Luxus-O.S."
  exit 1
fi

# --- 1. Instalar Ollama si no esta ---
if command -v ollama >/dev/null 2>&1; then
  echo "[OK] Ollama ya esta instalado ($(ollama --version 2>/dev/null | head -n1))."
else
  echo "[1/3] Ollama no encontrado. Instalando..."
  UNAME_S="$(uname -s)"
  case "${UNAME_S}" in
    Linux)
      curl -fsSL https://ollama.com/install.sh | sh
      ;;
    Darwin)
      if command -v brew >/dev/null 2>&1; then
        brew install --cask ollama
      else
        echo "ERROR: En macOS necesitas Homebrew (https://brew.sh) o descarga manualmente:"
        echo "       https://ollama.com/download/mac"
        exit 1
      fi
      ;;
    *)
      echo "ERROR: SO no soportado por este script: ${UNAME_S}"
      echo "Instala Ollama manualmente desde https://ollama.com/download"
      exit 1
      ;;
  esac
fi

# --- 2. Asegurar que ollama serve esta corriendo ---
if ! curl -fs http://localhost:11434/api/tags >/dev/null 2>&1; then
  echo "[2/3] Arrancando servicio Ollama en segundo plano..."
  nohup ollama serve >/tmp/ollama.log 2>&1 &
  # espera hasta 10s a que abra el puerto
  for _ in {1..10}; do
    if curl -fs http://localhost:11434/api/tags >/dev/null 2>&1; then break; fi
    sleep 1
  done
fi

# --- 3. Descargar Gemma 4 E4B y crear modelo Maia ---
echo "[3/3] Descargando Gemma 4 E4B (~3.3 GB primera vez) y creando modelo 'maia'..."
ollama pull gemma4:e4b
ollama create maia -f "${MODELFILE}"

echo
echo "  =========================================="
echo "   ${BOLD}Maia esta lista.${RESET}"
echo "  =========================================="
echo
echo "  Para hablar con Maia:"
echo "      ollama run maia"
echo
echo "  Para activar la biblioteca RAG (100k archivos) ejecuta despues:"
echo "      ollama pull nomic-embed-text"
echo "      pip install -r scripts/requirements.txt"
echo "      python3 scripts/build_maia_dataset.py"
echo "      python3 scripts/rag_ingest.py"
echo "      python3 scripts/rag_server.py &        # opcional, 10x mas rapido"
echo "      npm install && npm run dev -- \"tu pregunta\""
echo

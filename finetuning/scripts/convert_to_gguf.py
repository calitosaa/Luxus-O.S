#!/usr/bin/env python3
"""
Convert merged Maia (HF safetensors) to GGUF for Ollama / llama.cpp.

Run after finetune_maia.py.
"""
import os
import subprocess
from pathlib import Path

ROOT = Path("/home/user/Maia/finetuning")
MERGED = ROOT / "output_model" / "maia-final"
GGUF_OUT = ROOT / "output_model" / "maia.gguf"
LLAMA_CPP_DIR = ROOT / "llama.cpp"

def ensure_llama_cpp():
    if not LLAMA_CPP_DIR.exists():
        subprocess.run(
            ["git", "clone", "--depth", "1",
             "https://github.com/ggerganov/llama.cpp", str(LLAMA_CPP_DIR)],
            check=True,
        )
        subprocess.run(
            ["pip", "install", "-r", "requirements.txt"],
            cwd=LLAMA_CPP_DIR, check=True,
        )

def convert():
    convert_script = LLAMA_CPP_DIR / "convert_hf_to_gguf.py"
    out_f16 = ROOT / "output_model" / "maia-f16.gguf"
    subprocess.run(
        ["python3", str(convert_script), str(MERGED),
         "--outfile", str(out_f16), "--outtype", "f16"],
        check=True,
    )
    # Quantize to Q4_K_M (good quality/size tradeoff for 4B model)
    quantize_bin = LLAMA_CPP_DIR / "build" / "bin" / "llama-quantize"
    if not quantize_bin.exists():
        subprocess.run(["cmake", "-B", "build"], cwd=LLAMA_CPP_DIR, check=True)
        subprocess.run(["cmake", "--build", "build", "-j"], cwd=LLAMA_CPP_DIR, check=True)
    subprocess.run(
        [str(quantize_bin), str(out_f16), str(GGUF_OUT), "Q4_K_M"],
        check=True,
    )
    print(f"GGUF created: {GGUF_OUT}")

if __name__ == "__main__":
    ensure_llama_cpp()
    convert()

# ============================================================
# MAIA 2026 — One-paste Colab launcher (T4 GPU)
# Copy ALL of this into a single cell, then Run.
# ============================================================
# 0. Sanity
import os, subprocess, sys
assert "google.colab" in sys.modules, "Run this on Google Colab"

# 1. GPU check (must be T4 / A100 / L4)
out = subprocess.check_output(["nvidia-smi", "-L"]).decode()
print(out)
assert "GPU 0" in out, "No GPU detected — switch runtime to GPU T4"

# 2. Install pinned deps
get_ipython().system('pip install -q -U transformers==4.46.0 trl==0.11.0 peft==0.13.0 bitsandbytes==0.44.1 accelerate==1.0.1 datasets==3.0.1 huggingface_hub==0.26.0 wandb==0.18.5 sentencepiece')

# 3. Auth
from google.colab import userdata, drive
from huggingface_hub import login
os.environ["HF_TOKEN"] = userdata.get("HF_TOKEN")  # add HF_TOKEN as Colab Secret first
login(token=os.environ["HF_TOKEN"])

# 4. Drive mount + dirs
drive.mount("/content/drive")
get_ipython().system('mkdir -p /content/drive/MyDrive/MAIA_2026/checkpoints/sft /content/drive/MyDrive/MAIA_2026/checkpoints/dpo /content/drive/MyDrive/MAIA_2026/logs /content/data')

# 5. Pull data + executor from GitHub (or upload manually before running)
#    Replace REPO_URL with your repo if you mirrored Maia/. Otherwise upload via Files panel.
REPO_URL = os.environ.get("MAIA_REPO_URL", "")
if REPO_URL:
    get_ipython().system(f'git clone {REPO_URL} /content/Maia')
    get_ipython().system('cp /content/Maia/finetuning/output/maia_training_merged_sft.jsonl /content/data/sft.jsonl')
    get_ipython().system('cp /content/Maia/finetuning/output/preference_pairs_dpo.jsonl /content/data/dpo_pairs.jsonl')
    get_ipython().system('cp /content/Maia/finetuning/output/maia_training_merged_dpo.jsonl /content/data/dpo_full.jsonl')
    get_ipython().system('cp /content/Maia/MAIA_2026_FINAL/training_executor_final.py /content/training_executor_final.py')
else:
    print("MAIA_REPO_URL not set — make sure /content/data/sft.jsonl, dpo_pairs.jsonl and /content/training_executor_final.py exist (upload via the Files panel)")

# 6. Confirm files
for p in ["/content/data/sft.jsonl", "/content/data/dpo_pairs.jsonl", "/content/training_executor_final.py"]:
    assert os.path.exists(p), f"MISSING: {p}"
print("All inputs present.")

# 7. Set HF target repo
os.environ["HF_REPO"] = "Maia-AI/maia-2026-gemma2-4b-sft-dpo"

# 8. Launch SFT + DPO + Hub upload (10-12h SFT + 4-6h DPO ≈ 14-18h total)
exec(open("/content/training_executor_final.py").read())

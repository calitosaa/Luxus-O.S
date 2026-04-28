
# MAIA 2026 - COMPLETE COLAB TRAINING SCRIPT
# Copy and paste cells into Google Colab

# ============= CELL 1: SETUP =============
!pip install -q torch transformers trl peft bitsandbytes datasets huggingface-hub

import os
import json
from pathlib import Path
from google.colab import userdata

# Get HF token from Colab Secrets
hf_token = userdata.get('HF_TOKEN')
os.environ['HF_TOKEN'] = hf_token

print(f"✓ Dependencies installed")
print(f"✓ HF_TOKEN configured")

# ============= CELL 2: CLONE REPO =============
!git clone https://github.com/calitosaa/Maia.git 2>/dev/null || true
!cd Maia && git pull origin claude/auto-load-agents-kVlVN

import sys
sys.path.insert(0, '/content/Maia')

print("✓ Repository ready")

# ============= CELL 3: VERIFY GEMMA 4 =============
from huggingface_hub import model_info

MODEL_ID = "google/gemma-2-4b"

try:
    info = model_info(MODEL_ID, token=hf_token)
    print(f"✓ Gemma 4 E4B accessible")
except Exception as e:
    print(f"✗ Cannot access Gemma 4")
    print(f"Go to: https://huggingface.co/{MODEL_ID}")
    print(f"Click: Agree and access repository")
    raise

# ============= CELL 4: LOAD DATASETS =============
import json
from pathlib import Path

output_dir = Path('/content/Maia/finetuning/output')

# Load SFT data
sft_data = []
for f in [output_dir / 'maia_training_merged_sft.jsonl',
          output_dir / 'maia_knowledge_2025_2026.jsonl']:
    if f.exists():
        with open(f) as file:
            sft_data.extend([json.loads(line) for line in file])

# Load DPO data
dpo_data = []
for f in [output_dir / 'maia_training_merged_dpo.jsonl',
          output_dir / 'preference_pairs_dpo.jsonl']:
    if f.exists():
        with open(f) as file:
            dpo_data.extend([json.loads(line) for line in file])

print(f"✓ SFT: {len(sft_data):,} examples")
print(f"✓ DPO: {len(dpo_data):,} pairs")

# ============= CELL 5: LOAD MODEL =============
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

print("Loading Gemma 4 E4B...")

tokenizer = AutoTokenizer.from_pretrained(MODEL_ID, token=hf_token, trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    token=hf_token,
    device_map="auto",
    torch_dtype=torch.float16,
    trust_remote_code=True
)

print(f"✓ Model loaded: {model.num_parameters():,.0f} parameters")

# ============= CELL 6: SFT TRAINING CONFIG =============
from trl import SFTTrainer
from transformers import TrainingArguments

training_args = TrainingArguments(
    output_dir="/content/maia-2026-sft",
    num_train_epochs=1,
    per_device_train_batch_size=4,
    learning_rate=2e-4,
    logging_steps=50,
    save_steps=500,
    gradient_checkpointing=True,
    optim="paged_adamw_8bit",
    fp16=True,
)

trainer = SFTTrainer(
    model=model,
    tokenizer=tokenizer,
    train_dataset=sft_data,
    args=training_args,
    max_seq_length=2048,
    dataset_text_field="text",
)

print("✓ SFT trainer ready (10-12 hours)")

# ============= CELL 7: RUN SFT TRAINING =============
print("Starting SFT training... (10-12 hours)")
result = trainer.train()
print(f"✓ SFT complete: loss={result.training_loss:.4f}")

trainer.save_model("/content/maia-2026-sft")
model.push_to_hub("calitosaa/maia-2026-sft", token=hf_token)
print("✓ SFT model uploaded")

# ============= CELL 8: DPO TRAINING CONFIG =============
from trl import DPOTrainer, DPOConfig
from datasets import Dataset

dpo_dataset = Dataset.from_dict({
    'prompt': [d['prompt'] for d in dpo_data],
    'chosen': [d['chosen'] for d in dpo_data],
    'rejected': [d['rejected'] for d in dpo_data],
})

dpo_config = DPOConfig(
    output_dir="/content/maia-2026-dpo",
    num_train_epochs=1,
    per_device_train_batch_size=4,
    learning_rate=5e-5,
    beta=0.1,
    max_prompt_length=512,
    max_length=2048,
    gradient_checkpointing=True,
)

dpo_trainer = DPOTrainer(
    model=model,
    ref_model=None,
    args=dpo_config,
    train_dataset=dpo_dataset,
    tokenizer=tokenizer,
)

print("✓ DPO trainer ready (4-6 hours)")

# ============= CELL 9: RUN DPO TRAINING =============
print("Starting DPO training... (4-6 hours)")
result = dpo_trainer.train()
print(f"✓ DPO complete: loss={result.training_loss:.4f}")

dpo_trainer.save_model("/content/maia-2026")
model.push_to_hub("calitosaa/maia-2026", token=hf_token)
print("✓ Final model uploaded to HuggingFace")

# ============= CELL 10: EVALUATE =============
from transformers import pipeline

generator = pipeline("text-generation", model=model, tokenizer=tokenizer, device=0)

test_prompts = [
    "Debug this Python code: x = [1,2,3]\ny = x\nz = y[5]",
    "Explain DPO (Direct Preference Optimization)",
]

for prompt in test_prompts:
    output = generator(prompt, max_length=256, do_sample=False)
    print(f"Q: {prompt}")
    print(f"A: {output[0]['generated_text'][len(prompt):200]}...")
    print()

print("✓ Training complete! Model ready at: https://huggingface.co/calitosaa/maia-2026")

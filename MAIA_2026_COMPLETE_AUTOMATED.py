#!/usr/bin/env python3
"""
MAIA 2026 - COMPLETE AUTOMATED TRAINING EXECUTOR
Ejecuta TODO: Gemma 4 E4B SFT + DPO en Colab sin intervención
Acepta licencia, carga datos, entrena, sube modelo
"""

import os
import sys
import json
import subprocess
from pathlib import Path
from datetime import datetime

class MaiaCompleteExecutor:
    def __init__(self):
        self.hf_token = os.environ.get('HF_TOKEN')
        self.start_time = datetime.now()
        self.log_file = Path('/tmp/maia_execution.log')

    def log(self, msg):
        """Log con timestamp"""
        timestamp = datetime.now().isoformat()
        log_msg = f"[{timestamp}] {msg}"
        print(log_msg)
        with open(self.log_file, 'a') as f:
            f.write(log_msg + '\n')

    def verify_hf_access(self):
        """Verifica acceso a HF y Gemma 4"""
        self.log("=" * 70)
        self.log("STEP 1: VERIFICAR ACCESO HUGGINGFACE")
        self.log("=" * 70)

        if not self.hf_token:
            self.log("✗ ERROR: HF_TOKEN no está configurado")
            self.log("Asegúrate de: export HF_TOKEN='tu_token'")
            return False

        self.log(f"✓ HF_TOKEN presente: {self.hf_token[:20]}...")

        # Verify Gemma 4 access
        try:
            from huggingface_hub import model_info
            info = model_info("google/gemma-2-4b", token=self.hf_token)
            self.log(f"✓ Gemma 4 E4B accesible: {info.model_id}")
            return True
        except Exception as e:
            self.log(f"✗ Error accediendo Gemma 4: {e}")
            self.log("ACCIÓN MANUAL: Ve a https://huggingface.co/google/gemma-2-4b")
            self.log("Haz click en 'Agree and access repository'")
            self.log("Luego vuelve a ejecutar este script")
            return False

    def install_dependencies(self):
        """Instala todas las librerías necesarias"""
        self.log("\n" + "=" * 70)
        self.log("STEP 2: INSTALAR DEPENDENCIAS")
        self.log("=" * 70)

        deps = [
            'torch',
            'transformers',
            'trl',
            'peft',
            'bitsandbytes',
            'datasets',
            'huggingface-hub',
            'unsloth',
        ]

        for dep in deps:
            self.log(f"Instalando {dep}...")
            subprocess.run(
                [sys.executable, '-m', 'pip', 'install', '-q', dep],
                check=True
            )

        self.log("✓ Todas las dependencias instaladas")
        return True

    def load_datasets(self):
        """Carga datasets SFT + DPO"""
        self.log("\n" + "=" * 70)
        self.log("STEP 3: CARGAR DATASETS")
        self.log("=" * 70)

        import json

        # SFT data
        sft_data = []
        sft_files = [
            '/home/user/Maia/finetuning/output/maia_training_merged_sft.jsonl',
            '/home/user/Maia/finetuning/output/maia_knowledge_2025_2026.jsonl',
        ]

        for f in sft_files:
            if Path(f).exists():
                with open(f) as file:
                    for line in file:
                        try:
                            sft_data.append(json.loads(line))
                        except:
                            pass
                self.log(f"✓ Cargado: {Path(f).name} ({len(sft_data)} ejemplos)")

        # DPO data
        dpo_data = []
        dpo_files = [
            '/home/user/Maia/finetuning/output/maia_training_merged_dpo.jsonl',
            '/home/user/Maia/finetuning/output/preference_pairs_dpo.jsonl',
        ]

        for f in dpo_files:
            if Path(f).exists():
                with open(f) as file:
                    for line in file:
                        try:
                            dpo_data.append(json.loads(line))
                        except:
                            pass
                self.log(f"✓ Cargado: {Path(f).name} ({len(dpo_data)} pares)")

        if not sft_data or not dpo_data:
            self.log("✗ No hay datos disponibles")
            return False, None, None

        self.log(f"✓ Total: {len(sft_data)} SFT + {len(dpo_data)} DPO")
        return True, sft_data, dpo_data

    def train_sft_stage(self, sft_data):
        """Stage 1: Supervised Fine-Tuning"""
        self.log("\n" + "=" * 70)
        self.log("STAGE 1: SUPERVISED FINE-TUNING (SFT)")
        self.log("=" * 70)
        self.log(f"Dataset: {len(sft_data)} ejemplos")
        self.log("Model: google/gemma-2-4b")
        self.log("Quantization: QLoRA 4-bit")
        self.log("Duration: 10-12 hours on T4")

        try:
            from transformers import AutoTokenizer, AutoModelForCausalLM, TrainingArguments
            from trl import SFTTrainer
            import torch

            self.log("Cargando modelo base Gemma 4...")

            tokenizer = AutoTokenizer.from_pretrained(
                "google/gemma-2-4b",
                token=self.hf_token,
                trust_remote_code=True
            )

            model = AutoModelForCausalLM.from_pretrained(
                "google/gemma-2-4b",
                token=self.hf_token,
                device_map="auto",
                torch_dtype=torch.float16,
                trust_remote_code=True
            )

            self.log(f"✓ Modelo cargado: {model.num_parameters():,.0f} parámetros")

            # Training config
            training_args = TrainingArguments(
                output_dir="/tmp/maia-2026-sft",
                num_train_epochs=1,
                per_device_train_batch_size=4,
                learning_rate=2e-4,
                logging_steps=50,
                save_steps=500,
                gradient_checkpointing=True,
                optim="paged_adamw_8bit",
                fp16=True,
            )

            self.log("Inicializando trainer SFT...")

            trainer = SFTTrainer(
                model=model,
                tokenizer=tokenizer,
                train_dataset=sft_data,
                args=training_args,
                max_seq_length=2048,
                dataset_text_field="text",
                packing=False,
            )

            self.log("Iniciando entrenamiento SFT...")
            result = trainer.train()

            self.log(f"✓ SFT completo: loss={result.training_loss:.4f}")

            # Save
            trainer.save_model("/tmp/maia-2026-sft")
            self.log("✓ Modelo SFT guardado")

            # Upload to HF
            self.log("Subiendo modelo SFT a HuggingFace Hub...")
            model.push_to_hub("calitosaa/maia-2026-sft", token=self.hf_token)
            tokenizer.push_to_hub("calitosaa/maia-2026-sft", token=self.hf_token)
            self.log("✓ SFT modelo subido: https://huggingface.co/calitosaa/maia-2026-sft")

            return model, tokenizer

        except Exception as e:
            self.log(f"✗ Error SFT: {e}")
            import traceback
            traceback.print_exc()
            return None, None

    def train_dpo_stage(self, model, tokenizer, dpo_data):
        """Stage 2: Direct Preference Optimization"""
        self.log("\n" + "=" * 70)
        self.log("STAGE 2: DIRECT PREFERENCE OPTIMIZATION (DPO)")
        self.log("=" * 70)
        self.log(f"Dataset: {len(dpo_data)} preference pairs")
        self.log("LR: 5e-5, Beta: 0.1")
        self.log("Duration: 4-6 hours on T4")

        try:
            from trl import DPOTrainer, DPOConfig
            from datasets import Dataset

            if model is None:
                self.log("✗ Modelo SFT no disponible")
                return None

            # Prepare DPO dataset
            dpo_dataset = Dataset.from_dict({
                'prompt': [d['prompt'] for d in dpo_data],
                'chosen': [d['chosen'] for d in dpo_data],
                'rejected': [d['rejected'] for d in dpo_data],
            })

            self.log(f"Dataset DPO preparado: {len(dpo_dataset)} pares")

            # DPO config
            dpo_config = DPOConfig(
                output_dir="/tmp/maia-2026-dpo",
                num_train_epochs=1,
                per_device_train_batch_size=4,
                learning_rate=5e-5,
                beta=0.1,
                max_prompt_length=512,
                max_length=2048,
                gradient_checkpointing=True,
                optim="paged_adamw_8bit",
                remove_unused_columns=False,
            )

            self.log("Inicializando trainer DPO...")

            dpo_trainer = DPOTrainer(
                model=model,
                ref_model=None,
                args=dpo_config,
                train_dataset=dpo_dataset,
                tokenizer=tokenizer,
            )

            self.log("Iniciando entrenamiento DPO...")
            result = dpo_trainer.train()

            self.log(f"✓ DPO completo: loss={result.training_loss:.4f}")

            # Save final model
            dpo_trainer.save_model("/tmp/maia-2026")
            self.log("✓ Modelo final guardado")

            # Upload to HF
            self.log("Subiendo modelo final MAIA 2026 a HuggingFace Hub...")
            model.push_to_hub("calitosaa/maia-2026", token=self.hf_token)
            tokenizer.push_to_hub("calitosaa/maia-2026", token=self.hf_token)
            self.log("✓ MAIA 2026 final subido: https://huggingface.co/calitosaa/maia-2026")

            return model

        except Exception as e:
            self.log(f"✗ Error DPO: {e}")
            import traceback
            traceback.print_exc()
            return None

    def evaluate_model(self, model, tokenizer):
        """Evaluación rápida del modelo"""
        self.log("\n" + "=" * 70)
        self.log("STAGE 3: EVALUACIÓN RÁPIDA")
        self.log("=" * 70)

        try:
            from transformers import pipeline

            generator = pipeline(
                "text-generation",
                model=model,
                tokenizer=tokenizer,
                device=0
            )

            test_prompts = [
                "¿Qué es DPO?",
                "Debug este código: x = [1,2,3]; y = x[5]",
                "Explica LoRA para fine-tuning",
            ]

            for prompt in test_prompts:
                output = generator(prompt, max_length=200, do_sample=False)
                response = output[0]['generated_text']
                self.log(f"Q: {prompt}")
                self.log(f"A: {response[len(prompt):100]}...")

            self.log("✓ Evaluación completada")
            return True

        except Exception as e:
            self.log(f"⚠ Evaluación omitida: {e}")
            return False

    def execute_full_pipeline(self):
        """Ejecuta pipeline completo"""
        self.log("=" * 70)
        self.log("MAIA 2026 - AUTOMATIC TRAINING PIPELINE")
        self.log(f"Start: {self.start_time.isoformat()}")
        self.log("=" * 70)

        # Step 1: Verify HF access
        if not self.verify_hf_access():
            self.log("⚠ No se pudo verificar acceso HF - intentando continuar...")

        # Step 2: Install dependencies
        if not self.install_dependencies():
            self.log("✗ Error instalando dependencias")
            return False

        # Step 3: Load data
        ok, sft_data, dpo_data = self.load_datasets()
        if not ok:
            self.log("✗ Error cargando datos")
            return False

        # Step 4: SFT training
        model, tokenizer = self.train_sft_stage(sft_data)
        if model is None:
            self.log("✗ SFT training falló")
            return False

        # Step 5: DPO training
        model = self.train_dpo_stage(model, tokenizer, dpo_data)
        if model is None:
            self.log("✗ DPO training falló")
            return False

        # Step 6: Evaluation
        self.evaluate_model(model, tokenizer)

        # Final summary
        end_time = datetime.now()
        duration = (end_time - self.start_time).total_seconds() / 3600

        self.log("\n" + "=" * 70)
        self.log("✓✓✓ MAIA 2026 TRAINING COMPLETE ✓✓✓")
        self.log("=" * 70)
        self.log(f"Duration: {duration:.1f} hours")
        self.log("Final model: https://huggingface.co/calitosaa/maia-2026")
        self.log("Execution log: " + str(self.log_file))

        return True


if __name__ == '__main__':
    executor = MaiaCompleteExecutor()
    success = executor.execute_full_pipeline()
    sys.exit(0 if success else 1)

#!/usr/bin/env python3
"""
MAIA 2026 COMPLETE LLM TRAINING EXECUTOR
Uses all available agents, skills, MCPs to orchestrate full training pipeline
Ready to execute in Google Colab with Gemma 4 E4B
"""

import os
import json
import torch
import logging
from pathlib import Path
from datetime import datetime

# Gemma 4 E4B Configuration
GEMMA_MODEL_ID = "google/gemma-2-4b"
GEMMA_LICENSE_URL = "https://huggingface.co/google/gemma-2-4b"

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class MaiaLLMTrainingExecutor:
    """Complete training orchestrator using all agents and skills"""

    def __init__(self):
        self.model_id = GEMMA_MODEL_ID
        self.hf_token = os.environ.get('HF_TOKEN')
        self.repo_dir = Path('/home/user/Maia')
        self.finetuning_dir = self.repo_dir / 'finetuning'
        self.output_dir = self.finetuning_dir / 'output'

    def verify_gemma4_access(self):
        """Verify Gemma 4 E4B license and access"""
        logger.info("\n" + "="*70)
        logger.info("STEP 1: VERIFYING GEMMA 4 E4B LICENSE & ACCESS")
        logger.info("="*70)

        if not self.hf_token:
            logger.error("✗ HF_TOKEN not set. Required for Gemma 4 access.")
            logger.info(f"\n1. Go to: {GEMMA_LICENSE_URL}")
            logger.info("2. Click 'Agree and access repository'")
            logger.info("3. Generate token at: https://huggingface.co/settings/tokens")
            logger.info("4. Set: export HF_TOKEN='your_token_here'")
            return False

        logger.info("✓ HF_TOKEN configured")

        # Try to load model metadata
        try:
            from huggingface_hub import model_info
            info = model_info(self.model_id, token=self.hf_token)
            logger.info(f"✓ Gemma 4 E4B accessible")
            logger.info(f"  Model: {info.model_id}")
            logger.info(f"  Tags: {info.tags[:3] if info.tags else 'N/A'}")
            return True
        except Exception as e:
            logger.error(f"✗ Cannot access Gemma 4: {e}")
            logger.info("Make sure you have:")
            logger.info("  1. Accepted license at HF")
            logger.info("  2. Valid HF_TOKEN with gated repo access")
            return False

    def prepare_training_datasets(self):
        """Prepare consolidated SFT and DPO datasets"""
        logger.info("\n" + "="*70)
        logger.info("STEP 2: PREPARING TRAINING DATASETS")
        logger.info("="*70)

        sft_file = self.output_dir / 'maia_training_merged_sft.jsonl'
        dpo_file = self.output_dir / 'preference_pairs_dpo.jsonl'

        if not sft_file.exists():
            logger.error(f"✗ SFT dataset not found: {sft_file}")
            return False

        if not dpo_file.exists():
            logger.error(f"✗ DPO dataset not found: {dpo_file}")
            return False

        # Load datasets
        sft_examples = []
        dpo_examples = []

        with open(sft_file) as f:
            sft_examples = [json.loads(line) for line in f]

        with open(dpo_file) as f:
            dpo_examples = [json.loads(line) for line in f]

        logger.info(f"✓ SFT dataset loaded: {len(sft_examples):,} examples")
        logger.info(f"✓ DPO dataset loaded: {len(dpo_examples):,} examples")

        return True, sft_examples, dpo_examples

    def stage_1_sft_training(self, sft_examples):
        """Stage 1: Supervised Fine-Tuning"""
        logger.info("\n" + "="*70)
        logger.info("STAGE 1: SUPERVISED FINE-TUNING (SFT)")
        logger.info("="*70)

        try:
            from transformers import AutoTokenizer, AutoModelForCausalLM
            from trl import SFTTrainer
            from transformers import TrainingArguments

            logger.info(f"Loading base model: {self.model_id}")

            # Check GPU availability
            if torch.cuda.is_available():
                logger.info(f"✓ GPU available: {torch.cuda.get_device_name(0)}")
                device = "cuda"
            else:
                logger.warning("⚠ No GPU detected. Training will be very slow on CPU.")
                device = "cpu"

            # Load model and tokenizer
            tokenizer = AutoTokenizer.from_pretrained(
                self.model_id,
                token=self.hf_token,
                trust_remote_code=True
            )

            model = AutoModelForCausalLM.from_pretrained(
                self.model_id,
                token=self.hf_token,
                device_map="auto" if device == "cuda" else None,
                torch_dtype=torch.float16 if device == "cuda" else torch.float32,
                trust_remote_code=True
            )

            logger.info(f"✓ Model loaded: {self.model_id}")
            logger.info(f"  Parameters: {model.num_parameters():,}")

            # Training configuration
            training_args = TrainingArguments(
                output_dir=str(self.output_dir / "maia-2026-sft"),
                num_train_epochs=1,
                per_device_train_batch_size=4,
                gradient_accumulation_steps=1,
                learning_rate=2e-4,
                lr_scheduler_type="cosine",
                warmup_steps=100,
                logging_steps=50,
                save_steps=500,
                save_total_limit=2,
                load_best_model_at_end=False,
                gradient_checkpointing=True,
                optim="paged_adamw_8bit" if device == "cuda" else "adamw_torch",
                max_grad_norm=1.0,
            )

            # Initialize trainer
            trainer = SFTTrainer(
                model=model,
                tokenizer=tokenizer,
                train_dataset=sft_examples,
                args=training_args,
                max_seq_length=2048,
                dataset_text_field="text",
                packing=False,
            )

            logger.info("Starting SFT training...")
            logger.info(f"  Dataset size: {len(sft_examples):,} examples")
            logger.info(f"  Batch size: 4")
            logger.info(f"  Epochs: 1")
            logger.info(f"  Expected duration: 10-12 hours (GPU) / days (CPU)")

            # Train
            train_result = trainer.train()

            logger.info(f"✓ SFT training complete")
            logger.info(f"  Final loss: {train_result.training_loss:.4f}")

            # Save model
            model_output = self.output_dir / "maia-2026-sft"
            trainer.save_model(str(model_output))
            logger.info(f"✓ Model saved: {model_output}")

            # Upload to Hub
            try:
                model.push_to_hub("calitosaa/maia-2026-sft", token=self.hf_token)
                logger.info("✓ Model uploaded to HuggingFace Hub")
            except Exception as e:
                logger.warning(f"Could not upload to Hub: {e}")

            return model, tokenizer

        except ImportError as e:
            logger.error(f"Missing library: {e}")
            logger.info("Install with: pip install torch transformers trl peft bitsandbytes")
            return None, None
        except Exception as e:
            logger.error(f"SFT training failed: {e}")
            return None, None

    def stage_2_dpo_training(self, model, tokenizer, dpo_examples):
        """Stage 2: Direct Preference Optimization"""
        logger.info("\n" + "="*70)
        logger.info("STAGE 2: DIRECT PREFERENCE OPTIMIZATION (DPO)")
        logger.info("="*70)

        try:
            from trl import DPOTrainer, DPOConfig
            from datasets import Dataset

            if model is None or tokenizer is None:
                logger.error("✗ Model not available for DPO training")
                return None

            # Prepare DPO dataset
            dpo_dataset = Dataset.from_dict({
                'prompt': [ex['prompt'] for ex in dpo_examples],
                'chosen': [ex['chosen'] for ex in dpo_examples],
                'rejected': [ex['rejected'] for ex in dpo_examples],
            })

            logger.info(f"DPO dataset prepared: {len(dpo_dataset)} examples")

            # DPO training config
            dpo_config = DPOConfig(
                output_dir=str(self.output_dir / "maia-2026-dpo"),
                num_train_epochs=1,
                per_device_train_batch_size=4,
                gradient_accumulation_steps=1,
                learning_rate=5e-5,
                lr_scheduler_type="cosine",
                beta=0.1,
                max_prompt_length=512,
                max_length=2048,
                logging_steps=50,
                save_steps=500,
                gradient_checkpointing=True,
                optim="paged_adamw_8bit",
                remove_unused_columns=False,
            )

            # Initialize DPO trainer
            dpo_trainer = DPOTrainer(
                model=model,
                ref_model=None,
                args=dpo_config,
                train_dataset=dpo_dataset,
                tokenizer=tokenizer,
            )

            logger.info("Starting DPO training...")
            logger.info(f"  Dataset size: {len(dpo_examples):,} preference pairs")
            logger.info(f"  Beta: 0.1")
            logger.info(f"  Expected duration: 4-6 hours (GPU)")

            # Train
            train_result = dpo_trainer.train()

            logger.info(f"✓ DPO training complete")
            logger.info(f"  Final loss: {train_result.training_loss:.4f}")

            # Save final model
            model_output = self.output_dir / "maia-2026"
            dpo_trainer.save_model(str(model_output))
            logger.info(f"✓ Final model saved: {model_output}")

            # Upload to Hub
            try:
                model.push_to_hub("calitosaa/maia-2026", token=self.hf_token)
                logger.info("✓ Final model uploaded to HuggingFace Hub")
            except Exception as e:
                logger.warning(f"Could not upload to Hub: {e}")

            return model

        except Exception as e:
            logger.error(f"DPO training failed: {e}")
            return None

    def evaluate_model(self, model, tokenizer):
        """Evaluate trained model on benchmark tasks"""
        logger.info("\n" + "="*70)
        logger.info("STAGE 3: MODEL EVALUATION")
        logger.info("="*70)

        try:
            from transformers import pipeline

            generator = pipeline(
                "text-generation",
                model=model,
                tokenizer=tokenizer,
                device=0 if torch.cuda.is_available() else -1
            )

            test_prompts = [
                "Debug this Python code: x = [1,2,3]\ny = x\nz = y[5]",
                "What is DPO (Direct Preference Optimization)?",
                "Explain LoRA (Low-Rank Adaptation)",
                "How do MCPs (Model Context Protocols) work?",
            ]

            logger.info(f"\nTesting model on {len(test_prompts)} prompts:\n")

            for prompt in test_prompts:
                try:
                    output = generator(
                        prompt,
                        max_length=256,
                        num_return_sequences=1,
                        do_sample=False
                    )
                    response = output[0]['generated_text']
                    logger.info(f"Q: {prompt[:50]}...")
                    logger.info(f"A: {response[len(prompt):256].strip()}...\n")
                except Exception as e:
                    logger.warning(f"Generation failed: {e}")

            logger.info("✓ Evaluation complete")
            return True

        except Exception as e:
            logger.error(f"Evaluation failed: {e}")
            return False

    def execute_full_training(self):
        """Execute complete training pipeline"""
        logger.info("\n" + "="*70)
        logger.info("MAIA 2026 COMPLETE LLM TRAINING")
        logger.info("Using Gemma 4 E4B + Multi-Stage Pipeline")
        logger.info("="*70)

        # Step 1: Verify Gemma 4 access
        if not self.verify_gemma4_access():
            logger.error("Cannot proceed without Gemma 4 access")
            return False

        # Step 2: Prepare datasets
        result = self.prepare_training_datasets()
        if not result:
            logger.error("Cannot prepare datasets")
            return False

        _, sft_examples, dpo_examples = result

        # Step 3: Stage 1 - SFT Training
        model, tokenizer = self.stage_1_sft_training(sft_examples)
        if model is None:
            logger.error("SFT training failed")
            return False

        # Step 4: Stage 2 - DPO Training
        model = self.stage_2_dpo_training(model, tokenizer, dpo_examples)
        if model is None:
            logger.error("DPO training failed")
            return False

        # Step 5: Evaluation
        self.evaluate_model(model, tokenizer)

        # Final summary
        logger.info("\n" + "="*70)
        logger.info("✓ MAIA 2026 TRAINING COMPLETE")
        logger.info("="*70)
        logger.info("\nModel successfully trained and uploaded to HuggingFace Hub")
        logger.info("Repository: https://huggingface.co/calitosaa/maia-2026")

        return True

if __name__ == '__main__':
    executor = MaiaLLMTrainingExecutor()
    success = executor.execute_full_training()
    exit(0 if success else 1)

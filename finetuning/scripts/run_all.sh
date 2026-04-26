#!/bin/bash
set -e
cd /home/user/Maia/finetuning/scripts
echo "=== Processing agents ==="
python3 process_agents.py
echo "=== Processing training prompts ==="
python3 process_training_prompts.py
echo "=== Processing workflows ==="
python3 process_workflows.py
echo "=== Processing logic ==="
python3 process_logic.py
echo "=== Processing reasoning patterns ==="
python3 process_reasoning.py
echo "=== Processing skills ==="
python3 process_skills.py
echo "=== Building final dataset ==="
python3 build_final_dataset.py
echo "=== DONE ==="

#!/bin/bash
# push_batches.sh — Commits and pushes staged files in batches to avoid HTTP 413.
set -e

BATCH_SIZE=500
BRANCH="claude/gemma4-finetuning-dataset-uP2Xx"

# Get all staged files (new files only)
git diff --cached --name-only --diff-filter=A > /tmp/staged_files.txt
TOTAL=$(wc -l < /tmp/staged_files.txt)
echo "[+] Total staged files: $TOTAL"
echo "[+] Batch size: $BATCH_SIZE"

# Unstage everything first
git restore --staged . 2>/dev/null || git reset HEAD . 2>/dev/null
echo "[+] Unstaged all files."

BATCH=1
OFFSET=0

while [ $OFFSET -lt $TOTAL ]; do
    END=$((OFFSET + BATCH_SIZE))
    echo ""
    echo "=== Batch $BATCH (files $((OFFSET+1)) - $END of $TOTAL) ==="

    # Get files for this batch
    BATCH_FILES=$(sed -n "$((OFFSET+1)),${END}p" /tmp/staged_files.txt)

    # Stage batch files
    echo "$BATCH_FILES" | xargs -d '\n' git add --

    STAGED_COUNT=$(git diff --cached --name-only | wc -l)
    echo "    Staged: $STAGED_COUNT files"

    # Commit
    git commit -m "Dataset batch $BATCH/$((( TOTAL + BATCH_SIZE - 1 ) / BATCH_SIZE)) — files $((OFFSET+1))-${END}

Gemma 4 Luxus-OS fine-tuning dataset incremental push.

https://claude.ai/code/session_01W4XfZACuZqPTGJbqQ4PRhE"

    # Push with retry
    for ATTEMPT in 1 2 3 4; do
        if git push origin "$BRANCH" 2>&1; then
            echo "    Push OK (attempt $ATTEMPT)"
            break
        else
            WAIT=$((ATTEMPT * 2))
            echo "    Push failed, retrying in ${WAIT}s..."
            sleep $WAIT
        fi
    done

    OFFSET=$END
    BATCH=$((BATCH + 1))
done

echo ""
echo "=== ALL BATCHES DONE ==="
git log --oneline | head -10

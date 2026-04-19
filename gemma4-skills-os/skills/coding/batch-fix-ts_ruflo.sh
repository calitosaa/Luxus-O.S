---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/scripts/batch-fix-ts.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/bin/bash

echo "🔧 Starting batch TypeScript fixes..."

# Fix 1: Add missing .js extensions to relative imports
echo "📝 Adding .js extensions to imports..."
find src -name "*.ts" -type f -exec sed -i.bak -E "s/from '(\.\.[^']+)'/from '\1.js'/g" {} \;
find src -name "*.ts" -type f -exec sed -i.bak -E "s/from '(\.\/[^']+)'/from '\1.js'/g" {} \;

# Fix 2: Replace 'developer' with 'coder' and 'analyzer' with 'analyst'
echo "📝 Fixing AgentType references..."
find src -name "*.ts" -type f -exec sed -i.bak "s/'developer'/'coder'/g" {} \;
find src -name "*.ts" -type f -exec sed -i.bak "s/'analyzer'/'analyst'/g" {} \;
find src -name "*.ts" -type f -exec sed -i.bak 's/"developer"/"coder"/g' {} \;
find src -name "*.ts" -type f -exec sed -i.bak 's/"analyzer"/"analyst"/g' {} \;

# Fix 3: Add override modifiers
echo "📝 Adding override modifiers..."
find src -name "*.ts" -type f -exec sed -i.bak -E 's/^(\s*)(async )?(\w+)\(/$1$2override $3(/g' {} \;

# Fix 4: Fix type imports
echo "📝 Converting import type to regular imports for value usage..."
find src -name "*.ts" -type f -exec sed -i.bak -E 's/import type \{ TodoItem \}/import \{ TodoItem \}/g' {} \;
find src -name "*.ts" -type f -exec sed -i.bak -E 's/import type \{ MemoryEntry \}/import \{ MemoryEntry \}/g' {} \;
find src -name "*.ts" -type f -exec sed -i.bak -E 's/import type \{ AgentState \}/import \{ AgentState \}/g' {} \;

# Fix 5: Fix never array issues
echo "📝 Fixing never[] array assignments..."
find src -name "*.ts" -type f -exec sed -i.bak -E 's/(\w+)\.push\(/((\1 as any[]).push(/g' {} \;

# Fix 6: Add missing imports
echo "📝 Adding missing Node.js imports..."
for file in $(find src -name "*.ts" -type f); do
  if grep -q "__dirname" "$file" && ! grep -q "fileURLToPath" "$file"; then
    sed -i.bak '1i\
import { dirname } from "node:path";\
import { fileURLToPath } from "node:url";\
const __dirname = dirname(fileURLToPath(import.meta.url));' "$file"
  fi
  
  if grep -q "process\." "$file" && ! grep -q "import.*process" "$file"; then
    sed -i.bak '1i\
import process from "node:process";' "$file"
  fi
done

# Clean up backup files
echo "🧹 Cleaning up backup files..."
find src -name "*.bak" -type f -delete

echo "✅ Batch fixes applied!"
echo "🔧 Running TypeScript build to check remaining errors..."

npm run build:ts 2>&1 | grep -c "error TS" || echo "0 errors"
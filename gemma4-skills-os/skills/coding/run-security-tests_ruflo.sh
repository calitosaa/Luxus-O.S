---
source_repo: https://github.com/ruvnet/ruflo
source_file: tests/docker-regression/scripts/run-security-tests.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/bin/bash
# Claude-Flow Security Test Runner
# Standalone security test execution

set -e

echo "=== SECURITY TEST RUNNER ==="
echo ""

REPORT_DIR="${TEST_REPORT_PATH:-/app/reports}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
SECURITY_FILE="${REPORT_DIR}/security_${TIMESTAMP}.json"

# Initialize security report
cat > "$SECURITY_FILE" << EOF
{
  "type": "security",
  "timestamp": "$(date -Iseconds)",
  "results": []
}
EOF

echo "Running security tests..."
echo ""

# Run npm audit
echo "── npm audit ──"
npm audit --audit-level=high 2>/dev/null || echo "npm audit completed"

echo ""

# Run security tests
bash /app/tests/docker-regression/scripts/test-security.sh

echo ""
echo "Security report: $SECURITY_FILE"

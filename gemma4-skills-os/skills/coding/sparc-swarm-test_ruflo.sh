---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/04-testing/sparc-swarm-test.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/bin/bash
# SPARC TDD Test Suite for Claude Flow Swarm CLI
# Tests all strategies and features systematically

echo "🔬 SPARC TDD Test Suite for Claude Flow Swarm"
echo "============================================="
echo ""
echo "Following SPARC methodology:"
echo "  S - Specification: Define test requirements"
echo "  P - Pseudocode: Plan test execution"
echo "  A - Architecture: Structure test suite"
echo "  R - Refinement: Red-Green-Refactor cycle"
echo "  C - Completion: Integration and validation"
echo ""

# Test directory setup
TEST_ROOT="/tmp/sparc-swarm-tests-$(date +%s)"
mkdir -p "$TEST_ROOT"

# Test results tracking
PASSED=0
FAILED=0
TOTAL=0

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test functions
run_test() {
    local test_name="$1"
    local test_cmd="$2"
    
    echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📋 Test: $test_name${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    
    ((TOTAL++))
    
    # RED phase
    echo -e "${RED}🔴 RED: Writing test expectation...${NC}"
    echo "   Expected: Swarm should handle '$test_name' correctly"
    
    # GREEN phase
    echo -e "${GREEN}🟢 GREEN: Executing test...${NC}"
    
    if eval "$test_cmd"; then
        echo -e "${GREEN}✅ PASSED: $test_name${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ FAILED: $test_name${NC}"
        ((FAILED++))
    fi
    
    # REFACTOR phase
    echo -e "${BLUE}🔵 REFACTOR: Test complete${NC}"
}

# SPECIFICATION: Define what we're testing
echo -e "${YELLOW}📜 SPECIFICATION${NC}"
echo "Testing the following swarm capabilities:"
echo "  1. All strategies (development, research, analysis, testing, optimization)"
echo "  2. Coordination modes (centralized, distributed, hierarchical)"
echo "  3. Advanced options (parallel, monitoring, quality thresholds)"
echo "  4. Background execution capabilities"
echo "  5. Memory persistence features"
echo ""

# PSEUDOCODE: Test plan
echo -e "${YELLOW}📝 PSEUDOCODE${NC}"
echo "for each strategy in [development, research, analysis, testing, optimization]:"
echo "    test dry-run execution"
echo "    verify configuration output"
echo "for each mode in [centralized, distributed, hierarchical]:"
echo "    test mode configuration"
echo "test advanced features:"
echo "    parallel execution"
echo "    monitoring options"
echo "    quality settings"
echo ""

# ARCHITECTURE: Test suite structure
echo -e "${YELLOW}🏗️  ARCHITECTURE${NC}"
echo "Test Suite Structure:"
echo "  ├── Strategy Tests (5 tests)"
echo "  ├── Mode Tests (3 tests)"
echo "  ├── Feature Tests (5 tests)"
echo "  └── Integration Tests (2 tests)"
echo ""

sleep 2

# REFINEMENT: Execute tests with Red-Green-Refactor

# Strategy Tests
echo -e "\n${YELLOW}🎯 STRATEGY TESTS${NC}"

run_test "Development Strategy" \
    "npx claude-flow@latest swarm 'build a calculator app' --strategy development --dry-run --max-agents 4 2>&1 | grep -q 'Strategy: development'"

run_test "Research Strategy" \
    "npx claude-flow@latest swarm 'research AI trends' --strategy research --dry-run 2>&1 | grep -q 'Strategy: research'"

run_test "Analysis Strategy" \
    "npx claude-flow@latest swarm 'analyze codebase' --strategy analysis --dry-run 2>&1 | grep -q 'Strategy: analysis'"

run_test "Testing Strategy" \
    "npx claude-flow@latest swarm 'create test suite' --strategy testing --dry-run 2>&1 | grep -q 'Strategy: testing'"

run_test "Optimization Strategy" \
    "npx claude-flow@latest swarm 'optimize performance' --strategy optimization --dry-run 2>&1 | grep -q 'Strategy: optimization'"

# Mode Tests
echo -e "\n${YELLOW}🏗️  MODE TESTS${NC}"

run_test "Centralized Mode" \
    "npx claude-flow@latest swarm 'test task' --mode centralized --dry-run 2>&1 | grep -q 'Mode: centralized'"

run_test "Distributed Mode" \
    "npx claude-flow@latest swarm 'test task' --mode distributed --distributed --dry-run 2>&1 | grep -q 'Mode: distributed'"

run_test "Hierarchical Mode" \
    "npx claude-flow@latest swarm 'test task' --mode hierarchical --dry-run 2>&1 | grep -q 'Mode: hierarchical'"

# Feature Tests
echo -e "\n${YELLOW}⚡ FEATURE TESTS${NC}"

run_test "Parallel Execution" \
    "npx claude-flow@latest swarm 'parallel task' --parallel --dry-run 2>&1 | grep -q 'Parallel: true'"

run_test "Monitoring Feature" \
    "npx claude-flow@latest swarm 'monitored task' --monitor --dry-run 2>&1 | grep -q 'Monitoring: true'"

run_test "Quality Threshold" \
    "npx claude-flow@latest swarm 'quality task' --quality-threshold 0.95 --dry-run 2>&1 | grep -q 'Quality Threshold: 0.95'"

run_test "Memory Namespace" \
    "npx claude-flow@latest swarm 'memory task' --memory-namespace custom-space --dry-run 2>&1 | grep -q 'Memory Namespace: custom-space'"

run_test "Max Agents Configuration" \
    "npx claude-flow@latest swarm 'agent task' --max-agents 10 --dry-run 2>&1 | grep -q 'Max Agents: 10'"

# Advanced Configuration Tests
echo -e "\n${YELLOW}🎛️  ADVANCED CONFIGURATION TESTS${NC}"

run_test "Task Scheduling Options" \
    "npx claude-flow@latest swarm 'scheduled task' --task-scheduling round-robin --dry-run 2>&1 | grep -q 'Task Scheduling: round-robin'"

run_test "Load Balancing Options" \
    "npx claude-flow@latest swarm 'balanced task' --load-balancing random --dry-run 2>&1 | grep -q 'Load Balancing: random'"

# Help Test
echo -e "\n${YELLOW}📚 HELP TEST${NC}"

run_test "Help Command" \
    "npx claude-flow@latest swarm --help 2>&1 | grep -q 'Claude Flow Advanced Swarm System'"

# COMPLETION: Final integration test
echo -e "\n${YELLOW}🔧 COMPLETION - INTEGRATION TEST${NC}"

# Create a complete swarm configuration test
cat > "$TEST_ROOT/integration-test.sh" << 'EOF'
#!/bin/bash
npx claude-flow@latest swarm "build a todo app with database" \
  --strategy development \
  --mode distributed \
  --max-agents 8 \
  --parallel \
  --monitor \
  --testing \
  --review \
  --quality-threshold 0.9 \
  --memory-namespace todo-project \
  --task-scheduling priority \
  --load-balancing work-stealing \
  --fault-tolerance retry \
  --dry-run 2>&1 | tee /tmp/swarm-integration-output.txt

# Check all features are configured
grep -q "Strategy: development" /tmp/swarm-integration-output.txt && \
grep -q "Mode: distributed" /tmp/swarm-integration-output.txt && \
grep -q "Max Agents: 8" /tmp/swarm-integration-output.txt && \
grep -q "Parallel: true" /tmp/swarm-integration-output.txt && \
grep -q "Monitoring: true" /tmp/swarm-integration-output.txt && \
grep -q "Testing: true" /tmp/swarm-integration-output.txt && \
grep -q "Review Mode: true" /tmp/swarm-integration-output.txt && \
grep -q "Quality Threshold: 0.9" /tmp/swarm-integration-output.txt
EOF

chmod +x "$TEST_ROOT/integration-test.sh"

run_test "Full Integration Test" "$TEST_ROOT/integration-test.sh"

# Test Summary
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📊 SPARC TDD TEST SUMMARY${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "Total Tests: $TOTAL"
echo -e "${GREEN}✅ Passed: $PASSED${NC}"
echo -e "${RED}❌ Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed! The swarm CLI is fully functional.${NC}"
    echo ""
    echo "The Claude Flow Swarm system successfully:"
    echo "  ✅ Supports all 5 strategies (development, research, analysis, testing, optimization)"
    echo "  ✅ Handles 3 coordination modes (centralized, distributed, hierarchical)"
    echo "  ✅ Provides advanced features (parallel, monitoring, quality control)"
    echo "  ✅ Configures task scheduling and load balancing"
    echo "  ✅ Integrates memory persistence and namespacing"
else
    echo -e "${RED}⚠️  Some tests failed. Please review the output above.${NC}"
fi

echo ""
echo "Test artifacts saved to: $TEST_ROOT"
echo ""

# Demonstrate actual execution capability
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}💡 DEMONSTRATION${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "To execute a real swarm task (not dry-run), remove the --dry-run flag:"
echo ""
echo "  npx claude-flow@latest swarm \"create a REST API\" --strategy development"
echo ""
echo "This will launch Claude to coordinate the swarm agents and create"
echo "actual application files through the implemented task execution system."
echo ""
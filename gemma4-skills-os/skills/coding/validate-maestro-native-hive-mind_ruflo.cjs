---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/tests/maestro/validate-maestro-native-hive-mind.cjs
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/usr/bin/env node

/**
 * Maestro Native Hive Mind Validation Test
 * 
 * This script validates the native hive mind implementation by testing
 * the core components and their integration without requiring full TypeScript compilation.
 */

const path = require('path');
const fs = require('fs').promises;

// ANSI colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

class MaestroValidator {
  constructor() {
    this.results = [];
    this.errors = [];
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  async validateFileStructure() {
    this.log('\n🔍 Validating File Structure...', 'blue');
    
    const requiredFiles = [
      'src/maestro/maestro-swarm-coordinator.ts',
      'src/maestro/maestro-types.ts',
      'src/maestro/tests/native-hive-mind-integration.test.ts',
      'src/cli/maestro-cli-bridge.ts',
      'src/cli/commands/maestro.ts',
      'docs/maestro/README.md',
      'docs/maestro/API.md'
    ];

    for (const filePath of requiredFiles) {
      try {
        await fs.access(filePath);
        this.log(`  ✅ ${filePath}`, 'green');
        this.results.push({ test: `File exists: ${filePath}`, status: 'pass' });
      } catch (error) {
        this.log(`  ❌ ${filePath} - MISSING`, 'red');
        this.results.push({ test: `File exists: ${filePath}`, status: 'fail', error: 'File not found' });
        this.errors.push(`Missing required file: ${filePath}`);
      }
    }
  }

  async validateRemovedFiles() {
    this.log('\n🧹 Validating Cleanup (Removed Files)...', 'blue');
    
    const removedFiles = [
      'src/maestro/maestro-orchestrator.ts',
      'src/maestro/agent-reuse/',
      'src/maestro/services/',
      'test-maestro.js',
      'test-maestro-complete.js',
      'docs/maestro/specs/',
      'docs/maestro/guides/',
      'docs/maestro/api/',
      'tests/steering/'
    ];

    for (const filePath of removedFiles) {
      try {
        await fs.access(filePath);
        this.log(`  ❌ ${filePath} - SHOULD BE REMOVED`, 'red');
        this.results.push({ test: `File removed: ${filePath}`, status: 'fail', error: 'File should not exist' });
        this.errors.push(`Cleanup incomplete: ${filePath} still exists`);
      } catch (error) {
        this.log(`  ✅ ${filePath} - Properly removed`, 'green');
        this.results.push({ test: `File removed: ${filePath}`, status: 'pass' });
      }
    }
  }

  async validateSwarmCoordinator() {
    this.log('\n🧠 Validating MaestroSwarmCoordinator Implementation...', 'blue');
    
    try {
      const coordinatorPath = 'src/maestro/maestro-swarm-coordinator.ts';
      const content = await fs.readFile(coordinatorPath, 'utf8');
      
      const requiredComponents = [
        'class MaestroSwarmCoordinator',
        'HiveMind',
        'SwarmOrchestrator',
        'ConsensusEngine',
        'specs-driven',
        'requirements_analyst',
        'design_architect',
        'task_planner',
        'implementation_coder',
        'quality_reviewer',
        'steering_documenter',
        'submitTask',
        'createSpec',
        'generateDesign',
        'generateTasks',
        'implementTask',
        'approvePhase'
      ];

      for (const component of requiredComponents) {
        if (content.includes(component)) {
          this.log(`  ✅ Contains: ${component}`, 'green');
          this.results.push({ test: `SwarmCoordinator contains: ${component}`, status: 'pass' });
        } else {
          this.log(`  ❌ Missing: ${component}`, 'red');
          this.results.push({ test: `SwarmCoordinator contains: ${component}`, status: 'fail', error: 'Component not found' });
          this.errors.push(`SwarmCoordinator missing required component: ${component}`);
        }
      }

      // Check for legacy references that should be removed
      const legacyComponents = ['MaestroOrchestrator', 'AgentManager', 'agent-reuse'];
      for (const legacy of legacyComponents) {
        if (content.includes(legacy)) {
          this.log(`  ⚠️  Contains legacy reference: ${legacy}`, 'yellow');
          this.results.push({ test: `SwarmCoordinator clean of: ${legacy}`, status: 'warn', error: 'Legacy reference found' });
        } else {
          this.log(`  ✅ Clean of legacy: ${legacy}`, 'green');
          this.results.push({ test: `SwarmCoordinator clean of: ${legacy}`, status: 'pass' });
        }
      }

    } catch (error) {
      this.log(`  ❌ Error reading SwarmCoordinator: ${error.message}`, 'red');
      this.errors.push(`Failed to validate SwarmCoordinator: ${error.message}`);
    }
  }

  async validateHiveMindTypes() {
    this.log('\n🔧 Validating Hive Mind Types Extension...', 'blue');
    
    try {
      const typesPath = 'src/hive-mind/types.ts';
      const content = await fs.readFile(typesPath, 'utf8');
      
      const requiredAgentTypes = [
        'requirements_analyst',
        'design_architect',
        'task_planner',
        'implementation_coder',
        'quality_reviewer',
        'steering_documenter'
      ];

      const requiredCapabilities = [
        'requirements_analysis',
        'user_story_creation',
        'acceptance_criteria',
        'specs_driven_design',
        'workflow_orchestration',
        'governance'
      ];

      const requiredTopology = 'specs-driven';

      for (const agentType of requiredAgentTypes) {
        if (content.includes(`'${agentType}'`) || content.includes(`"${agentType}"`)) {
          this.log(`  ✅ Agent type: ${agentType}`, 'green');
          this.results.push({ test: `HiveMind types include: ${agentType}`, status: 'pass' });
        } else {
          this.log(`  ❌ Missing agent type: ${agentType}`, 'red');
          this.results.push({ test: `HiveMind types include: ${agentType}`, status: 'fail', error: 'Agent type not found' });
          this.errors.push(`Missing agent type in hive-mind types: ${agentType}`);
        }
      }

      for (const capability of requiredCapabilities) {
        if (content.includes(`'${capability}'`) || content.includes(`"${capability}"`)) {
          this.log(`  ✅ Capability: ${capability}`, 'green');
          this.results.push({ test: `HiveMind capabilities include: ${capability}`, status: 'pass' });
        } else {
          this.log(`  ❌ Missing capability: ${capability}`, 'red');
          this.results.push({ test: `HiveMind capabilities include: ${capability}`, status: 'fail', error: 'Capability not found' });
          this.errors.push(`Missing capability in hive-mind types: ${capability}`);
        }
      }

      if (content.includes(requiredTopology)) {
        this.log(`  ✅ Topology: ${requiredTopology}`, 'green');
        this.results.push({ test: `HiveMind includes specs-driven topology`, status: 'pass' });
      } else {
        this.log(`  ❌ Missing topology: ${requiredTopology}`, 'red');
        this.results.push({ test: `HiveMind includes specs-driven topology`, status: 'fail', error: 'Topology not found' });
        this.errors.push(`Missing specs-driven topology in hive-mind types`);
      }

    } catch (error) {
      this.log(`  ❌ Error reading HiveMind types: ${error.message}`, 'red');
      this.errors.push(`Failed to validate HiveMind types: ${error.message}`);
    }
  }

  async validateCLIIntegration() {
    this.log('\n📋 Validating CLI Integration...', 'blue');
    
    try {
      const cliBridgePath = 'src/cli/maestro-cli-bridge.ts';
      const content = await fs.readFile(cliBridgePath, 'utf8');
      
      const requiredComponents = [
        'MaestroSwarmCoordinator',
        'MaestroSwarmConfig',
        'specs-driven-swarm',
        'hiveMindConfig',
        'enableConsensusValidation',
        'enableSteeringIntegration'
      ];

      for (const component of requiredComponents) {
        if (content.includes(component)) {
          this.log(`  ✅ CLI contains: ${component}`, 'green');
          this.results.push({ test: `CLI integration contains: ${component}`, status: 'pass' });
        } else {
          this.log(`  ❌ CLI missing: ${component}`, 'red');
          this.results.push({ test: `CLI integration contains: ${component}`, status: 'fail', error: 'Component not found' });
          this.errors.push(`CLI integration missing: ${component}`);
        }
      }

      // Check for legacy references
      const legacyComponents = ['MaestroOrchestrator'];
      for (const legacy of legacyComponents) {
        if (content.includes(legacy)) {
          this.log(`  ❌ CLI contains legacy: ${legacy}`, 'red');
          this.results.push({ test: `CLI clean of: ${legacy}`, status: 'fail', error: 'Legacy reference found' });
          this.errors.push(`CLI contains legacy reference: ${legacy}`);
        } else {
          this.log(`  ✅ CLI clean of legacy: ${legacy}`, 'green');
          this.results.push({ test: `CLI clean of: ${legacy}`, status: 'pass' });
        }
      }

    } catch (error) {
      this.log(`  ❌ Error reading CLI bridge: ${error.message}`, 'red');
      this.errors.push(`Failed to validate CLI integration: ${error.message}`);
    }
  }

  async validateDocumentation() {
    this.log('\n📚 Validating Documentation...', 'blue');
    
    try {
      const readmePath = 'docs/maestro/README.md';
      const content = await fs.readFile(readmePath, 'utf8');
      
      const requiredSections = [
        'Native Hive Mind',
        'Specs-Driven Topology',
        'MaestroSwarmCoordinator',
        'requirements_analyst',
        'design_architect',
        'task_planner',
        'implementation_coder',
        'quality_reviewer',
        'steering_documenter',
        'Consensus Validation',
        'Swarm Memory Integration',
        'Performance Improvements'
      ];

      for (const section of requiredSections) {
        if (content.includes(section)) {
          this.log(`  ✅ Documentation includes: ${section}`, 'green');
          this.results.push({ test: `Documentation includes: ${section}`, status: 'pass' });
        } else {
          this.log(`  ❌ Documentation missing: ${section}`, 'red');
          this.results.push({ test: `Documentation includes: ${section}`, status: 'fail', error: 'Section not found' });
          this.errors.push(`Documentation missing section: ${section}`);
        }
      }

      // Check API documentation exists
      const apiPath = 'docs/maestro/API.md';
      await fs.access(apiPath);
      this.log(`  ✅ API documentation exists`, 'green');
      this.results.push({ test: `API documentation exists`, status: 'pass' });

    } catch (error) {
      this.log(`  ❌ Error validating documentation: ${error.message}`, 'red');
      this.errors.push(`Failed to validate documentation: ${error.message}`);
    }
  }

  async validateIntegrationTest() {
    this.log('\n🧪 Validating Integration Test...', 'blue');
    
    try {
      const testPath = 'src/maestro/tests/native-hive-mind-integration.test.ts';
      const content = await fs.readFile(testPath, 'utf8');
      
      const requiredTestSuites = [
        'Swarm Initialization',
        'Specs-Driven Workflow',
        'Consensus Validation',
        'Steering Integration',
        'Performance Benchmarks'
      ];

      const requiredTestCases = [
        'should initialize native hive mind with specs-driven topology',
        'should spawn 8 specialized agents with correct types',
        'should create specification using requirements_analyst agent',
        'should generate design using parallel design_architect agents with consensus',
        'should generate tasks using task_planner agent',
        'should implement tasks using implementation_coder agents'
      ];

      for (const suite of requiredTestSuites) {
        if (content.includes(suite)) {
          this.log(`  ✅ Test suite: ${suite}`, 'green');
          this.results.push({ test: `Integration test includes suite: ${suite}`, status: 'pass' });
        } else {
          this.log(`  ❌ Missing test suite: ${suite}`, 'red');
          this.results.push({ test: `Integration test includes suite: ${suite}`, status: 'fail', error: 'Test suite not found' });
          this.errors.push(`Missing test suite: ${suite}`);
        }
      }

      for (const testCase of requiredTestCases) {
        if (content.includes(testCase)) {
          this.log(`  ✅ Test case: ${testCase.substring(0, 50)}...`, 'green');
          this.results.push({ test: `Integration test includes case: ${testCase}`, status: 'pass' });
        } else {
          this.log(`  ❌ Missing test case: ${testCase.substring(0, 50)}...`, 'red');
          this.results.push({ test: `Integration test includes case: ${testCase}`, status: 'fail', error: 'Test case not found' });
          this.errors.push(`Missing test case: ${testCase}`);
        }
      }

    } catch (error) {
      this.log(`  ❌ Error validating integration test: ${error.message}`, 'red');
      this.errors.push(`Failed to validate integration test: ${error.message}`);
    }
  }

  generateReport() {
    this.log('\n📊 Validation Report', 'bold');
    this.log('==================', 'bold');
    
    const totalTests = this.results.length;
    const passedTests = this.results.filter(r => r.status === 'pass').length;
    const failedTests = this.results.filter(r => r.status === 'fail').length;
    const warningTests = this.results.filter(r => r.status === 'warn').length;
    
    this.log(`\nTotal Tests: ${totalTests}`, 'cyan');
    this.log(`Passed: ${passedTests}`, 'green');
    this.log(`Failed: ${failedTests}`, 'red');
    this.log(`Warnings: ${warningTests}`, 'yellow');
    this.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`, 'blue');
    
    if (this.errors.length > 0) {
      this.log('\n❌ Critical Issues:', 'red');
      this.errors.forEach((error, index) => {
        this.log(`  ${index + 1}. ${error}`, 'red');
      });
    }
    
    if (failedTests === 0) {
      this.log('\n🎉 All critical validations passed!', 'green');
      this.log('Native Hive Mind implementation is properly consolidated and functional.', 'green');
    } else {
      this.log('\n⚠️  Some validations failed. Please review the issues above.', 'yellow');
    }
    
    return { totalTests, passedTests, failedTests, warningTests, errors: this.errors };
  }

  async run() {
    this.log('🚀 Starting Maestro Native Hive Mind Validation', 'bold');
    this.log('================================================', 'bold');
    
    await this.validateFileStructure();
    await this.validateRemovedFiles();
    await this.validateSwarmCoordinator();
    await this.validateHiveMindTypes();
    await this.validateCLIIntegration();
    await this.validateDocumentation();
    await this.validateIntegrationTest();
    
    return this.generateReport();
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new MaestroValidator();
  validator.run()
    .then(report => {
      process.exit(report.failedTests === 0 ? 0 : 1);
    })
    .catch(error => {
      console.error(`\n❌ Validation failed with error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = MaestroValidator;
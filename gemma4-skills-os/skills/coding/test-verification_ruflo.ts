---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/src/verification/test-verification.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Simple test to verify the verification system works
 */

import { verificationHookManager } from './hooks.js';

export async function testVerificationSystem(): Promise<void> {
  console.log('🧪 Testing Verification System...');
  
  try {
    // Test status
    const metrics = verificationHookManager.getMetrics();
    console.log('✅ Metrics retrieved:', metrics);
    
    // Test adding a simple checker
    verificationHookManager.addPreTaskChecker({
      id: 'test-checker',
      name: 'Test Checker',
      description: 'A simple test checker',
      priority: 50,
      check: async (context) => ({
        passed: true,
        score: 1.0,
        message: 'Test check passed'
      })
    });
    
    console.log('✅ Test checker added successfully');
    
    // Test configuration
    verificationHookManager.updateConfig({
      preTask: { enabled: true, checkers: [], failureStrategy: 'warn' }
    });
    
    console.log('✅ Configuration updated successfully');
    
    console.log('🎉 Verification system test completed successfully!');
  } catch (error) {
    console.error('❌ Verification system test failed:', error);
    throw error;
  }
}

// Auto-run test if this file is executed directly
if (require.main === module) {
  testVerificationSystem().catch(console.error);
}
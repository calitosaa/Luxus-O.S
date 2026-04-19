---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/claude-api-error-handling.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/usr/bin/env tsx
/**
 * Example demonstrating enhanced Claude API error handling
 * Shows how to handle various error scenarios gracefully
 */

import { ClaudeAPIClient } from '../src/api/claude-client.js';
import { 
  ClaudeAPIError,
  ClaudeInternalServerError,
  ClaudeRateLimitError,
  ClaudeNetworkError,
  getUserFriendlyError,
} from '../src/api/claude-api-errors.js';
import { ConsoleLogger } from '../src/core/logger.js';
import { ConfigManager } from '../src/config/config-manager.js';

async function main() {
  const logger = new ConsoleLogger();
  const configManager = ConfigManager.getInstance();
  
  // Initialize the Claude client with enhanced error handling
  const client = new ClaudeAPIClient(logger, configManager, {
    enableHealthCheck: true,
    healthCheckInterval: 300000, // 5 minutes
    retryAttempts: 3,
    retryDelay: 1000,
    retryJitter: true,
  });

  console.log('🚀 Claude API Enhanced Error Handling Demo\n');

  // Example 1: Check API health
  console.log('1️⃣ Checking API health...');
  const health = await client.performHealthCheck();
  console.log(`Health status: ${health.healthy ? '✅ Healthy' : '❌ Unhealthy'}`);
  if (health.latency) {
    console.log(`Latency: ${health.latency}ms`);
  }
  console.log();

  // Example 2: Handle various error scenarios
  console.log('2️⃣ Demonstrating error handling...\n');

  try {
    // This will work if you have a valid API key
    const response = await client.sendMessage([
      { role: 'user', content: 'Hello! Can you briefly explain error handling?' }
    ]);
    
    console.log('✅ Success! Response:', response.content[0].text);
  } catch (error) {
    handleError(error);
  }

  // Example 3: Simulate different error scenarios
  console.log('\n3️⃣ Error scenarios and user-friendly messages:\n');

  // Simulate various errors
  const errorScenarios = [
    new ClaudeInternalServerError('Simulated server error'),
    new ClaudeRateLimitError('Simulated rate limit', 60),
    new ClaudeNetworkError('Simulated network error'),
  ];

  for (const error of errorScenarios) {
    console.log(`--- ${error.name} ---`);
    const errorInfo = getUserFriendlyError(error);
    console.log(`Title: ${errorInfo.title}`);
    console.log(`Message: ${errorInfo.message}`);
    console.log(`Retryable: ${errorInfo.retryable ? 'Yes' : 'No'}`);
    console.log('Suggestions:');
    errorInfo.suggestions.forEach((suggestion, i) => {
      console.log(`  ${i + 1}. ${suggestion}`);
    });
    console.log();
  }

  // Example 4: Listen to error events
  console.log('4️⃣ Setting up error event listeners...\n');

  client.on('error', ({ error, userFriendly }) => {
    console.log('🔔 Error event received:');
    console.log(`  Error: ${error.message}`);
    console.log(`  User-friendly title: ${userFriendly.title}`);
    console.log(`  Retryable: ${userFriendly.retryable}`);
  });

  client.on('health_check', (result) => {
    console.log('🔔 Health check event:', {
      healthy: result.healthy,
      latency: result.latency,
      timestamp: result.timestamp,
    });
  });

  // Example 5: Circuit breaker behavior
  console.log('\n5️⃣ Circuit breaker protection:\n');
  console.log('If multiple consecutive failures occur, the circuit breaker');
  console.log('will temporarily prevent new requests to protect the system.');
  console.log('This prevents cascading failures and gives the API time to recover.\n');

  // Clean up
  client.destroy();
  console.log('✨ Demo completed!');
}

function handleError(error: unknown) {
  if (error instanceof ClaudeAPIError) {
    const errorInfo = getUserFriendlyError(error);
    console.log(`\n❌ Error: ${errorInfo.title}`);
    console.log(`Message: ${errorInfo.message}`);
    console.log(`Status Code: ${error.statusCode || 'N/A'}`);
    console.log(`Retryable: ${error.retryable ? 'Yes' : 'No'}`);
    
    if (errorInfo.suggestions.length > 0) {
      console.log('\n💡 Suggestions:');
      errorInfo.suggestions.forEach((suggestion, i) => {
        console.log(`  ${i + 1}. ${suggestion}`);
      });
    }
  } else {
    console.error('Unexpected error:', error);
  }
}

// Run the demo
main().catch((error) => {
  console.error('Demo failed:', error);
  process.exit(1);
});
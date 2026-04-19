---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/05-swarm-apps/rest-api/start.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/bin/bash

# REST API Startup Script

echo "🚀 Starting REST API Example..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "📋 Creating .env file from template..."
    cp .env.example .env
fi

# Run tests
echo "🧪 Running tests..."
npm test

# Start the server
echo "🌐 Starting server..."
npm run dev
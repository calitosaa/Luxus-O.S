---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/05-swarm-apps/rest-api-advanced/healthcheck.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const http = require('http');

const options = {
  host: 'localhost',
  port: process.env.PORT || 3000,
  path: '/api/health',
  timeout: 2000,
};

const request = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.statusCode === 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});

request.on('error', (err) => {
  console.error(`ERROR: ${err.message}`);
  process.exit(1);
});

request.on('timeout', () => {
  console.error('ERROR: Request timeout');
  request.destroy();
  process.exit(1);
});

request.end();
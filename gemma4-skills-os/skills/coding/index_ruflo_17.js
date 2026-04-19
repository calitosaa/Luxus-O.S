---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/05-swarm-apps/rest-api/src/routes/index.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const productsRouter = require('./products');

// Mount route modules
router.use('/users', usersRouter);
router.use('/products', productsRouter);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'REST API Example',
    version: '1.0.0',
    endpoints: {
      users: '/api/v1/users',
      products: '/api/v1/products',
      health: '/health'
    }
  });
});

module.exports = router;
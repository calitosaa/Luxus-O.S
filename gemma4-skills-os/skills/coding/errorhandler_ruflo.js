---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/user-api/middleware/errorHandler.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.message === 'User not found') {
    return res.status(404).json({ error: err.message });
  }

  if (err.message === 'User with this email already exists') {
    return res.status(409).json({ error: err.message });
  }

  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = errorHandler;
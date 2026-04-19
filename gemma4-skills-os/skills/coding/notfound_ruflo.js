---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/05-swarm-apps/rest-api-advanced/src/middleware/notFound.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const ApiError = require('../utils/ApiError');

const notFound = (req, res, next) => {
  const error = new ApiError(`Not found - ${req.originalUrl}`, 404);
  next(error);
};

module.exports = { notFound };
---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/05-swarm-apps/rest-api/src/utils/responseHelpers.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// Standardized response helpers

const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

const sendError = (res, message, statusCode = 500, errors = null) => {
  const response = {
    success: false,
    error: {
      message,
      status: statusCode,
      timestamp: new Date().toISOString()
    }
  };

  if (errors && process.env.NODE_ENV === 'development') {
    response.error.details = errors;
  }

  res.status(statusCode).json(response);
};

const sendPaginatedResponse = (res, data, pagination) => {
  res.json({
    success: true,
    data,
    pagination: {
      page: parseInt(pagination.page),
      limit: parseInt(pagination.limit),
      total: pagination.total || data.length
    }
  });
};

module.exports = {
  sendSuccess,
  sendError,
  sendPaginatedResponse
};
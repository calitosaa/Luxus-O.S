---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/examples/todo-app-generated/backend/src/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { initializeDatabase, closeDatabase } from './db';
import todosRouter from './routes/todos';

const app: Express = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database on startup
try {
  initializeDatabase();
} catch (error) {
  console.error('Failed to initialize database:', error);
  process.exit(1);
}

// Routes
app.use('/api', todosRouter);

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  closeDatabase();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

export default app;

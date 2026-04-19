---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/examples/todo-app-generated/backend/src/types/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// Todo item types
export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Request body types
export interface CreateTodoRequest {
  title: string;
  description?: string;
}

export interface UpdateTodoRequest {
  title?: string;
  description?: string;
  completed?: boolean;
}

// Database types
export interface DatabaseConfig {
  path: string;
  readonly?: boolean;
}

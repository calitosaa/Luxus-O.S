---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/examples/todo-app-generated/frontend/src/App.tsx
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { EmptyState } from './components/EmptyState';
import { ConfirmDialog } from './components/ConfirmDialog';
import './App.css';

function App() {
  const { todos, loading, error, addTodo, toggleTodo, removeTodo } = useTodos();
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    todoId: number | null;
  }>({
    isOpen: false,
    todoId: null,
  });

  const handleDeleteClick = (todoId: number) => {
    setConfirmDialog({
      isOpen: true,
      todoId,
    });
  };

  const handleConfirmDelete = async () => {
    if (confirmDialog.todoId !== null) {
      await removeTodo(confirmDialog.todoId);
      setConfirmDialog({
        isOpen: false,
        todoId: null,
      });
    }
  };

  const handleCancelDelete = () => {
    setConfirmDialog({
      isOpen: false,
      todoId: null,
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>

      <main className="app-main">
        <TodoForm onAddTodo={addTodo} />

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : todos.length === 0 ? (
          <EmptyState />
        ) : (
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={handleDeleteClick}
          />
        )}
      </main>

      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        message="Are you sure you want to delete this todo?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
}

export default App;

---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/examples/todo-app-generated/frontend/src/components/TodoForm.tsx
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { useState, FormEvent } from 'react';

interface TodoFormProps {
  onAddTodo: (title: string) => Promise<void>;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    try {
      setIsSubmitting(true);
      await onAddTodo(trimmedTitle);
      setTitle('');
    } catch (err) {
      console.error('Failed to add todo:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        disabled={isSubmitting}
        className="todo-input"
      />
      <button type="submit" disabled={isSubmitting || !title.trim()} className="add-button">
        {isSubmitting ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
};

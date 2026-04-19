---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/examples/todo-app-generated/frontend/src/components/ConfirmDialog.tsx
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

interface ConfirmDialogProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog = ({ isOpen, message, onConfirm, onCancel }: ConfirmDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <p className="dialog-message">{message}</p>
        <div className="dialog-buttons">
          <button onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button onClick={onConfirm} className="confirm-button">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

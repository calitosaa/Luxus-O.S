---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/GroupedHistory/SortableConversationRow.tsx
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

import ConversationRow from './ConversationRow';
import type { ConversationRowProps } from './types';

const SortableConversationRow: React.FC<ConversationRowProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props.conversation.id,
    disabled: props.batchMode,
    data: {
      type: 'conversation',
      conversation: props.conversation,
    },
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : undefined,
    position: 'relative' as const,
    zIndex: isDragging ? 1 : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ConversationRow {...props} />
    </div>
  );
};

export default SortableConversationRow;

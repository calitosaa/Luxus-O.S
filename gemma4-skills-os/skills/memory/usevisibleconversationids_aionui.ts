---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/GroupedHistory/hooks/useVisibleConversationIds.ts
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

import { useMemo } from 'react';
import { useConversationHistoryContext } from '@/renderer/hooks/context/ConversationHistoryContext';
import { useLayoutContext } from '@/renderer/hooks/context/LayoutContext';
import { buildVisibleConversationIds } from '../utils/visibleConversationOrder';
import { useWorkspaceExpansionState } from './useWorkspaceExpansionState';

export const useVisibleConversationIds = (): string[] => {
  const layout = useLayoutContext();
  const siderCollapsed = layout?.siderCollapsed ?? false;
  const { groupedHistory } = useConversationHistoryContext();
  const expandedWorkspaces = useWorkspaceExpansionState();

  return useMemo(() => {
    return buildVisibleConversationIds({
      ...groupedHistory,
      expandedWorkspaces,
      siderCollapsed,
    });
  }, [groupedHistory, expandedWorkspaces, siderCollapsed]);
};

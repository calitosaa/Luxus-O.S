---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/ui/viewer/hooks/useStats.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import { useState, useEffect, useCallback } from 'react';
import { Stats } from '../types';
import { API_ENDPOINTS } from '../constants/api';

export function useStats() {
  const [stats, setStats] = useState<Stats>({});

  const loadStats = useCallback(async () => {
    try {
      const response = await fetch(API_ENDPOINTS.STATS);
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to load stats:', error);
    }
  }, []);

  useEffect(() => {
    // Load once on mount
    loadStats();
  }, [loadStats]);

  return { stats, refreshStats: loadStats };
}

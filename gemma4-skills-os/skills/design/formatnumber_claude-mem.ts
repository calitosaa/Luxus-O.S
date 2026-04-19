---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/ui/viewer/utils/formatNumber.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

/**
 * Formats a number into compact notation with k/M suffixes
 * Examples:
 *   999 → "999"
 *   1234 → "1.2k"
 *   45678 → "45.7k"
 *   1234567 → "1.2M"
 */
export function formatStarCount(count: number): string {
  if (count < 1000) {
    return count.toString();
  }

  if (count < 1000000) {
    // Format as k (thousands)
    const thousands = count / 1000;
    return `${thousands.toFixed(1)}k`;
  }

  // Format as M (millions)
  const millions = count / 1000000;
  return `${millions.toFixed(1)}M`;
}

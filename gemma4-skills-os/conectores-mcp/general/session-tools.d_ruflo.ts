---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/mcp/tools/session-tools.d.ts
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

/**
 * V3 MCP Session Tools
 *
 * MCP tools for session management:
 * - session/save - Save current session
 * - session/restore - Restore session
 * - session/list - List available sessions
 *
 * Implements ADR-005: MCP-First API Design
 */
import { MCPTool } from '../types.js';
/**
 * session/save tool
 */
export declare const saveSessionTool: MCPTool;
/**
 * session/restore tool
 */
export declare const restoreSessionTool: MCPTool;
/**
 * session/list tool
 */
export declare const listSessionsTool: MCPTool;
export declare const sessionTools: MCPTool[];
export default sessionTools;
//# sourceMappingURL=session-tools.d.ts.map
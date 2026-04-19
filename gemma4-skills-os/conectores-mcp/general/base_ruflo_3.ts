---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/src/mcp/transports/base.ts
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

/**
 * Base transport interface for MCP
 */

import type { MCPRequest, MCPResponse, MCPNotification } from '../../utils/types.js';

export type RequestHandler = (request: MCPRequest) => Promise<MCPResponse>;
export type NotificationHandler = (notification: MCPNotification) => Promise<void>;

export interface ITransport {
  start(): Promise<void>;
  stop(): Promise<void>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  onRequest(handler: RequestHandler): void;
  onNotification?(handler: NotificationHandler): void;
  sendRequest(request: MCPRequest): Promise<MCPResponse>;
  sendNotification?(notification: MCPNotification): Promise<void>;
  getHealthStatus(): Promise<{
    healthy: boolean;
    error?: string;
    metrics?: Record<string, number>;
  }>;
}

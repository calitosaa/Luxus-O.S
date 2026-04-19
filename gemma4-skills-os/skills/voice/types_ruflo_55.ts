---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/server/router/types.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export interface Route {
	name: string;
	description: string;
	primary_model: string;
	fallback_models?: string[];
}

export interface RouteConfig {
	name: string;
	description: string;
}

export interface RouteSelection {
	routeName: string;
	error?: {
		message: string;
		statusCode?: number;
	};
}

export const ROUTER_FAILURE = "arch_router_failure";

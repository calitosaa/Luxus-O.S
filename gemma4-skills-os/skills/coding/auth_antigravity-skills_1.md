---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-bundle-full-stack-developer/skills/api-patterns/auth.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

# Authentication Patterns

> Choose auth pattern based on use case.

## Selection Guide

| Pattern | Best For |
|---------|----------|
| **JWT** | Stateless, microservices |
| **Session** | Traditional web, simple |
| **OAuth 2.0** | Third-party integration |
| **API Keys** | Server-to-server, public APIs |
| **Passkey** | Modern passwordless (2025+) |

## JWT Principles

```
Important:
├── Always verify signature
├── Check expiration
├── Include minimal claims
├── Use short expiry + refresh tokens
└── Never store sensitive data in JWT
```

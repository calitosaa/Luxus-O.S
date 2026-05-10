# 14 — Backend

> SQL avanzado, PostgreSQL internals, Redis, Kafka, bases de datos, frameworks backend, autenticación y APIs.

## Mapa del dominio

```
14-backend/
├── bases-datos/
│   ├── sql-avanzado/
│   │   ├── window-functions.md
│   │   ├── cte-recursive.md
│   │   └── query-optimization.md
│   ├── postgresql/
│   │   ├── postgres-query-planner.md  # Optimizer, cost model, statistics
│   │   ├── postgres-mvcc.md           # MVCC, visibility, vacuum
│   │   ├── postgres-indexes.md        # B-tree, GiST, GIN, BRIN, bloom
│   │   ├── postgres-wal.md            # Write-Ahead Log, recovery
│   │   └── postgres-partitioning.md
│   ├── redis/
│   │   ├── redis-internals.md         # Data structures, persistence
│   │   ├── redis-cluster.md           # Hash slots, gossip protocol
│   │   └── redis-streams.md           # Consumer groups, XADD/XREAD
│   ├── mongodb/
│   │   ├── mongodb-wiredtiger.md      # Storage engine internals
│   │   └── mongodb-aggregation.md
│   └── clickhouse/
│       └── mergetree-engine.md        # Primary key, data skipping indexes
├── mensajeria/
│   ├── kafka/
│   │   ├── kafka-internals.md         # Log segments, offset management
│   │   ├── kafka-consumer-groups.md   # Rebalancing, partition assignment
│   │   └── kafka-exactly-once.md      # Idempotent producer, transactions
│   └── rabbitmq.md
├── cache/
│   ├── cache-strategies.md            # Cache-aside, write-through, write-back
│   └── distributed-cache.md
├── auth/
│   ├── oauth2-oidc.md                 # Authorization code, PKCE, token types
│   ├── jwt-internals.md               # Claims, signing, validation
│   └── session-management.md
├── frameworks/
│   ├── nodejs-async.md                # libuv, event loop, cluster
│   ├── fastapi.md                     # Pydantic, dependency injection, async
│   ├── django-orm.md
│   └── spring-boot.md
└── _index.md
```

## Topics pendientes

- [ ] PostgreSQL query planner internals — fuente: [PostgreSQL optimizer/ source](https://github.com/postgres/postgres/tree/master/src/backend/optimizer)
- [ ] PostgreSQL MVCC — fuente: [The Internals of PostgreSQL](https://www.interdb.jp/pg/)
- [ ] Kafka log compaction — fuente: [Kafka docs](https://kafka.apache.org/documentation/#log_compaction)
- [ ] ClickHouse MergeTree — fuente: [ClickHouse docs: MergeTree](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree)
- [ ] OAuth 2.1 / PKCE — fuente: [OAuth 2.1 draft](https://oauth.net/2.1/)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

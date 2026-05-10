# 13 — Arquitectura de Software

> Design patterns, DDD, CQRS, Event Sourcing, sistemas distribuidos, System Design y API design.

## Mapa del dominio

```
13-arquitectura-software/
├── design-patterns/
│   ├── creacionales/
│   │   ├── singleton.md
│   │   ├── factory-method.md
│   │   ├── abstract-factory.md
│   │   ├── builder.md
│   │   └── prototype.md
│   ├── estructurales/
│   │   ├── adapter.md
│   │   ├── bridge.md
│   │   ├── composite.md
│   │   ├── decorator.md
│   │   ├── facade.md
│   │   ├── flyweight.md
│   │   └── proxy.md
│   └── comportamiento/
│       ├── observer.md
│       ├── strategy.md
│       ├── command.md
│       ├── iterator.md
│       └── state.md
├── solid.md
├── ddd/
│   ├── bounded-context.md
│   ├── aggregate.md
│   ├── domain-events.md
│   └── value-objects.md
├── cqrs-event-sourcing/
│   ├── cqrs.md
│   ├── event-sourcing.md
│   └── saga-pattern.md
├── sistemas-distribuidos/
│   ├── consenso/
│   │   ├── raft.md                    # In Search of Understandable Consensus
│   │   ├── paxos.md                   # Paxos Made Simple
│   │   └── bft-pbft.md                # Byzantine Fault Tolerance
│   ├── cap-theorem.md
│   ├── consistency-models.md          # Linearizability, eventual consistency
│   ├── distributed-transactions.md    # 2PC, 3PC, Saga
│   └── clock-time.md                  # Lamport clocks, vector clocks
├── api-design/
│   ├── rest-design.md
│   ├── graphql-schema.md
│   └── api-versioning.md
├── microservicios/
│   ├── decomposition-patterns.md
│   ├── service-discovery.md
│   └── circuit-breaker.md
└── _index.md
```

## Topics pendientes

- [ ] Raft consensus algorithm — fuente: [Ongaro & Ousterhout 2014](https://raft.github.io/raft.pdf)
- [ ] Paxos Made Simple — fuente: [Lamport 2001](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf)
- [ ] Byzantine Fault Tolerance / PBFT — fuente: [Castro & Liskov 1999](http://www.pmg.csail.mit.edu/papers/osdi99.pdf)
- [ ] Lamport clocks y happens-before — fuente: [Lamport 1978 paper]
- [ ] Consistent hashing con virtual nodes — fuente: [Dynamo paper (DeCandia et al., 2007)](https://dl.acm.org/doi/10.1145/1294261.1294281)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

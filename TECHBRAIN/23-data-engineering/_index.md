# 23 — Data Engineering

> Pipelines de datos, Spark, Kafka, Airflow, dbt, almacenes columnar, formatos de datos y data lakes.

## Mapa del dominio

```
23-data-engineering/
├── batch-processing/
│   ├── apache-spark/
│   │   ├── spark-rdd-internals.md     # Lineage, partitions, narrow/wide deps
│   │   ├── spark-catalyst.md          # Logical/physical plan, optimizer
│   │   └── spark-shuffle.md           # Sort-based shuffle, exchange
│   └── dbt/
│       ├── dbt-dag.md                 # Dependency graph, refs
│       └── dbt-materializations.md    # Tables, views, incremental
├── stream-processing/
│   ├── apache-flink/
│   │   ├── flink-checkpointing.md     # Chandy-Lamport, RocksDB state
│   │   └── flink-watermarks.md        # Event time, watermarks, windows
│   └── kafka-streams.md               # KStreams DSL, state stores
├── orquestacion/
│   ├── airflow/
│   │   ├── airflow-dag.md             # DAG, operators, task instances
│   │   └── airflow-scheduler.md       # Scheduler loop, executor types
│   └── prefect.md
├── almacenamiento/
│   ├── data-warehouse/
│   │   ├── snowflake-internals.md     # Virtual warehouses, cloud services
│   │   └── bigquery-internals.md      # Dremel, Colossus, slots
│   ├── data-lake/
│   │   ├── delta-lake.md              # ACID transactions, transaction log
│   │   └── apache-iceberg.md          # Snapshot isolation, hidden partitioning
│   └── formatos/
│       ├── apache-parquet.md          # Columnar format, encodings, compression
│       ├── apache-arrow.md            # In-memory columnar, zero-copy
│       └── apache-orc.md
├── bases-datos-especializadas/
│   ├── clickhouse-mergetree.md        # Primary key, data skipping, merges
│   └── duckdb-internals.md            # Vectorized execution, OLAP in-process
├── cdc/
│   └── debezium.md                    # Change Data Capture, log-based
└── _index.md
```

## Topics pendientes

- [ ] Apache Arrow columnar format — fuente: [Apache Arrow spec](https://arrow.apache.org/docs/format/Columnar.html)
- [ ] DuckDB vectorized execution — fuente: [DuckDB paper (Raasveldt & Mühleisen 2019)](https://duckdb.org/pdf/SIGMOD2019-demo-duckdb.pdf)
- [ ] ClickHouse MergeTree engine — fuente: [ClickHouse MergeTree docs](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree)
- [ ] Delta Lake transaction log format — fuente: [Delta Lake paper (Armbrust et al. 2020)](https://dl.acm.org/doi/10.14778/3415478.3415560)
- [ ] Flink Chandy-Lamport checkpointing — fuente: [Apache Flink docs: checkpointing](https://nightlies.apache.org/flink/flink-docs-stable/docs/ops/state/checkpointing_under_backpressure/)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

# 11 — Cloud

> AWS, GCP, Azure, Cloudflare, Vercel, Supabase y otros proveedores — cada servicio documentado individualmente.

## Mapa del dominio

```
11-cloud/
├── aws/
│   ├── compute/
│   │   ├── ec2-internals.md
│   │   ├── lambda-internals.md        # Firecracker microVMs, execution model
│   │   ├── ecs-fargate.md
│   │   └── eks.md
│   ├── networking/
│   │   ├── vpc-internals.md           # Subnets, routing, NACLs, SGs
│   │   ├── cloudfront.md
│   │   └── route53.md
│   ├── storage/
│   │   ├── s3-internals.md            # Consistency model, presigned URLs
│   │   ├── ebs.md
│   │   └── efs.md
│   ├── databases/
│   │   ├── rds-aurora.md
│   │   ├── dynamodb-internals.md      # Consistent hashing, partition key design
│   │   └── elasticache.md
│   ├── messaging/
│   │   ├── sqs-internals.md
│   │   └── kinesis.md
│   ├── ai-ml/
│   │   ├── bedrock.md
│   │   └── sagemaker.md
│   └── security/
│       ├── iam-internals.md           # Policies, roles, assume role
│       └── guardduty.md
├── gcp/
│   ├── compute-engine.md
│   ├── cloud-run.md
│   ├── gke.md
│   ├── bigquery-internals.md          # Dremel, columnar execution
│   └── vertex-ai.md
├── azure/
│   ├── aks.md
│   ├── azure-functions.md
│   └── azure-openai.md
├── cloudflare/
│   ├── workers-internals.md           # V8 isolates, execution model
│   ├── kv-internals.md
│   ├── r2-internals.md
│   ├── durable-objects.md
│   └── d1-database.md
├── vercel/
│   ├── edge-runtime.md
│   └── ai-sdk.md
└── _index.md
```

## Topics pendientes

- [ ] AWS Lambda Firecracker microVM — fuente: [Firecracker paper (Agache et al., 2020)](https://www.usenix.org/system/files/nsdi20-paper-agache.pdf)
- [ ] DynamoDB consistent hashing — fuente: [Amazon Dynamo paper (DeCandia et al., 2007)](https://dl.acm.org/doi/10.1145/1294261.1294281)
- [ ] BigQuery Dremel execution — fuente: [Dremel paper (Melnik et al., 2010)](https://dl.acm.org/doi/10.14778/1920841.1920886)
- [ ] Cloudflare Workers V8 isolates — fuente: [Cloudflare blog](https://blog.cloudflare.com/cloud-computing-without-containers/)
- [ ] AWS VPC internals y Hyperplane NLB — fuente: [AWS networking docs]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

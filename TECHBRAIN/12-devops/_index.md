# 12 — DevOps

> Git internals, CI/CD, Docker, Kubernetes (cada objeto), Terraform, Observabilidad, SRE y Platform Engineering.

## Mapa del dominio

```
12-devops/
├── git-internals/
│   ├── objeto-model.md                # Blob, tree, commit, tag
│   ├── packfiles.md                   # Delta compression, pack protocol
│   └── git-protocols.md               # HTTP, SSH, git protocol
├── containers/
│   ├── docker/
│   │   ├── containerd-internals.md    # Container runtime, shim
│   │   ├── docker-networking.md       # Bridge, overlay, host, macvlan
│   │   ├── docker-storage.md          # OverlayFS, volumes, bind mounts
│   │   └── dockerfile-optimizacion.md # Layer caching, multistage builds
│   └── oci-spec.md                    # Image spec, runtime spec, distribution
├── kubernetes/
│   ├── arquitectura/
│   │   ├── api-server.md
│   │   ├── etcd-internals.md          # Raft consensus, watch, MVCC
│   │   ├── scheduler.md               # Predicates, priorities, binding
│   │   └── controller-manager.md
│   ├── objetos/
│   │   ├── pod.md
│   │   ├── deployment.md
│   │   ├── statefulset.md
│   │   ├── daemonset.md
│   │   ├── service.md                 # ClusterIP, NodePort, LoadBalancer
│   │   ├── ingress.md
│   │   ├── configmap-secret.md
│   │   ├── pvc-pv.md
│   │   └── hpa-vpa.md
│   ├── networking/
│   │   ├── cni.md                     # CNI spec, Calico, Cilium, Flannel
│   │   └── service-mesh.md            # Istio, Linkerd, Envoy
│   └── security/
│       ├── rbac.md
│       └── network-policies.md
├── ci-cd/
│   ├── github-actions-internals.md
│   ├── gitlab-ci.md
│   └── tekton.md
├── iac/
│   ├── terraform/
│   │   ├── terraform-state.md
│   │   ├── terraform-providers.md
│   │   └── terraform-modules.md
│   └── pulumi.md
├── observabilidad/
│   ├── opentelemetry.md               # Traces, metrics, logs, OTLP
│   ├── prometheus-internals.md        # TSDB, PromQL, scraping
│   ├── grafana.md
│   └── distributed-tracing.md        # Jaeger, Zipkin, sampling
└── _index.md
```

## Topics pendientes

- [ ] etcd Raft consensus en Kubernetes — fuente: [etcd GitHub](https://github.com/etcd-io/etcd)
- [ ] Kubernetes scheduler predicates y priorities — fuente: [k8s scheduler code](https://github.com/kubernetes/kubernetes/tree/master/pkg/scheduler)
- [ ] Cilium eBPF networking — fuente: [Cilium docs](https://docs.cilium.io/)
- [ ] OpenTelemetry specification — fuente: [OTEL spec](https://github.com/open-telemetry/opentelemetry-specification)
- [ ] Prometheus TSDB format — fuente: [Prometheus TSDB design](https://github.com/prometheus/prometheus/blob/main/tsdb/docs/format/README.md)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

# 28 — HPC (High Performance Computing)

> MPI, OpenMP, CUDA HPC, BLAS/LAPACK, supercomputing, benchmarking y optimización numérica.

## Mapa del dominio

```
28-hpc/
├── parallelismo/
│   ├── mpi/
│   │   ├── mpi-punto-a-punto.md       # Send/Recv, non-blocking, tags
│   │   ├── mpi-colectivas.md          # Broadcast, Reduce, AllGather, Scatter
│   │   └── mpi-topologias.md          # Cartesian, graph communicators
│   ├── openmp/
│   │   ├── openmp-directivas.md       # Parallel, for, sections, critical
│   │   └── openmp-memoria.md          # Shared, private, reduction
│   └── hibrido-mpi-openmp.md
├── gpu-hpc/
│   ├── cuda-hpc/
│   │   ├── cuda-memory-optimization.md  # Coalescing, shared memory, bank conflicts
│   │   ├── cuda-streams.md              # Concurrent kernels, overlap
│   │   └── nccl.md                       # NVIDIA Collective Communications
│   └── rocm-hip.md
├── numerica/
│   ├── blas-lapack.md                 # Level 1/2/3 BLAS, LAPACK routines
│   ├── sparse-solvers.md              # CG, GMRES, preconditioning
│   └── fft-hpc.md                     # FFTW, cuFFT optimización
├── infraestructura/
│   ├── slurm.md                       # Job scheduling, partition, QoS
│   ├── infiniband.md                  # RDMA, verbs API, subnet manager
│   └── lustre-filesystem.md           # Parallel filesystem for HPC
└── _index.md
```

## Topics pendientes

- [ ] MPI collective algorithms — fuente: [MPI standard](https://www.mpi-forum.org/docs/)
- [ ] CUDA bank conflicts y coalescing — fuente: [CUDA C++ Best Practices Guide](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/)
- [ ] BLAS GEMM optimization — fuente: [GotoBLAS2 paper (Goto & Geijn 2008)](https://dl.acm.org/doi/10.1145/1356052.1356053)
- [ ] InfiniBand RDMA verbs — fuente: [InfiniBand Architecture Specification]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 4 |

---

*Última actualización: 2026-05*

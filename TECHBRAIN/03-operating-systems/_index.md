# 03 — Operating Systems

> Linux kernel internals, scheduling, memory management, system calls, filesystems, IPC y virtualización.

## Mapa del dominio

```
03-operating-systems/
├── linux/
│   ├── kernel/
│   │   ├── scheduler/
│   │   │   ├── cfs-completely-fair-scheduler.md
│   │   │   └── realtime-preempt-rt.md
│   │   ├── memory/
│   │   │   ├── virtual-memory.md
│   │   │   ├── page-tables.md
│   │   │   └── slab-allocator.md
│   │   ├── io/
│   │   │   ├── io-uring.md
│   │   │   └── vfs-layer.md
│   │   ├── ebpf/
│   │   │   ├── ebpf-verifier.md
│   │   │   └── ebpf-maps.md
│   │   └── security/
│   │       ├── landlock-lsm.md
│   │       └── seccomp.md
│   ├── syscalls/
│   │   ├── syscall-table.md
│   │   └── vdso.md
│   └── procfs-sysfs.md
├── windows/
│   ├── ntfs-internals.md
│   └── win32-subsystem.md
├── macos/
│   └── xnu-kernel.md
├── rtos/
│   ├── freertos-tasks.md
│   └── zephyr-os.md
└── _index.md
```

## Archivos disponibles

*(vacío — pendiente)*

## Topics pendientes

- [ ] io_uring: ring buffer, SQ/CQ, polling — fuente: [io_uring paper (Jens Axboe)](https://kernel.dk/io_uring.pdf)
- [ ] eBPF verifier internals — fuente: [Linux kernel verifier.c](https://elixir.bootlin.com/linux/latest/source/kernel/bpf/verifier.c)
- [ ] CFS: red-black tree, vruntime, load balancing — fuente: [kernel/sched/fair.c](https://elixir.bootlin.com/linux/latest/source/kernel/sched/fair.c)
- [ ] PREEMPT_RT real-time Linux — fuente: [Real-Time Linux wiki](https://wiki.linuxfoundation.org/realtime/start)
- [ ] Landlock LSM — fuente: [Landlock kernel docs](https://docs.kernel.org/userspace-api/landlock.html)
- [ ] PSI (Pressure Stall Information) — fuente: [Linux PSI docs](https://docs.kernel.org/accounting/psi.html)
- [ ] Slab allocator internals — fuente: [kernel/mm/slab.c](https://elixir.bootlin.com/linux/latest/source/mm/slab.c)
- [ ] Virtual memory: mmap, page faults, COW — fuente: [Linux kernel Documentation/vm/](https://www.kernel.org/doc/html/latest/admin-guide/mm/)
- [ ] vDSO mechanism — fuente: [Linux vdso docs](https://man7.org/linux/man-pages/man7/vdso.7.html)
- [ ] seccomp-bpf filters — fuente: [kernel seccomp docs](https://www.kernel.org/doc/html/latest/userspace-api/seccomp_filter.html)

## Prereqs recomendados

- Hardware → [[../02-hardware/_index.md]]
- Algoritmos → [[../09-algoritmos/_index.md]]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Archivos parciales (🔶) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 10 |

---

*Última actualización: 2026-05*

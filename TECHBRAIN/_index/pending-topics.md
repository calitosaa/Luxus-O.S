# Topics Pendientes de Documentar

Este archivo rastrea topics identificados con fuentes, pero cuyo contenido aún no ha sido creado.

**Formato**: `- [ ] Topic — fuente: [link] — dominio: XX-nombre`

---

## Hardware

- [ ] PCIe Transaction Layer Packets (TLPs) estructura exacta — fuente: [PCIe Base Spec 6.0](https://pcisig.com/specifications) — dominio: 02-hardware
- [ ] IOMMU y virtualización de dispositivos — fuente: [Intel VT-d spec](https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html) — dominio: 02-hardware
- [ ] Coherencia de caché en sistemas NUMA multi-socket — fuente: [Intel 64 and IA-32 Architectures Software Developer's Manual, Vol 3](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html) — dominio: 02-hardware
- [ ] CXL (Compute Express Link) protocolo — fuente: [CXL Specification 3.1](https://www.computeexpresslink.org/spec-landing) — dominio: 02-hardware
- [ ] HBM (High Bandwidth Memory) arquitectura — fuente: [JEDEC HBM3 Standard](https://www.jedec.org/standards-documents/docs/jesd235c) — dominio: 02-hardware
- [ ] DDR5 sub-channel architecture y ECC — fuente: [JEDEC DDR5 Standard JESD79-5](https://www.jedec.org/standards-documents/docs/jesd79-5) — dominio: 02-hardware
- [ ] Chiplet design y UCIe interconnects — fuente: [UCIe Specification 2.0](https://www.uciexpress.org/) — dominio: 02-hardware

## Sistemas Operativos

- [ ] io_uring: ring buffer, SQ/CQ, polling — fuente: [io_uring paper (Jens Axboe)](https://kernel.dk/io_uring.pdf) — dominio: 03-operating-systems
- [ ] eBPF verifier internals — fuente: [Linux kernel verifier.c](https://elixir.bootlin.com/linux/latest/source/kernel/bpf/verifier.c) — dominio: 03-operating-systems
- [ ] PREEMPT_RT real-time Linux — fuente: [Real-Time Linux wiki](https://wiki.linuxfoundation.org/realtime/start) — dominio: 03-operating-systems
- [ ] Landlock LSM — fuente: [Landlock kernel docs](https://docs.kernel.org/userspace-api/landlock.html) — dominio: 03-operating-systems
- [ ] PSI (Pressure Stall Information) — fuente: [Linux PSI docs](https://docs.kernel.org/accounting/psi.html) — dominio: 03-operating-systems

## Redes

- [ ] DPDK internals — fuente: [DPDK programmer's guide](https://doc.dpdk.org/guides/prog_guide/) — dominio: 06-networking
- [ ] SR-IOV y virtualización de red hardware — fuente: [PCI SIG SR-IOV spec](https://pcisig.com/specifications/iov/) — dominio: 06-networking
- [ ] RDMA e InfiniBand — fuente: [InfiniBand Architecture Specification](https://www.infinibandta.org/ibta-specification/) — dominio: 06-networking
- [ ] P4 Programming Language — fuente: [P4 Language Spec v1.2](https://p4.org/p4-spec/docs/P4-16-v1.2.2.html) — dominio: 06-networking
- [ ] Segment Routing (SRv6) — fuente: [RFC 8986: SRv6 Network Programming](https://www.rfc-editor.org/rfc/rfc8986) — dominio: 06-networking
- [ ] Multipath TCP (MPTCP) — fuente: [RFC 8684: TCP Extensions for Multipath Operation](https://www.rfc-editor.org/rfc/rfc8684) — dominio: 06-networking
- [ ] QUIC loss detection — fuente: [RFC 9002: QUIC Loss Detection and Congestion Control](https://www.rfc-editor.org/rfc/rfc9002) — dominio: 06-networking
- [ ] HTTP/3 QPACK — fuente: [RFC 9204: QPACK](https://www.rfc-editor.org/rfc/rfc9204) — dominio: 06-networking

## Inteligencia Artificial

- [ ] Flash Attention 2 algoritmo completo — fuente: [FlashAttention-2 paper (Dao, 2023)](https://arxiv.org/abs/2307.08691) — dominio: 20-ia
- [ ] Flash Attention 3 — fuente: [FlashAttention-3 paper (Shah et al., 2024)](https://arxiv.org/abs/2407.08608) — dominio: 20-ia
- [ ] Ring Attention para contextos largos — fuente: [Ring Attention with Blockwise Transformers (Liu et al., 2023)](https://arxiv.org/abs/2310.01889) — dominio: 20-ia
- [ ] Mixture of Experts: routing y load balancing — fuente: [Outrageously Large Neural Networks (Shazeer et al., 2017)](https://arxiv.org/abs/1701.06538) + [Switch Transformers (Fedus et al., 2021)](https://arxiv.org/abs/2101.03961) — dominio: 20-ia
- [ ] Speculative Decoding paso a paso — fuente: [Fast Inference from Transformers via Speculative Decoding (Leviathan et al., 2023)](https://arxiv.org/abs/2211.17192) — dominio: 20-ia
- [ ] PagedAttention (vLLM) — fuente: [Efficient Memory Management for Large Language Model Serving (Kwon et al., 2023)](https://arxiv.org/abs/2309.06180) — dominio: 20-ia
- [ ] Continuous Batching — fuente: [Orca paper (Yu et al., 2022)](https://www.usenix.org/conference/osdi22/presentation/yu) — dominio: 20-ia
- [ ] GGUF format estructura binaria — fuente: [llama.cpp GGUF spec](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) — dominio: 20-ia
- [ ] AWQ quantization — fuente: [AWQ paper (Lin et al., 2023)](https://arxiv.org/abs/2306.00978) — dominio: 20-ia
- [ ] DPO derivación matemática — fuente: [Direct Preference Optimization (Rafailov et al., 2023)](https://arxiv.org/abs/2305.18290) — dominio: 20-ia
- [ ] GRPO (DeepSeek approach) — fuente: [DeepSeekMath (Shao et al., 2024)](https://arxiv.org/abs/2402.03300) — dominio: 20-ia
- [ ] Diffusion Models DDPM derivación — fuente: [Denoising Diffusion Probabilistic Models (Ho et al., 2020)](https://arxiv.org/abs/2006.11239) — dominio: 20-ia
- [ ] Flow Matching — fuente: [Flow Matching for Generative Modeling (Lipman et al., 2022)](https://arxiv.org/abs/2210.02747) — dominio: 20-ia
- [ ] Sparse Autoencoders para interpretability — fuente: [Towards Monosemanticity (Anthropic, 2023)](https://transformer-circuits.pub/2023/monosemantic-features/index.html) — dominio: 20-ia
- [ ] KV Cache eviction (H2O, StreamingLLM) — fuente: [H2O paper (Zhang et al., 2023)](https://arxiv.org/abs/2306.14048) + [StreamingLLM (Xiao et al., 2023)](https://arxiv.org/abs/2309.17453) — dominio: 20-ia

## MCP / Agentes

- [ ] MCP Spec 2025-03-26 completa — fuente: [MCP Specification](https://spec.modelcontextprotocol.io/specification/2025-03-26/) — dominio: 21-mcp-skills-agentes
- [ ] A2A Protocol — fuente: [Google A2A Spec](https://google.github.io/A2A/) — dominio: 21-mcp-skills-agentes
- [ ] Skill .md format spec — fuente: [VoltAgent awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — dominio: 21-mcp-skills-agentes

## Ciberseguridad

- [ ] Heap exploitation moderno: tcache poisoning — fuente: [glibc tcache implementation](https://sourceware.org/git/?p=glibc.git;a=blob;f=malloc/malloc.c) — dominio: 07-ciberseguridad
- [ ] Kernel exploitation: ret2usr, SMEP/SMAP bypass — fuente: [Linux Kernel Exploitation (slides, various CTF writeups)] — dominio: 07-ciberseguridad
- [ ] XZ Utils backdoor anatomy — fuente: [Openwall analysis](https://www.openwall.com/lists/oss-security/2024/03/29/4) — dominio: 07-ciberseguridad
- [ ] Side channel: FLUSH+RELOAD — fuente: [FLUSH+RELOAD paper (Yarom & Falkner, 2014)](https://eprint.iacr.org/2013/448.pdf) — dominio: 07-ciberseguridad

## Sistemas Distribuidos

- [ ] Raft consensus algorithm — fuente: [In Search of an Understandable Consensus Algorithm (Ongaro & Ousterhout, 2014)](https://raft.github.io/raft.pdf) — dominio: 13-arquitectura-software
- [ ] Paxos Made Simple — fuente: [Paxos Made Simple (Lamport, 2001)](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf) — dominio: 13-arquitectura-software
- [ ] Byzantine Fault Tolerance / PBFT — fuente: [Practical Byzantine Fault Tolerance (Castro & Liskov, 1999)](http://www.pmg.csail.mit.edu/papers/osdi99.pdf) — dominio: 13-arquitectura-software

## Bases de Datos

- [ ] PostgreSQL query planner internals — fuente: [PostgreSQL source: optimizer/](https://github.com/postgres/postgres/tree/master/src/backend/optimizer) + [The Internals of PostgreSQL](https://www.interdb.jp/pg/) — dominio: 14-backend
- [ ] ClickHouse MergeTree engine — fuente: [ClickHouse docs: MergeTree](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree) — dominio: 23-data-engineering
- [ ] Apache Arrow columnar format — fuente: [Apache Arrow spec](https://arrow.apache.org/docs/format/Columnar.html) — dominio: 23-data-engineering
- [ ] DuckDB vectorized execution — fuente: [DuckDB paper (Raasveldt & Mühleisen, 2019)](https://duckdb.org/pdf/SIGMOD2019-demo-duckdb.pdf) — dominio: 23-data-engineering

## Gráficos 3D

- [ ] PBR math: BRDF, Cook-Torrance — fuente: [Physically Based Rendering book (Pharr, Jakob, Humphreys)](https://www.pbr-book.org/) — dominio: 29-graficos-3d
- [ ] ReSTIR — fuente: [Spatiotemporal reservoir resampling (Bitterli et al., 2020)](https://research.nvidia.com/labs/rtr/publication/bitterli2020spatiotemporal/) — dominio: 29-graficos-3d

## Privacidad y Formal Methods

- [ ] Privacidad diferencial: mecanismos de Laplace y Gaussiano — fuente: [The Algorithmic Foundations of Differential Privacy (Dwork & Roth, 2014)](https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf) — dominio: 07-ciberseguridad
- [ ] TLA+ model checking — fuente: [Specifying Systems (Lamport, 2002)](https://lamport.azurewebsites.net/tla/book.html) — dominio: 08-programacion

---

*Actualizado: 2026-05*

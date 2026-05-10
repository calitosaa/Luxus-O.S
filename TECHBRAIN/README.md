# TECHBRAIN — Biblioteca de Alejandría Tecnológica

> La Biblioteca de Alejandría de la tecnología compleja. Conocimiento técnico real, verificado, con fuentes primarias. Sin inventar. Sin rellenar.

**Audiencia**: Desarrolladores senior, ingenieros de software, investigadores de IA, especialistas en ciberseguridad, data engineers, arquitectos de sistemas.

**Nivel mínimo**: Ya sabes programar y quieres entender los internals.

---

## Ley Suprema

**NO SE INVENTA. NO SE GENERA SIN FUENTE. NO SE RELLENA.**

Cada afirmación técnica tiene fuente real: RFC, spec oficial, paper en arXiv, código fuente de proyecto principal, o documentación oficial. Si no hay fuente, hay un `[NEEDS_SOURCE]` explícito.

---

## Mapa de Dominios

### Bloque A — Fundamentos Físicos y Hardware
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [01-physics-electronics](./01-physics-electronics/_index.md) | Electromagnetismo, electrónica analógica/digital, señales, física cuántica | — |
| [02-hardware](./02-hardware/_index.md) | CPU (x86, ARM, RISC-V), GPU, storage, redes, embedded, FPGA/ASIC | — |

### Bloque B — Software Base
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [03-operating-systems](./03-operating-systems/_index.md) | Linux kernel internals, Windows NT, macOS XNU, virtualización, boot | — |
| [04-terminal-shell](./04-terminal-shell/_index.md) | Bash/Zsh/Fish internals, vim/neovim, tmux, GNU tools, scripting | — |
| [05-filesystems-storage](./05-filesystems-storage/_index.md) | VFS, ext4, Btrfs, XFS, ZFS, NTFS, APFS, distributed filesystems | — |

### Bloque C — Redes y Comunicaciones
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [06-networking](./06-networking/_index.md) | OSI, TCP/IP, DNS, HTTP/2/3, TLS, gRPC, WiFi 6/7, 5G, eBPF/XDP | — |
| [07-ciberseguridad](./07-ciberseguridad/_index.md) | Offensive/defensive sec, exploit dev, cloud security, forensics, CTF | — |

### Bloque D — Programación
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [08-programacion](./08-programacion/_index.md) | Python, JS/TS, Rust, Go, C/C++, Java, Kotlin, Swift, C#, Zig, Assembly, WASM | — |

### Bloque E — Algoritmia y Matemáticas
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [09-algoritmos](./09-algoritmos/_index.md) | Algoritmos clásicos, estructuras de datos, análisis de complejidad | — |
| [10-matematicas](./10-matematicas/_index.md) | Álgebra lineal, cálculo, probabilidad, teoría de información, optimización | — |

### Bloque F — Cloud, DevOps y Plataforma
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [11-cloud](./11-cloud/_index.md) | AWS (200+ servicios), GCP (100+), Azure (200+), Cloudflare, Vercel, Supabase | — |
| [12-devops](./12-devops/_index.md) | Git internals, CI/CD, Docker, Kubernetes (cada objeto), Terraform, SRE, FinOps | — |
| [13-arquitectura-software](./13-arquitectura-software/_index.md) | Design patterns, DDD, Clean Architecture, CQRS, Event Sourcing, System Design | — |

### Bloque G — Desarrollo de Aplicaciones
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [14-backend](./14-backend/_index.md) | PostgreSQL internals, Redis, Kafka, REST, GraphQL, OAuth2, frameworks | — |
| [15-frontend](./15-frontend/_index.md) | Browser internals, React Fiber, Vue reactivity, Next.js, WebGL/WebGPU | — |
| [16-mobile](./16-mobile/_index.md) | Android (ART, Compose), iOS (XNU, SwiftUI), Flutter, React Native | — |
| [17-aplicaciones-desktop](./17-aplicaciones-desktop/_index.md) | Electron, Tauri, Qt, GTK, WPF, .NET MAUI, WinUI 3 | — |
| [18-videojuegos](./18-videojuegos/_index.md) | Unity, Unreal, rendering pipeline, física, shaders GLSL/HLSL, Godot | — |
| [19-sistemas-embebidos](./19-sistemas-embebidos/_index.md) | RTOS, bare metal, HAL design, bootloaders, OTA, embedded security | — |

### Bloque H — Inteligencia Artificial
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [20-ia](./20-ia/_index.md) | ML clásico, deep learning, transformers, LLMs, RAG, agentes, computer vision | — |

### Bloque I — MCP, Skills y Ecosistema de Agentes
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [21-mcp-skills-agentes](./21-mcp-skills-agentes/_index.md) | MCP spec, skills system, A2A protocol, catálogo MCP servers, catálogo skills | — |

### Bloque J — Ecosistemas de Empresas
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [22-ecosistemas](./22-ecosistemas/_index.md) | Google, Microsoft, Amazon, Meta, Apple, NVIDIA, Cloudflare, Vercel, Anthropic, OpenAI | — |

### Bloque K — Data Engineering y Ciencia de Datos
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [23-data-engineering](./23-data-engineering/_index.md) | Airflow, dbt, Spark, Flink, Kafka, data warehouses, data lakes, CDC | — |
| [24-data-science](./24-data-science/_index.md) | Estadística avanzada, visualización, series temporales, geoespacial | — |

### Bloque L — Carreras Universitarias
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [25-carreras-universitarias](./25-carreras-universitarias/_index.md) | MIT EECS, Stanford CS, CMU, Berkeley + todas las certificaciones cloud/seg | — |

### Bloque M — Temas Avanzados y Emergentes
| Dominio | Descripción | Archivos |
|---------|-------------|---------|
| [26-blockchain-web3](./26-blockchain-web3/_index.md) | Bitcoin internals, EVM, Solidity, DeFi, ZK proofs | — |
| [27-robotica](./27-robotica/_index.md) | ROS/ROS2, SLAM, cinemática, planificación, sensores | — |
| [28-hpc](./28-hpc/_index.md) | MPI, OpenMP, CUDA HPC, BLAS, supercomputing | — |
| [29-graficos-3d](./29-graficos-3d/_index.md) | Rasterización, ray tracing, Vulkan, DirectX12, WebGPU, shaders | — |
| [30-bioinformatica](./30-bioinformatica/_index.md) | Secuenciación genómica, BLAST, alineamiento, proteómica | — |
| [31-computacion-cientifica](./31-computacion-cientifica/_index.md) | NumPy, SciPy, JAX internals, MATLAB, R científico | — |
| [32-automatizacion-workflows](./32-automatizacion-workflows/_index.md) | n8n, LangFlow, Dify, Temporal.io, Prefect, Dagster | — |
| [33-economia-tecnologia](./33-economia-tecnologia/_index.md) | Startups, VC técnico, pricing de APIs, FinOps, SaaS revenue models | — |

---

## Escala Objetivo

| Métrica | Sesión inicial | Objetivo final |
|---------|---------------|----------------|
| Dominios top-level | 33 | 50+ |
| Archivos totales | — | 1,000,000+ |
| Líneas por archivo | 500 mínimo | 1,000–5,000 |
| % contenido con fuente | 100% | 100% |
| Topics con código real | 80%+ | 95%+ |
| Cross-links por archivo | 5+ | 10+ |

---

## Cómo navegar

- Cada dominio tiene su `_index.md` con el mapa completo del dominio
- Los archivos de contenido siguen el [template estándar](./_templates/topic-template.md)
- Los archivos sin fuente verificada contienen `[NEEDS_SOURCE]` explícito
- Los topics pendientes de documentar están en [_index/pending-topics.md](./_index/pending-topics.md)

---

*v1.0 — Mayo 2026 | Autor: Carlos (@calitosaa)*

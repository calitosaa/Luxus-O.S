# 29 — Gráficos 3D

> Rasterización, ray tracing, Vulkan, DirectX 12, WebGPU, shaders, PBR y rendering avanzado.

## Mapa del dominio

```
29-graficos-3d/
├── teoria/
│   ├── rasterizacion-pipeline.md      # Vertex → Rasterize → Fragment → Output
│   ├── ray-tracing-fundamentals.md    # Ray-surface intersection, BVH
│   └── pbr/
│       ├── pbr-fisica.md              # Energía, radiometría, BRDF
│       ├── cook-torrance.md           # GGX distribution, Smith masking
│       └── ibl.md                     # Image-Based Lighting, IBL maps
├── apis-graficas/
│   ├── vulkan/
│   │   ├── vulkan-pipeline.md         # Render pass, pipeline objects, barriers
│   │   ├── vulkan-memory.md           # VkMemory, allocation, transfer
│   │   └── vulkan-sync.md             # Semaphores, fences, pipeline barriers
│   ├── directx12.md                   # Command lists, descriptor heaps, root sig
│   ├── metal.md                       # Apple Metal, argument buffers
│   └── webgpu/
│       ├── webgpu-architecture.md     # Adapter, device, pipelines
│       └── wgsl.md                    # WebGPU Shading Language
├── shaders/
│   ├── glsl.md
│   ├── hlsl.md
│   └── compute-shaders.md             # GPU compute, thread groups, barriers
├── algoritmos/
│   ├── shadow-algorithms.md           # Shadow maps, PCF, PCSS, ray-traced shadows
│   ├── ao.md                          # SSAO, HBAO, ray-traced AO
│   ├── restir.md                      # ReSTIR DI, ReSTIR GI
│   └── denoising.md                   # DLSS, FSR, Intel XeSS, temporal AA
└── _index.md
```

## Topics pendientes

- [ ] PBR: Cook-Torrance BRDF derivación — fuente: [PBR book (Pharr, Jakob, Humphreys)](https://www.pbr-book.org/)
- [ ] ReSTIR — fuente: [Bitterli et al. 2020 SIGGRAPH](https://research.nvidia.com/labs/rtr/publication/bitterli2020spatiotemporal/)
- [ ] Vulkan render pass y pipeline barriers — fuente: [Vulkan spec](https://registry.khronos.org/vulkan/specs/1.3/html/vkspec.html)
- [ ] WebGPU spec completa — fuente: [W3C WebGPU spec](https://www.w3.org/TR/webgpu/)
- [ ] BVH construction algorithms (SAH) — fuente: [Physically Based Rendering book]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

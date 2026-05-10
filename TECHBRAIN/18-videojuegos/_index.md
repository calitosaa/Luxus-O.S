# 18 — Videojuegos

> Unity internals, Unreal Engine, pipelines de rendering, física de juegos, audio, networking multijugador y shaders.

## Mapa del dominio

```
18-videojuegos/
├── unity/
│   ├── unity-rendering.md             # SRP, URP, HDRP internals
│   ├── unity-ecs.md                   # DOTS, ECS, Burst compiler
│   ├── unity-physics.md               # PhysX, Unity Physics
│   └── unity-netcode.md               # Netcode for GameObjects, NGO
├── unreal/
│   ├── unreal-rendering.md            # Nanite, Lumen internals
│   ├── unreal-gameplay.md             # GameplayAbilitySystem, EQS
│   └── unreal-replication.md          # Network replication, prediction
├── rendering/
│   ├── rasterizacion.md               # Vertex processing, rasterization, frag
│   ├── ray-tracing.md                 # BVH, intersection tests, DXR
│   ├── pbr.md                         # BRDF, Cook-Torrance, GGX
│   └── shaders/
│       ├── glsl.md
│       ├── hlsl.md
│       └── wgsl.md
├── fisica/
│   ├── collision-detection.md         # Broad phase (BVH), narrow phase (GJK)
│   └── rigidbody-dynamics.md
├── audio/
│   ├── audio-engine.md
│   └── spatial-audio.md               # HRTF, binaural, ambisonics
├── networking/
│   ├── authoritative-server.md        # Client-side prediction, reconciliation
│   └── deterministic-lockstep.md
└── _index.md
```

## Topics pendientes

- [ ] Nanite virtualized geometry — fuente: [Unreal Engine 5 docs](https://docs.unrealengine.com/5.0/en-US/)
- [ ] Unity DOTS ECS architecture — fuente: [Unity DOTS docs](https://docs.unity3d.com/Packages/com.unity.entities@latest)
- [ ] PBR math: Cook-Torrance BRDF — fuente: [Physically Based Rendering book](https://www.pbr-book.org/)
- [ ] BVH traversal for ray tracing — fuente: [PBRT book, Shirley & Ecker]
- [ ] ReSTIR real-time lighting — fuente: [Bitterli et al. 2020 SIGGRAPH](https://research.nvidia.com/labs/rtr/publication/bitterli2020spatiotemporal/)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

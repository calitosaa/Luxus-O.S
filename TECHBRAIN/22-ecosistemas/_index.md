# 22 — Ecosistemas de Empresas

> Google, Microsoft, Amazon, Meta, Apple, NVIDIA, Cloudflare, Vercel, Anthropic, OpenAI — cada plataforma documentada en profundidad.

## Mapa del dominio

```
22-ecosistemas/
├── google/
│   ├── android/
│   ├── firebase/
│   ├── google-ai/
│   │   ├── gemini-api.md
│   │   └── vertex-ai.md
│   ├── antigravity-ide.md             # Google's agent-first IDE
│   └── angular/
├── microsoft/
│   ├── azure/
│   ├── dotnet/
│   ├── github/
│   │   ├── github-actions.md
│   │   ├── github-copilot.md
│   │   └── github-models.md
│   └── vscode/
│       └── extension-api.md
├── amazon/
│   ├── aws/
│   └── bedrock.md
├── meta/
│   ├── pytorch/
│   │   ├── pytorch-autograd.md        # Autograd tape, gradient computation
│   │   └── pytorch-distributed.md    # DDP, FSDP
│   ├── react/
│   └── llama/
├── apple/
│   ├── swift/
│   ├── metal.md
│   └── mlx.md                        # Apple ML framework for M-series
├── nvidia/
│   ├── cuda/
│   │   ├── cuda-memory-model.md       # Global, shared, registers, L1
│   │   └── cuda-optimization.md       # Occupancy, coalescing, bank conflicts
│   └── triton.md                      # OpenAI Triton kernel language
├── cloudflare/
│   ├── workers-platform.md
│   └── workers-ai.md
├── anthropic/
│   ├── claude-api.md                  # Message API, streaming, vision
│   ├── claude-models.md               # Claude 3.5, Claude 4 family
│   └── claude-code-internals.md       # Claude Code architecture
└── _index.md
```

## Topics pendientes

- [ ] PyTorch autograd tape — fuente: [PyTorch source: torch/autograd/](https://github.com/pytorch/pytorch/tree/main/torch/autograd)
- [ ] CUDA memory coalescing — fuente: [CUDA C++ Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)
- [ ] Apple MLX framework — fuente: [MLX GitHub](https://github.com/ml-explore/mlx)
- [ ] GitHub Copilot technical architecture — fuente: [GitHub blog](https://github.blog/)
- [ ] Anthropic Claude API streaming — fuente: [Anthropic API docs](https://docs.anthropic.com)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

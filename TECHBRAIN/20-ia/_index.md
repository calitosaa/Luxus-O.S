# 20 — Inteligencia Artificial

> ML clásico, Deep Learning, Transformers, LLMs, RAG, RL, Computer Vision, Audio, AI Safety y MLOps.

## Mapa del dominio

```
20-ia/
├── ml-clasico/
│   ├── regresion-lineal.md
│   ├── regresion-logistica.md
│   ├── svm.md                         # Support Vector Machines, kernels
│   ├── decision-trees.md
│   ├── random-forests.md
│   ├── gradient-boosting.md           # XGBoost, LightGBM, CatBoost
│   └── clustering.md                  # K-means, DBSCAN, hierarchical
├── deep-learning/
│   ├── backpropagation-derivacion.md  # Derivación matemática completa
│   ├── optimizadores.md               # SGD, Adam, AdaGrad, RMSprop
│   ├── activaciones.md                # ReLU, GELU, SwiGLU, SiLU
│   ├── normalizacion.md               # BatchNorm, LayerNorm, GroupNorm
│   ├── cnns/
│   │   ├── convolucion-matematica.md
│   │   └── arquitecturas.md           # ResNet, EfficientNet, ConvNeXt
│   └── rnns/
│       ├── lstm-internals.md
│       └── gru-internals.md
├── transformers/
│   ├── attention/
│   │   ├── self-attention-derivacion.md  # Matemática completa desde QKV
│   │   ├── multi-head-attention.md
│   │   ├── flash-attention.md            # IO-aware algorithm completo
│   │   ├── grouped-query-attention.md    # GQA, MQA
│   │   └── flash-attention-3.md
│   ├── positional-encoding/
│   │   ├── sinusoidal.md
│   │   ├── rope.md                       # Rotary Position Embedding
│   │   └── alibi.md
│   └── arquitecturas/
│       ├── llama-3.md
│       ├── mistral-mixtral.md
│       ├── gemma-2.md
│       └── mamba-ssm.md
├── llms/
│   ├── preentrenamiento/
│   │   ├── tokenizacion/
│   │   │   ├── bpe.md                 # BPE algoritmo completo
│   │   │   └── tiktoken.md
│   │   ├── scaling-laws.md            # Chinchilla optimal compute
│   │   └── entrenamiento-distribuido/
│   │       ├── data-parallelism.md
│   │       ├── tensor-parallelism.md
│   │       └── deepspeed-zero.md
│   ├── fine-tuning/
│   │   ├── sft.md                     # Supervised fine-tuning
│   │   ├── peft/
│   │   │   ├── lora.md                # LoRA math, rank decomposition
│   │   │   └── qlora.md               # NF4 + LoRA
│   │   └── alignment/
│   │       ├── rlhf.md
│   │       ├── dpo.md                 # Direct Preference Optimization
│   │       └── grpo.md                # DeepSeek GRPO
│   ├── inferencia/
│   │   ├── vllm-pagedattention.md     # KV cache paging
│   │   ├── continuous-batching.md     # Orca approach
│   │   ├── speculative-decoding.md
│   │   └── cuantizacion/
│   │       ├── gguf-format.md         # GGUF binary structure
│   │       ├── awq.md
│   │       └── gptq.md
│   ├── rag/
│   │   ├── rag-basico.md
│   │   ├── chunking-strategies.md
│   │   ├── embedding-models.md
│   │   └── vector-databases/
│   │       ├── pgvector.md
│   │       └── qdrant.md
│   └── prompt-engineering/
│       ├── chain-of-thought.md
│       └── react-pattern.md
├── agentes/
│   ├── arquitecturas-agentes.md
│   ├── tool-use.md
│   └── multi-agente.md
├── computer-vision/
│   ├── diffusion-models.md            # DDPM derivación completa
│   └── stable-diffusion-architecture.md
├── ai-safety/
│   ├── mechanistic-interpretability.md
│   └── sparse-autoencoders.md
└── _index.md
```

## Topics pendientes

- [ ] Flash Attention 2 IO-aware algorithm — fuente: [FlashAttention-2 paper (Dao 2023)](https://arxiv.org/abs/2307.08691)
- [ ] Flash Attention 3 — fuente: [FlashAttention-3 paper (Shah et al. 2024)](https://arxiv.org/abs/2407.08608)
- [ ] Ring Attention para contextos largos — fuente: [Ring Attention paper (Liu et al. 2023)](https://arxiv.org/abs/2310.01889)
- [ ] Mixture of Experts routing — fuente: [Switch Transformers (Fedus et al. 2021)](https://arxiv.org/abs/2101.03961)
- [ ] PagedAttention (vLLM) — fuente: [Kwon et al. 2023](https://arxiv.org/abs/2309.06180)
- [ ] Continuous Batching (Orca) — fuente: [Yu et al. 2022 OSDI](https://www.usenix.org/conference/osdi22/presentation/yu)
- [ ] GGUF binary format — fuente: [llama.cpp GGUF spec](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md)
- [ ] AWQ quantization — fuente: [Lin et al. 2023](https://arxiv.org/abs/2306.00978)
- [ ] DPO derivación matemática — fuente: [Rafailov et al. 2023](https://arxiv.org/abs/2305.18290)
- [ ] GRPO (DeepSeek) — fuente: [DeepSeekMath (Shao et al. 2024)](https://arxiv.org/abs/2402.03300)
- [ ] Diffusion Models DDPM — fuente: [Ho et al. 2020](https://arxiv.org/abs/2006.11239)
- [ ] Flow Matching — fuente: [Lipman et al. 2022](https://arxiv.org/abs/2210.02747)
- [ ] Sparse Autoencoders para interpretability — fuente: [Anthropic Towards Monosemanticity 2023](https://transformer-circuits.pub/2023/monosemantic-features/index.html)
- [ ] KV Cache eviction (H2O) — fuente: [Zhang et al. 2023](https://arxiv.org/abs/2306.14048)
- [ ] Speculative Decoding — fuente: [Leviathan et al. 2023](https://arxiv.org/abs/2211.17192)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 15 |

---

*Última actualización: 2026-05*

# 30 — Bioinformática

> Secuenciación genómica, alineamiento de secuencias, llamada de variantes, análisis de proteínas y herramientas bioinformáticas.

## Mapa del dominio

```
30-bioinformatica/
├── secuenciacion/
│   ├── ngs-tecnologias.md             # Illumina, PacBio, Oxford Nanopore
│   └── fastq-formato.md               # Quality scores, PHRED, adapters
├── alineamiento/
│   ├── smith-waterman.md              # Local alignment, dynamic programming
│   ├── needleman-wunsch.md            # Global alignment
│   └── bwt-bwa.md                     # Burrows-Wheeler transform, BWA, Bowtie2
├── variantes/
│   ├── variant-calling.md             # SNPs, indels, GATK pipeline
│   └── vcf-formato.md                 # VCF 4.2 format spec
├── rna-seq/
│   ├── rna-seq-pipeline.md            # Alignment, quantification, DEA
│   └── kallisto-salmon.md             # Pseudoalignment for quantification
├── estructuras-proteinas/
│   ├── alphafold2.md                  # Architecture, FAPE loss, MSA
│   └── rosettafold.md
└── _index.md
```

## Topics pendientes

- [ ] Smith-Waterman local alignment DP — fuente: [Smith & Waterman 1981, Journal of Molecular Biology]
- [ ] Burrows-Wheeler Aligner (BWA) — fuente: [Li & Durbin 2009](https://academic.oup.com/bioinformatics/article/25/14/1754/225615)
- [ ] AlphaFold2 architecture — fuente: [Jumper et al. 2021, Nature](https://www.nature.com/articles/s41586-021-03819-2)
- [ ] GATK variant calling pipeline — fuente: [GATK best practices](https://gatk.broadinstitute.org/)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 4 |

---

*Última actualización: 2026-05*

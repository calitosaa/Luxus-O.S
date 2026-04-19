---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/skill-sentinel/scripts/analyzers/__init__.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

"""
Analyzers: modulos de analise por dimensao.

Cada analyzer recebe os dados de uma skill (do scanner) e retorna:
- score (0-100)
- findings (lista de problemas/recomendacoes)
"""
from __future__ import annotations

from typing import Any, Dict, List, Tuple

# Tipo padrao para resultado de um analyzer
AnalyzerResult = Tuple[float, List[Dict[str, Any]]]

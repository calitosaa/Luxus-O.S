---
source_repo: https://github.com/teng-lin/notebooklm-py
source_file: src/notebooklm/cli/agent.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

"""Agent integration commands."""

import click

from .agent_templates import get_agent_source_content
from .helpers import console


@click.group()
def agent():
    """Show bundled instructions for supported agent environments."""
    pass


@agent.command("show")
@click.argument("target", type=click.Choice(["codex", "claude"], case_sensitive=False))
def show_agent(target: str):
    """Display instructions for Codex or Claude Code."""
    content = get_agent_source_content(target)
    if content is None:
        console.print(f"[red]Error:[/red] {target} instructions not found in package data.")
        raise SystemExit(1)

    console.print(content)

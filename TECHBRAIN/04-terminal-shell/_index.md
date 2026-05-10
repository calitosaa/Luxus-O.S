# 04 — Terminal & Shell

> Bash/Zsh/Fish internals, scripting avanzado, herramientas GNU/BSD, editores de terminal, multiplexers y dotfiles.

## Mapa del dominio

```
04-terminal-shell/
├── shells/
│   ├── bash/
│   │   ├── bash-internals.md          # Proceso de inicio, opciones, subshells
│   │   ├── bash-expansions.md         # Parameter, brace, glob, process substitution
│   │   ├── bash-scripting-avanzado.md # Arrays, mapas, funciones, traps
│   │   └── bash-readline.md           # Keybindings, editing modes
│   ├── zsh/
│   │   ├── zsh-features.md            # Completion, globbing, correction
│   │   └── zsh-config.md              # .zshrc, zinit, prezto
│   ├── fish.md
│   └── posix-sh.md                    # Portabilidad POSIX real
├── herramientas/
│   ├── coreutils.md                   # find, grep, sed, awk, sort, uniq
│   ├── procesamiento-texto.md         # jq, yq, xargs, tee, tac, tr
│   ├── redes-terminal.md              # curl, wget, nc, nmap, dig, ss, ip
│   ├── procesos.md                    # ps, htop, strace, lsof, kill, nice
│   └── modernas.md                    # ripgrep, fd, bat, eza, fzf, zoxide
├── editores/
│   ├── vim/
│   │   ├── vim-internals.md           # Buffer, window, tab, mode machine
│   │   ├── vim-motions.md             # Text objects, operators, registers
│   │   └── vimscript.md
│   ├── neovim/
│   │   ├── neovim-api.md              # Lua API, RPC, channels
│   │   └── neovim-plugins.md          # nvim-treesitter, LSP, completion
│   └── helix.md
├── multiplexers/
│   ├── tmux-internals.md              # Sessions, windows, panes, server
│   └── screen.md
├── git/
│   ├── git-internals.md               # Objects, refs, packfiles, index
│   ├── git-workflows.md               # GitFlow, trunk-based, forking
│   └── git-avanzado.md                # Rebase, bisect, stash, worktree
└── _index.md
```

## Topics pendientes

- [ ] Bash process substitution internals — fuente: [Bash manual](https://www.gnu.org/software/bash/manual/)
- [ ] Git object model (blob, tree, commit, tag) — fuente: [Pro Git book](https://git-scm.com/book/en/v2)
- [ ] Neovim Lua API completa — fuente: [Neovim API docs](https://neovim.io/doc/user/api.html)
- [ ] tmux client-server architecture — fuente: [tmux source](https://github.com/tmux/tmux)
- [ ] Vim's modal editing internals — fuente: [Vim source: normal.c](https://github.com/vim/vim)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*

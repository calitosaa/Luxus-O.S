---
source_repo: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
source_file: cli/src/utils/logger.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import chalk from 'chalk';

export const logger = {
  info: (msg: string) => console.log(chalk.blue('info'), msg),
  success: (msg: string) => console.log(chalk.green('success'), msg),
  warn: (msg: string) => console.log(chalk.yellow('warn'), msg),
  error: (msg: string) => console.log(chalk.red('error'), msg),

  title: (msg: string) => console.log(chalk.bold.cyan(`\n${msg}\n`)),
  dim: (msg: string) => console.log(chalk.dim(msg)),
};

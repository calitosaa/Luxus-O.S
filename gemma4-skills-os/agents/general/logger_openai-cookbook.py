---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/object_oriented_agentic_approach/resources/object_oriented_agents/utils/logger.py
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# object_oriented_agents/utils/logger.py
import logging
from typing import Optional

def get_logger(name: str, level: int = logging.INFO, formatter: Optional[logging.Formatter] = None) -> logging.Logger:
    """
    Return a logger instance with a given name and logging level.
    If no formatter is provided, a default formatter will be used.
    """
    logger = logging.getLogger(name)
    logger.setLevel(level)

    if not logger.handlers:
        # Create a console handler
        ch = logging.StreamHandler()
        ch.setLevel(level)

        # Use a default formatter if none is provided
        if formatter is None:
            formatter = logging.Formatter(
                '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
            )
        ch.setFormatter(formatter)

        # Add the handler to the logger
        logger.addHandler(ch)

    return logger
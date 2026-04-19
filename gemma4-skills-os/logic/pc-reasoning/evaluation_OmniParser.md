---
source_repo: https://github.com/microsoft/OmniParser
source_file: docs/Evaluation.md
license: MIT
category: logic/pc-reasoning
imported_at: 2026-04-19
---

# Eval setup for ScreenSpot Pro
We adapt the eval code from ScreenSpot Pro (ss pro) official [repo](https://github.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/tree/main). This folder contains the inference script/results on this benchmark. We going through legal review proces to release omniparser v2. Once it is done, we will update the file so that it can load the v2 model. 
1. eval/ss_pro_gpt4o_omniv2.py: contains the prompt we use, it can be dropped in replacement for this [file](https://github.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/blob/main/models/gpt4x.py) in the original ss pro repo.
2. eval/logs_sspro_omniv2.json: contains the inferenced results for ss pro using GPT4o+OmniParserv2. 

---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/src/index.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Claude-Flow API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

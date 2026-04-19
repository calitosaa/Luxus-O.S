---
source_repo: https://github.com/Zie619/n8n-workflows
source_file: ai-stack/CHEAT-SHEET.md
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# 🎯 AI Stack Cheat Sheet
**Print this page and keep it handy!**

---

## 🚀 Starting & Stopping

### Windows
```powershell
# Start
.\start.ps1

# Stop
.\start.ps1 -Stop

# Check Status
.\start.ps1 -Status

# View Logs
.\start.ps1 -Logs
```

### Mac/Linux
```bash
# Start
./start.sh

# Stop
./start.sh --stop

# Check Status
./start.sh --status

# View Logs
./start.sh --logs
```

---

## 🌐 Service URLs

Copy these into your browser:

```
n8n:         http://localhost:5678
Agent Zero:  http://localhost:50080
ComfyUI:     http://localhost:8188
```

---

## 📂 Important Folders

```
ai-stack/
├── data/n8n/              ← Your n8n workflows
├── data/agent-zero/       ← Agent Zero data
└── shared/
    └── comfyui/
        ├── models/        ← Put AI models here
        ├── output/        ← Generated images here
        └── input/         ← Input images here
```

---

## 🎨 ComfyUI API Quick Reference

### Queue an Image
```bash
POST http://localhost:8188/prompt
```

### Check Status
```bash
GET http://localhost:8188/history/{prompt_id}
```

### Get Image
```bash
GET http://localhost:8188/view?filename={name}&type=output
```

---

## ⚡ Quick Commands

### Docker Commands
```bash
# See all running containers
docker ps

# Stop all containers
docker stop $(docker ps -q)

# Remove all containers
docker rm $(docker ps -aq)

# Clean up Docker
docker system prune -a
```

### Check if Services are Running
```bash
# Windows
curl http://localhost:5678/healthz
curl http://localhost:8188/system_stats

# Mac/Linux
curl http://localhost:5678/healthz
curl http://localhost:8188/system_stats
```

---

## 🔧 Common Fixes

| Problem | Solution |
|---------|----------|
| **Docker not running** | Open Docker Desktop, wait for whale icon 🐳 |
| **Port in use** | Run stop command, then start again |
| **Permission denied** | Windows: Run as Admin<br>Mac: `chmod +x start.sh` |
| **Can't connect** | Wait 2 minutes, check Docker is running |
| **Out of space** | Delete old files, run `docker system prune -a` |

---

## 📝 n8n Workflow Import

1. Open http://localhost:5678
2. Click **"Workflows"** in sidebar
3. Click **"Import from File"**
4. Select workflow JSON file
5. Click **"Save"**
6. Click **"Active"** toggle to enable

---

## 🎨 Adding Models to ComfyUI

1. Download model file (`.safetensors` or `.ckpt`)
2. Put in correct folder:
   - **Checkpoints:** `shared/comfyui/models/checkpoints/`
   - **LoRAs:** `shared/comfyui/models/loras/`
   - **VAE:** `shared/comfyui/models/vae/`
3. Restart ComfyUI (or refresh browser)

### Popular Model Sources
- Hugging Face: https://huggingface.co/models
- Civitai: https://civitai.com
- Stable Diffusion: https://huggingface.co/runwayml/stable-diffusion-v1-5

---

## 🆘 Emergency Reset

**⚠️ This deletes everything and starts fresh!**

### Windows
```powershell
.\start.ps1 -Stop
docker compose down -v
.\start.ps1
```

### Mac/Linux
```bash
./start.sh --stop
docker compose down -v
./start.sh
```

---

## 📊 System Check

Before starting, verify:

- [ ] Docker Desktop installed
- [ ] Docker Desktop running (whale icon visible)
- [ ] At least 10 GB free disk space
- [ ] Internet connection working
- [ ] In the `ai-stack` folder

---

## 🎓 Learning Resources

### n8n
- Docs: https://docs.n8n.io
- Community: https://community.n8n.io
- YouTube: Search "n8n tutorial"

### ComfyUI
- GitHub: https://github.com/comfyanonymous/ComfyUI
- Wiki: https://github.com/comfyanonymous/ComfyUI/wiki
- Reddit: r/comfyui

### Agent Zero
- GitHub: https://github.com/frdel/agent-zero
- Docs: Check GitHub README

---

## 💾 Backup Your Work

### Important Files to Backup
```
data/n8n/           ← Your workflows
shared/workflows/   ← Shared workflow files
.env                ← Your settings
```

### Quick Backup (Copy these folders)
```bash
# Windows
xcopy /E /I data backup\data
xcopy /E /I shared backup\shared

# Mac/Linux
cp -r data backup/data
cp -r shared backup/shared
```

---

## 🔐 Security Reminders

- ✅ Safe for local use (localhost only)
- ❌ Don't expose to internet without security
- ✅ Keep Docker Desktop updated
- ❌ Don't share your .env file
- ✅ Use strong passwords if enabling auth

---

## 📞 Help Resources

1. **QUICK-START.md** - 3 simple steps
2. **EASY-INSTALL.md** - Detailed guide
3. **TROUBLESHOOTING.md** - Fix problems
4. **README.md** - Full documentation
5. **SUMMARY.md** - Overview & learning path

---

## ✅ Success Indicators

You know it's working when:

- ✅ Whale icon 🐳 visible in taskbar/menu
- ✅ Terminal shows "🎉 AI Stack is running!"
- ✅ All three URLs open in browser
- ✅ n8n shows welcome screen
- ✅ ComfyUI shows node interface
- ✅ Agent Zero shows chat interface

---

**🎉 You're all set! Happy automating!**

---

*Print this page and keep it near your computer for quick reference!*
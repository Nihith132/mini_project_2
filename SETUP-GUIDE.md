# ✈️ Travel Itinerary Planner - Complete Setup Guide

This project is an AI-powered travel itinerary planner that runs on **localhost:8000** by default.

---

## 🚀 Quick Start (3 Methods)

### Method 1: Terminal Commands (Recommended)

**Default Browser:**
```bash
./start.sh
```

**Specific Browser:**
```bash
./start-chrome.sh    # Google Chrome
./start-safari.sh    # Safari
./start-firefox.sh   # Firefox
```

**Stop Servers:**
```bash
./stop.sh
```

### Method 2: VS Code Tasks (Built-in)

1. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. Type "Tasks: Run Task"
3. Select one of:
   - 🚀 Start Project (Default Browser)
   - 🌐 Start Project (Chrome)
   - 🦁 Start Project (Safari)
   - 🦊 Start Project (Firefox)
   - 🛑 Stop All Servers

**Or use keyboard shortcut:**
- Press `Cmd+Shift+B` (Mac) or `Ctrl+Shift+B` (Windows/Linux)
- This runs the default task (starts project with default browser)

### Method 3: Manual Start

```bash
# Terminal 1: Start Backend
npm start

# Terminal 2: Start Frontend
python3 -m http.server 8000

# Open browser to:
# http://localhost:8000/travel.html
```

---

## 📋 What Gets Started

When you run any start script:

1. ✅ **Backend Server** - Node.js/Express on port 3001
   - API endpoint: `http://localhost:3001/api/generate-itinerary`
   - Handles AI itinerary generation

2. ✅ **Frontend Server** - Python HTTP Server on port 8000
   - Website: `http://localhost:8000/travel.html`
   - Serves static HTML/CSS/JS files

3. ✅ **Browser** - Automatically opens to the correct URL

---

## 🌍 Browser Selection

Choose your preferred browser:

| Script | Browser | Command |
|--------|---------|---------|
| `start.sh` | System Default | Auto-opens default browser |
| `start-chrome.sh` | Google Chrome | Opens specifically in Chrome |
| `start-safari.sh` | Safari | Opens specifically in Safari |
| `start-firefox.sh` | Firefox | Opens specifically in Firefox |

---

## 🔧 Troubleshooting

### Problem: Port 8080 Error

**Cause:** You opened the HTML file directly (file:// protocol) instead of through a server.

**Solution:** Always use one of the start scripts:
```bash
./start.sh
```

### Problem: "Port Already in Use"

**Solution:**
```bash
./stop.sh
./start.sh
```

### Problem: "Permission Denied" on Scripts

**Solution:**
```bash
chmod +x *.sh
```

### Problem: Backend Not Responding

**Check if running:**
```bash
lsof -i :3001
```

**Restart:**
```bash
./stop.sh
npm install  # If first time
./start.sh
```

### Problem: Frontend Not Loading

**Check if running:**
```bash
lsof -i :8000
```

**Verify URL:** Make sure you're going to:
```
http://localhost:8000/travel.html
```
Not:
```
file:///Users/.../travel.html  ❌ WRONG
```

---

## 📁 Project Structure

```
mini_project/
├── start.sh              # Start with default browser
├── start-chrome.sh       # Start with Chrome
├── start-safari.sh       # Start with Safari
├── start-firefox.sh      # Start with Firefox
├── stop.sh               # Stop all servers
├── server.js             # Backend Node.js server
├── travel.html           # Frontend application
├── package.json          # Node dependencies
├── .env                  # API keys (create this!)
└── .vscode/
    └── tasks.json        # VS Code tasks
```

---

## 🔑 Environment Setup

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
LOCATIONIQ_API_KEY=your_locationiq_api_key_here
PORT=3001
```

Get API keys:
- **Gemini AI:** https://makersuite.google.com/app/apikey
- **LocationIQ:** https://locationiq.com/

---

## 🎯 Feature Overview

### Frontend (localhost:8000)
- ✅ Modern responsive UI with dark mode
- ✅ Date range picker with validation
- ✅ Multi-select interest chips
- ✅ Budget input (optional)
- ✅ Real-time itinerary generation
- ✅ PDF download functionality
- ✅ Clickable booking links

### Backend (localhost:3001)
- ✅ Google Gemini AI integration
- ✅ LocationIQ API for place suggestions
- ✅ Date-specific booking URL generation
- ✅ Modern itinerary formatting with emojis
- ✅ CORS enabled for local development

---

## 🎨 Using the Application

1. **Start the servers** (any method above)
2. **Enter destination** (e.g., "Paris", "Tokyo")
3. **Select travel dates** (start and end date)
4. **Optional: Enter budget** (in ₹)
5. **Select interests** (click multiple chips)
6. **Click "Generate Itinerary"**
7. **View your custom itinerary** with:
   - Day-by-day plans
   - Activity suggestions
   - Time blocks
   - Booking links for flights & hotels
8. **Download as PDF** for offline access

---

## 💡 Tips & Best Practices

### For Development
- Use `./start-chrome.sh` for debugging (Chrome DevTools)
- Keep terminals open to see server logs
- Check browser console for any errors

### For Testing
- Test with different dates/destinations
- Try various interest combinations
- Verify booking links open correctly
- Test PDF download in different browsers

### For Production
- Don't commit `.env` file
- Use environment variables for API keys
- Consider using a proper web server (nginx, Apache)

---

## 🛠️ VS Code Integration

### Tasks Available
1. **Build Task (Default)** - `Cmd+Shift+B`
   - Starts project with default browser

2. **Run Task** - `Cmd+Shift+P` → "Tasks: Run Task"
   - Choose specific browser
   - Stop servers
   - Start individual servers

### Recommended Extensions
- Live Server (for alternative frontend serving)
- REST Client (for API testing)
- ESLint (for code quality)

---

## 📊 Port Reference

| Service | Port | URL |
|---------|------|-----|
| Frontend | 8000 | http://localhost:8000/travel.html |
| Backend API | 3001 | http://localhost:3001/api/generate-itinerary |

**Why Port 8000?**
- Standard for Python HTTP server
- No conflicts with common dev tools
- Easy to remember
- Works with CORS for localhost

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| File not found | Use `./start.sh`, not direct file open |
| CORS error | Make sure backend is running on 3001 |
| API key error | Check `.env` file exists with valid keys |
| Port conflict | Run `./stop.sh` then restart |
| Script won't run | Run `chmod +x *.sh` |

---

## 📞 Support

Need help? Contact the team:
- **Nihith Reddy:** anihithreddy132@gmail.com
- **Rithwik Reddy:** rithwikreddy27@gmail.com
- **Aryan Sai:** aryansaienugula@gmail.com

---

## 🎉 Happy Traveling!

The project is now configured to run on **localhost:8000** by default with easy browser selection.

**Enjoy planning your perfect trip! ✈️🌍**

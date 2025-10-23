# 🚀 Travel Itinerary Planner - Startup Guide

## Quick Start

### Option 1: Default Browser
Run the project in your system's default browser:
```bash
./start.sh
```

### Option 2: Specific Browser

**Google Chrome:**
```bash
./start-chrome.sh
```

**Safari:**
```bash
./start-safari.sh
```

**Firefox:**
```bash
./start-firefox.sh
```

### Stop All Servers
```bash
./stop.sh
```

## What These Scripts Do

1. **Check if servers are already running** - Prevents duplicate processes
2. **Start Backend Server** - Node.js server on `http://localhost:3001`
3. **Start Frontend Server** - Python HTTP server on `http://localhost:8000`
4. **Open Browser** - Automatically opens `http://localhost:8000/travel.html`

## Server Information

- **Frontend URL:** http://localhost:8000/travel.html
- **Backend API:** http://localhost:3001/api/generate-itinerary
- **Frontend Port:** 8000 (Python HTTP Server)
- **Backend Port:** 3001 (Node.js/Express)

## Troubleshooting

### Port Already in Use
If you see a "port already in use" error, run:
```bash
./stop.sh
```
Then try starting again.

### Check Running Servers
```bash
# Check port 8000 (frontend)
lsof -i :8000

# Check port 3001 (backend)
lsof -i :3001
```

### Manual Server Start

**Backend Only:**
```bash
npm start
```

**Frontend Only:**
```bash
python3 -m http.server 8000
```

Then open: http://localhost:8000/travel.html

## Environment Variables

Make sure you have a `.env` file in the project root with:
```
GEMINI_API_KEY=your_gemini_api_key
LOCATIONIQ_API_KEY=your_locationiq_api_key
```

## Browser Compatibility

The project works best with modern browsers:
- ✅ Google Chrome (Recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Microsoft Edge

## Features

- 🤖 AI-powered itinerary generation using Google Gemini
- 📅 Date-specific travel planning
- 🎨 Modern, responsive UI with dark mode
- ✈️ Integrated flight and hotel booking links
- 💾 PDF download functionality
- 🌍 Multiple interest categories

## Support

For issues or questions, contact:
- Nihith Reddy: anihithreddy132@gmail.com
- Rithwik Reddy: rithwikreddy27@gmail.com
- Aryan Sai: aryansaienugula@gmail.com

---

**Happy Traveling! ✈️🌍**

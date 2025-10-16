#!/bin/bash

# Travel Itinerary Planner Startup Script (Firefox)
# This script starts both servers and opens in Firefox

echo "🚀 Starting Travel Itinerary Planner (Firefox)..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if backend is already running on port 3001
if lsof -Pi :3001 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${YELLOW}⚠️  Backend already running on port 3001${NC}"
else
    echo -e "${BLUE}📡 Starting backend server on port 3001...${NC}"
    npm start &
    BACKEND_PID=$!
    sleep 2
    echo -e "${GREEN}✅ Backend server started (PID: $BACKEND_PID)${NC}"
fi

echo ""

# Check if frontend is already running on port 8000
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${YELLOW}⚠️  Frontend already running on port 8000${NC}"
else
    echo -e "${BLUE}🌐 Starting frontend server on port 8000...${NC}"
    python3 -m http.server 8000 &
    FRONTEND_PID=$!
    sleep 1
    echo -e "${GREEN}✅ Frontend server started (PID: $FRONTEND_PID)${NC}"
fi

echo ""
echo -e "${GREEN}🎉 All servers are running!${NC}"
echo ""
echo "📋 Server URLs:"
echo "   Frontend: http://localhost:8000/travel.html"
echo "   Backend:  http://localhost:3001"
echo ""
echo "💡 Opening in Firefox in 2 seconds..."
sleep 2

# Open in Firefox
open -a "Firefox" http://localhost:8000/travel.html

echo ""
echo "To stop servers, run: ./stop.sh"

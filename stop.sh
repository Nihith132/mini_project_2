#!/bin/bash

# Stop all servers for Travel Itinerary Planner

echo "🛑 Stopping Travel Itinerary Planner servers..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Stop backend server (port 3001)
if lsof -Pi :3001 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${YELLOW}Stopping backend server on port 3001...${NC}"
    lsof -ti:3001 | xargs kill -9 2>/dev/null
    echo -e "${GREEN}✅ Backend server stopped${NC}"
else
    echo -e "${YELLOW}⚠️  No backend server running on port 3001${NC}"
fi

echo ""

# Stop frontend server (port 8000)
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${YELLOW}Stopping frontend server on port 8000...${NC}"
    lsof -ti:8000 | xargs kill -9 2>/dev/null
    echo -e "${GREEN}✅ Frontend server stopped${NC}"
else
    echo -e "${YELLOW}⚠️  No frontend server running on port 8000${NC}"
fi

echo ""
echo -e "${GREEN}🎉 All servers stopped!${NC}"

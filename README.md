# ✈️ Travel Itinerary Planner - AI-Powered Trip Planning

An intelligent travel itinerary generator powered by Google Gemini AI that creates personalized day-by-day travel plans with integrated booking links for flights and hotels.

![Travel Planner](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node-v18+-green)
![Python](https://img.shields.io/badge/Python-v3.8+-yellow)

## 🌟 Features

- 🤖 **AI-Powered Generation** - Uses Google Gemini AI for intelligent itinerary creation
- 📅 **Date-Specific Planning** - Select your exact travel dates for accurate planning
- 🎨 **Modern UI/UX** - Beautiful, responsive interface with dark mode support
- ✈️ **Integrated Booking Links** - Direct links to flight and hotel booking platforms
- 💰 **Budget-Aware** - Optional budget input for cost-conscious planning
- 🎯 **Interest-Based** - Choose from 16+ interest categories (Culture, Adventure, Cuisine, etc.)
- 📄 **PDF Export** - Download your itinerary as a professional PDF
- 🌍 **Place Suggestions** - LocationIQ API integration for accurate place recommendations
- 🎭 **Beautiful Formatting** - Emoji-rich, well-structured itineraries with visual separators

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Python 3.8+
- Google Gemini API Key
- LocationIQ API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nihith132/mini_project_2.git
   cd mini_project_2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   touch .env
   ```
   
   Add your API keys:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key
   LOCATIONIQ_API_KEY=your_locationiq_api_key
   PORT=3001
   ```

4. **Start the application:**
   ```bash
   # Default browser
   ./start.sh
   
   # Or specific browser
   ./start-chrome.sh    # Google Chrome
   ./start-safari.sh    # Safari
   ./start-firefox.sh   # Firefox
   ```

5. **Access the application:**
   ```
   http://localhost:8000/travel.html
   ```

## 📖 Usage

### Using Terminal

```bash
# Start with default browser
./start.sh

# Start with specific browser
./start-chrome.sh
./start-safari.sh
./start-firefox.sh

# Stop all servers
./stop.sh
```

### Using VS Code

- **Quick Start:** Press `Cmd+Shift+B` (Mac) or `Ctrl+Shift+B` (Windows/Linux)
- **Task Menu:** `Cmd+Shift+P` → "Tasks: Run Task" → Choose browser

### Creating an Itinerary

1. **Enter Destination** - e.g., "Paris", "Tokyo", "Bali"
2. **Select Travel Dates** - Choose start and end dates
3. **Set Budget (Optional)** - Enter your budget in ₹
4. **Select Interests** - Click multiple interest chips (Culture, Adventure, etc.)
5. **Generate** - Click "Generate Itinerary"
6. **View & Download** - Review your itinerary and download as PDF

## 🏗️ Project Structure

```
mini_project_2/
├── start.sh                # Start with default browser
├── start-chrome.sh         # Start with Chrome
├── start-safari.sh         # Start with Safari
├── start-firefox.sh        # Start with Firefox
├── stop.sh                 # Stop all servers
├── server.js               # Backend Node.js/Express server
├── travel.html             # Frontend application
├── package.json            # Node dependencies
├── .env                    # Environment variables (create this!)
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── SETUP-GUIDE.md          # Detailed setup instructions
├── README-STARTUP.md       # Quick startup guide
├── QUICK-REFERENCE.txt     # Command reference
└── .vscode/
    └── tasks.json          # VS Code task definitions
```

## 🔧 Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Google Gemini AI** - AI model for itinerary generation
- **LocationIQ API** - Place suggestions and geocoding
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Interactivity
- **Bootstrap 5.3.3** - UI framework
- **Font Awesome 6.4.0** - Icons
- **AOS Library** - Scroll animations
- **Google Fonts** - Typography (Poppins, Playfair Display)

### Deployment
- **Python HTTP Server** - Serves static files on port 8000
- **Node.js Server** - API backend on port 3001

## 🌐 API Endpoints

### Generate Itinerary
```http
POST /api/generate-itinerary
Content-Type: application/json

{
  "destination": "Paris",
  "days": 5,
  "interest": "Culture, Cuisine, History",
  "budget": 50000,
  "startDate": "2025-11-01",
  "endDate": "2025-11-06"
}
```

**Response:**
```json
{
  "itinerary": "Generated itinerary text with booking links..."
}
```

## 🎨 Features in Detail

### Interest Categories (16+)
- 🎭 Culture - Museums, galleries, theaters
- 🏔️ Adventure - Trekking, climbing, extreme sports
- 🍽️ Cuisine - Food tours, cooking classes
- 🧘 Relaxation - Spas, wellness centers
- 🏛️ History - Historical sites, monuments
- 🌳 Nature - Parks, gardens, wildlife
- 🛍️ Shopping - Markets, boutiques
- 🍸 Nightlife - Bars, clubs, entertainment
- 📸 Photography - Scenic spots, landmarks
- 🦁 Wildlife - Safaris, reserves
- 🏖️ Beach - Coastal activities
- 🕉️ Spiritual - Temples, meditation
- ⚽ Sports - Activities, stadiums
- 🎨 Art - Galleries, exhibitions
- 🎵 Music - Concerts, festivals
- 👨‍👩‍👧 Family - Family-friendly activities

### Booking Integration
The generated itinerary includes direct links to:

**Flights:**
- Google Flights
- Skyscanner
- MakeMyTrip

**Hotels:**
- Booking.com
- Agoda
- Airbnb
- OYO

All links are pre-filled with your destination and travel dates!

### Dark Mode
Toggle between light and dark themes with persistent localStorage storage.

## 📝 Documentation

- **[SETUP-GUIDE.md](SETUP-GUIDE.md)** - Comprehensive setup and troubleshooting
- **[README-STARTUP.md](README-STARTUP.md)** - Quick startup instructions
- **[QUICK-REFERENCE.txt](QUICK-REFERENCE.txt)** - Command cheat sheet

## 🐛 Troubleshooting

### Port 8080 Error
**Problem:** HTML file opens with an error  
**Solution:** Use `./start.sh` instead of opening the file directly

### Port Already in Use
**Problem:** "Address already in use" error  
**Solution:**
```bash
./stop.sh
./start.sh
```

### API Key Issues
**Problem:** API calls failing  
**Solution:** Verify `.env` file exists with valid API keys

### Permission Denied on Scripts
**Problem:** Cannot execute `.sh` files  
**Solution:**
```bash
chmod +x *.sh
```

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
# Google Gemini AI API Key
GEMINI_API_KEY=your_gemini_api_key_here

# LocationIQ API Key
LOCATIONIQ_API_KEY=your_locationiq_api_key_here

# Server Port (optional, defaults to 3001)
PORT=3001
```

### Getting API Keys

**Google Gemini:**
1. Visit https://makersuite.google.com/app/apikey
2. Create a new API key
3. Copy and paste into `.env`

**LocationIQ:**
1. Visit https://locationiq.com/
2. Sign up for free tier
3. Get API key from dashboard
4. Copy and paste into `.env`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Team

- **Nihith Reddy** - [anihithreddy132@gmail.com](mailto:anihithreddy132@gmail.com)
- **Rithwik Reddy** - [rithwikreddy27@gmail.com](mailto:rithwikreddy27@gmail.com)
- **Aryan Sai** - [aryansaienugula@gmail.com](mailto:aryansaienugula@gmail.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powerful language model capabilities
- LocationIQ for geocoding and place suggestions
- Bootstrap team for the excellent UI framework
- Font Awesome for beautiful icons
- All contributors and testers

## 📊 Stats

- **Lines of Code:** 2000+
- **Files:** 27
- **Languages:** JavaScript, HTML, CSS, Shell
- **Dependencies:** 10+ npm packages

## 🚀 Future Enhancements

- [ ] Multi-language support
- [ ] User authentication and saved itineraries
- [ ] Real-time price comparison
- [ ] Weather integration
- [ ] Collaborative trip planning
- [ ] Mobile app version
- [ ] Social sharing features
- [ ] Interactive map integration

## 📞 Support

For issues, questions, or suggestions:
- **Email:** anihithreddy132@gmail.com
- **GitHub Issues:** [Create an issue](https://github.com/Nihith132/mini_project_2/issues)

---

**Made with ❤️ by Nihith, Rithwik & Aryan**

⭐ **Star this repository if you find it helpful!** ⭐

---

### Quick Links

- [Setup Guide](SETUP-GUIDE.md)
- [Startup Instructions](README-STARTUP.md)
- [Quick Reference](QUICK-REFERENCE.txt)
- [Report Bug](https://github.com/Nihith132/mini_project_2/issues)
- [Request Feature](https://github.com/Nihith132/mini_project_2/issues)

---

**Happy Traveling! ✈️🌍**

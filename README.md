# 🌍 AI-Powered Travel Itinerary Planner

An intelligent travel planning application that generates personalized itineraries using AI, with user authentication, search history, and a beautiful dark/light mode interface.

## ✨ Features

### 🎯 Core Features
- **AI-Powered Itinerary Generation** - Uses Google Gemini AI to create personalized travel plans
- **Smart Place Search** - LocationIQ integration for finding attractions and destinations
- **Image Gallery** - SERP API integration for destination images
- **User Authentication** - Firebase authentication with email/password and Google sign-in
- **Search History** - MongoDB storage for user's travel searches and itineraries
- **User Dashboard** - Track searches, saved trips, and ratings
- **Dark/Light Mode** - Beautiful theme toggle with localStorage persistence
- **Responsive Design** - Mobile-friendly Bootstrap UI

### 🎨 UI Features
- Clean, modern interface with gradient backgrounds
- Avatar-only user profile in navbar (no cluttered text)
- Interactive trip cards with badges for interests, companions, and budget
- Real-time theme switching with toast notifications
- Back navigation to home screen from dashboard

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js** - Server framework
- **MongoDB Atlas** - Cloud database (TravelPlanner database)
- **Firebase Admin SDK** - Authentication
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **HTML5** + **CSS3** - Core structure and styling
- **JavaScript (ES6+)** - Client-side logic
- **Bootstrap 5.3** - UI framework
- **Font Awesome 6** - Icons
- **Google Fonts** - Typography (Poppins, Playfair Display)
- **Firebase SDK** - Client-side authentication

### APIs
- **Google Gemini AI** - Itinerary generation
- **LocationIQ** - Place search and geocoding
- **SERP API** - Google Images search
- **Firebase Auth** - User authentication

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Python 3** (for frontend server)
- **MongoDB Atlas account** (free tier available)
- **Firebase project** (free tier available)

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd "ai powered planner"
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and fill in your API keys:

```bash
# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/TravelPlanner?retryWrites=true&w=majority

# Session Secret (generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
SESSION_SECRET=your_generated_secret

# API Keys
GEMINI_API_KEY=your_gemini_api_key
LOCATIONIQ_API_KEY=your_locationiq_api_key
SERP_API_KEY=your_serp_api_key

# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:8000
```

### 4. Get API Keys

#### Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing
3. Go to Project Settings > General
4. Scroll to "Your apps" and click Web icon (</>)
5. Copy the configuration values to `.env`
6. Go to Project Settings > Service Accounts
7. Click "Generate new private key"
8. Save as `backend/firebase-service-account.json`

#### MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click "Connect" > "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password
6. Add `/TravelPlanner` before the `?` in the connection string

#### Gemini AI API
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Copy to `.env`

#### LocationIQ API
1. Go to [LocationIQ](https://locationiq.com/)
2. Sign up for free account
3. Copy API key from dashboard

#### SERP API
1. Go to [SerpAPI](https://serpapi.com/)
2. Sign up for free account
3. Copy API key from dashboard

### 5. Run the Application

#### Option 1: Use Startup Scripts (Recommended)

**On macOS/Linux:**
```bash
chmod +x start.sh stop.sh
./start.sh
```

**On Windows:**
```bash
start.bat
```

#### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
python3 -m http.server 8000
```

### 6. Access the Application

- **Home Page**: http://localhost:8000/travel.html
- **Login**: http://localhost:8000/login.html
- **Signup**: http://localhost:8000/signup.html
- **Dashboard**: http://localhost:8000/dashboard.html
- **Backend API**: http://localhost:3001

## 🧪 Testing APIs

Test all APIs with:

```bash
node test_all_apis.js
```

This will verify:
- ✅ LocationIQ API connectivity
- ✅ Gemini AI API functionality
- ✅ SERP API image search

## 📁 Project Structure

```
ai powered planner/
├── backend/
│   ├── auth/
│   │   ├── auth-middleware.js    # JWT authentication middleware
│   │   └── firebase-config.js    # Firebase Admin SDK setup
│   ├── models/
│   │   ├── SearchHistory.js      # Search history schema
│   │   └── User.js               # User model
│   ├── routes/
│   │   ├── auth.js               # Authentication routes
│   │   ├── gallery.js            # Image search routes (SERP API)
│   │   └── user.js               # User data routes
│   ├── server.js                 # Main Express server
│   └── package.json              # Backend dependencies
├── frontend/
│   ├── travel.html               # Main travel planner page
│   ├── dashboard.html            # User dashboard
│   ├── login.html                # Login page
│   ├── signup.html               # Signup page
│   └── forgot-password.html      # Password reset page
├── .env                          # Environment variables (not in repo)
├── .env.example                  # Environment template
├── .gitignore                    # Git ignore rules
├── start.sh                      # macOS/Linux startup script
├── start.bat                     # Windows startup script
├── stop.sh                       # macOS/Linux stop script
├── stop.bat                      # Windows stop script
└── test_all_apis.js              # API testing script
```

## 🎨 UI Features

### Navigation Bar
- **Avatar-only user profile** - Clean design without cluttered text
- **Dropdown menu** - Dashboard and Logout options
- **Theme toggle** - Switch between light and dark modes
- **Back button** (Dashboard) - Quick return to home

### Dashboard
- **Statistics Cards** - Total searches, itineraries, saved trips
- **Recent Searches** - View your latest travel plans
- **Saved Trips** - Access favorite itineraries
- **Trip Actions** - View, rate, and delete trips
- **Responsive Layout** - Works on all screen sizes

### Dark Mode
- Persistent theme preference (localStorage)
- Smooth transitions
- Toast notifications
- Optimized colors for readability

## 🔒 Security Features

- **Environment Variables** - Sensitive data in `.env` (gitignored)
- **Firebase Authentication** - Secure user management
- **JWT Tokens** - Protected API endpoints
- **CORS Configuration** - Controlled cross-origin access
- **Password Hashing** - Handled by Firebase
- **Service Account Protection** - Firebase admin credentials gitignored

## 🚀 Deployment

### Backend Deployment (e.g., Heroku, Railway, Render)

1. Push to GitHub
2. Connect to deployment platform
3. Add environment variables
4. Deploy

### Frontend Deployment (e.g., Netlify, Vercel)

1. Deploy `frontend` folder
2. Update `FRONTEND_URL` in backend `.env`
3. Update API URLs in frontend HTML files

## 📝 To-Do / Future Enhancements

- [ ] Add trip export (PDF, Email)
- [ ] Social sharing features
- [ ] Collaborative trip planning
- [ ] Budget tracking
- [ ] Weather integration
- [ ] Flight/hotel booking integration
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Push notifications

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Your Name - [@yourhandle](https://twitter.com/yourhandle)

Project Link: [https://github.com/yourusername/ai-powered-travel-planner](https://github.com/yourusername/ai-powered-travel-planner)

## 🙏 Acknowledgments

- [Google Gemini AI](https://deepmind.google/technologies/gemini/) - AI-powered itinerary generation
- [LocationIQ](https://locationiq.com/) - Place search and geocoding
- [SerpAPI](https://serpapi.com/) - Image search
- [Firebase](https://firebase.google.com/) - Authentication
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Database
- [Bootstrap](https://getbootstrap.com/) - UI Framework

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Email: your.email@example.com

---

**Happy Traveling! 🌍✈️**

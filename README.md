# 🏠 Real Estate Application

A modern, responsive real estate web application built with React and Firebase. This application allows users to browse properties, create accounts, and manage their real estate needs with a beautiful and intuitive interface.

## 🌟 Features

- **User Authentication**: Sign up and login with email/password or Google OAuth
- **Property Listings**: Browse featured properties, rental properties, and property details
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean and modern interface with smooth animations
- **Firebase Integration**: Real-time database and authentication
- **Toast Notifications**: User-friendly notifications for actions

## 🚀 Live Demo

**Production URL:** [https://real-estate-application-p0zvd1bsf-gyandeeps-projects-c1e61905.vercel.app](https://real-estate-application-p0zvd1bsf-gyandeeps-projects-c1e61905.vercel.app)

## 🛠️ Technologies Used

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and development server
- **React Router DOM 7.8.2** - Client-side routing
- **CSS Modules** - Scoped styling for components

### Backend & Services
- **Firebase 12.2.1** - Authentication and database
- **Lucide React 0.542.0** - Beautiful icons
- **React Toastify 11.0.5** - Toast notifications

### Development Tools
- **ESLint 9.33.0** - Code linting
- **Vite Plugin React 5.0.0** - React integration for Vite

## 📁 Project Structure

```
real-estate-application/
├── public/
│   ├── icons/          # Social login icons
│   └── vite.svg        # Vite logo
├── src/
│   ├── assets/         # Static assets (images, icons)
│   │   ├── icons/      # UI icons
│   │   └── image/      # Property images
│   ├── components/     # Reusable React components
│   │   ├── auth/       # Authentication components
│   │   │   ├── LoginForm.jsx
│   │   │   ├── SignupForm.jsx
│   │   │   └── *.module.css
│   │   ├── home/       # Home page components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturedProperties.jsx
│   │   │   └── *.module.css
│   │   ├── layout/     # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── properties/ # Property-related components
│   ├── context/        # React context providers
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── PropertyListing.jsx
│   ├── services/       # External service integrations
│   │   └── firebase.js # Firebase configuration
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── vercel.json         # Vercel deployment configuration
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Firebase account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password and Google providers
   - Copy your Firebase config to `src/services/firebase.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🔧 Configuration

### Firebase Setup

Update `src/services/firebase.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### Environment Variables

For production deployment, set up the following environment variables in your deployment platform:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is configured for deployment on Vercel with the following features:

- **SPA Routing**: All routes are handled by React Router
- **Static Asset Optimization**: Images and icons are optimized
- **Build Configuration**: Automatic build with Vite
- **Environment Variables**: Secure configuration management

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Gyandeep** - *Initial work*


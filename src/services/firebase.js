// services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiafMbMdRY5wzbXLAiUBg_rAIa2NCGS9k",
  authDomain: "real-estate-web-applicat-6bfe4.firebaseapp.com",
  projectId: "real-estate-web-applicat-6bfe4",
  storageBucket: "real-estate-web-applicat-6bfe4.appspot.com", // ✅ fixed
  messagingSenderId: "806927091928",
  appId: "1:806927091928:web:2c277ca8d2ee78db8defad",
  measurementId: "G-BV6PVC3XG4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

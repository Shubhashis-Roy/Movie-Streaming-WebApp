import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCQEWS5eLTfqFiyvEUv9hQRiSa2UceNr-Y",
  authDomain: "react-netflix-clone-1b91d.firebaseapp.com",
  projectId: "react-netflix-clone-1b91d",
  storageBucket: "react-netflix-clone-1b91d.appspot.com",
  messagingSenderId: "341281862514",
  appId: "1:341281862514:web:1c9a82092d1db8907d63eb",
  measurementId: "G-T84SVGFZRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
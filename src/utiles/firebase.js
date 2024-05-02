// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPnVAiGSVlKbEWKN1llIUbpfw3EVLMd-A",
  authDomain: "netflixgpt-63eb4.firebaseapp.com",
  projectId: "netflixgpt-63eb4",
  storageBucket: "netflixgpt-63eb4.appspot.com",
  messagingSenderId: "869640171669",
  appId: "1:869640171669:web:ce2d83d3ab270213a6eb9c",
  measurementId: "G-3NZ8CRB8VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
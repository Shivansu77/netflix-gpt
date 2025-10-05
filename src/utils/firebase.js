import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe5rrIgtxBnoiO4M9wdgUWpx13bEJ0p4E",
  authDomain: "netflixgpt-56e87.firebaseapp.com",
  projectId: "netflixgpt-56e87",
  storageBucket: "netflixgpt-56e87.firebasestorage.app",
  messagingSenderId: "124195524891",
  appId: "1:124195524891:web:03a093d1ff9c514cc383be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

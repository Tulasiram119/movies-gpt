// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYWofMD1FhTxW6YIYnL9ABDwlrkx6-H3U",
  authDomain: "netflixgpt-cad6d.firebaseapp.com",
  projectId: "netflixgpt-cad6d",
  storageBucket: "netflixgpt-cad6d.appspot.com",
  messagingSenderId: "1090022091797",
  appId: "1:1090022091797:web:d4f343e677591e1d30b21c",
  measurementId: "G-R31Z0W9PQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

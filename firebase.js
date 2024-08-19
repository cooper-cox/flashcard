// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzLKig6OqTsLhcwfo4cQlSMCbNuYx2hWo",
  authDomain: "ai-flashcards-59870.firebaseapp.com",
  projectId: "ai-flashcards-59870",
  storageBucket: "ai-flashcards-59870.appspot.com",
  messagingSenderId: "21401540188",
  appId: "1:21401540188:web:26ebe7e2c3e5ae65543899",
  measurementId: "G-FZMWX3D44G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export {db}
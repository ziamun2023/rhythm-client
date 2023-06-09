// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAujl4dJFYUyg7WgAQNALHnRR1iTrNLz9U",
  authDomain: "rhythm-maniac.firebaseapp.com",
  projectId: "rhythm-maniac",
  storageBucket: "rhythm-maniac.appspot.com",
  messagingSenderId: "70195733609",
  appId: "1:70195733609:web:c6f8266a62285048a6eef8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
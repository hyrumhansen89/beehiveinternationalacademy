// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj0-6yXGh0EtWUa-EPkx5vPMaxyBcIHKY",
  authDomain: "beehive-login-app.firebaseapp.com",
  projectId: "beehive-login-app",
  storageBucket: "beehive-login-app.firebasestorage.app",
  messagingSenderId: "826718487574",
  appId: "1:826718487574:web:392c4ca3ac68e8ac472137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
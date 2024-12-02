// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSVuTLEvs4AEXTnj4hgNP3gxvyzDGMhn0",
  authDomain: "ekolojikkredi-cc80d.firebaseapp.com",
  projectId: "ekolojikkredi-cc80d",
  storageBucket: "ekolojikkredi-cc80d.firebasestorage.app",
  messagingSenderId: "730590588708",
  appId: "1:730590588708:web:6da5a1de9b5be60a534db1",
  measurementId: "G-08R9MM51MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, getDocs, query, where };

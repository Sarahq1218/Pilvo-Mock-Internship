
import "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI8yLGKzvZfmIj_Peseqh2QpN4XWULoQA",
  authDomain: "pilvo-internship.firebaseapp.com",
  databaseURL: "https://pilvo-internship-default-rtdb.firebaseio.com",
  projectId: "pilvo-internship",
  storageBucket: "pilvo-internship.appspot.com",
  messagingSenderId: "336004691440",
  appId: "1:336004691440:web:1956a0b28d6c81db761935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }
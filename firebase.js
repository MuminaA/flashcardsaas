// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, writeBatch} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "flashcardsaas-ef597.firebaseapp.com",
  projectId: "flashcardsaas-ef597",
  storageBucket: "flashcardsaas-ef597.appspot.com",
  messagingSenderId: "838212505030",
  appId: "1:838212505030:web:53d8a04f78b84662b636c7",
  measurementId: "G-NCYHXBWGZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmOmGd8lXj-F8rNXY8n-AchZxw5sC2BoE",
  authDomain: "reactapp-c3dad.firebaseapp.com",
  projectId: "reactapp-c3dad",
  storageBucket: "reactapp-c3dad.appspot.com",
  messagingSenderId: "652846412710",
  appId: "1:652846412710:web:ffaeceeed149c14d4e9567",
  measurementId: "G-9PP7TPXKM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
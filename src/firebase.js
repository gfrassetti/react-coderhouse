// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvmMDWlonuJIlVoMm3Pw0_Z1NFGjGG0VQ",
  authDomain: "react-coderhouse-8959d.firebaseapp.com",
  projectId: "react-coderhouse-8959d",
  storageBucket: "react-coderhouse-8959d.appspot.com",
  messagingSenderId: "294075189357",
  appId: "1:294075189357:web:3aab759f2587e2b9bb1764",
  measurementId: "G-3XV51BQJJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;







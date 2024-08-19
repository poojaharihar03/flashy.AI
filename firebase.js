// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_DOMAIN_KEY,
  projectId: process.env.FIREBASE_PROJ_ID_KEY,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET_KEY,
  messagingSenderId: process.env.FIREBASE_MESSAGE_ID_KEY,
  appId: process.env.FIREBASE_APP_ID_KEY,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID_KEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export {db}
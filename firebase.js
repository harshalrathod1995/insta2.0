// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLv9gQZJZBTgUHNMpJLLOXt1jLNXNAyaM",
  authDomain: "insta-2-0-b0149.firebaseapp.com",
  projectId: "insta-2-0-b0149",
  storageBucket: "insta-2-0-b0149.appspot.com",
  messagingSenderId: "753217433546",
  appId: "1:753217433546:web:dfe474070de0f7c09c6933",
  measurementId: "G-ZT6BXWLGSS",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

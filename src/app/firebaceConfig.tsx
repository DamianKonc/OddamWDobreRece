// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKF3UnXjO0gsUn8QrnUVKgW5o6qfP7GpI",
  authDomain: "oddamwdobrerece-ac87a.firebaseapp.com",
  projectId: "oddamwdobrerece-ac87a",
  storageBucket: "oddamwdobrerece-ac87a.appspot.com",
  messagingSenderId: "593642615115",
  appId: "1:593642615115:web:9faef49b193866562438ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

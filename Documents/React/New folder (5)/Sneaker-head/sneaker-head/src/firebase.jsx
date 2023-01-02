// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVajyqB0sIm6VptCKn5_98lBwiMwk30XM",
  authDomain: "sneakheads-f249e.firebaseapp.com",
  projectId: "sneakheads-f249e",
  storageBucket: "sneakheads-f249e.appspot.com",
  messagingSenderId: "206190227922",
  appId: "1:206190227922:web:c93396a962cc047847980b",
  measurementId: "G-C3QQJ6ZHGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
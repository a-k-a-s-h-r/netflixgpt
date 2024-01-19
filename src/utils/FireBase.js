// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4QBVLVC7-gvtGYwcSdhizYDLth_IAKCw",
  authDomain: "netflixgpt-1501.firebaseapp.com",
  projectId: "netflixgpt-1501",
  storageBucket: "netflixgpt-1501.appspot.com",
  messagingSenderId: "777187858854",
  appId: "1:777187858854:web:35c7fdc81ad8e07bb1d767",
  measurementId: "G-2DGTYTD4Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
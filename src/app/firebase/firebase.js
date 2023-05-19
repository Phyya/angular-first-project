// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAymlwR0Xh9XFJS8Vx6A7uJ8C3_hJwbtzA",
  authDomain: "savestar-messaging.firebaseapp.com",
  projectId: "savestar-messaging",
  storageBucket: "savestar-messaging.appspot.com",
  messagingSenderId: "941006949734",
  appId: "1:941006949734:web:47ca5f3f060c0d44edcca7",
  measurementId: "G-B6EJCEY2WD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

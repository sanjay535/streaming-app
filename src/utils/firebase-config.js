// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASWfLOtf2kyQgonNUSwm9NQHr874ZAw30",
  authDomain: "streaming-app-93d64.firebaseapp.com",
  projectId: "streaming-app-93d64",
  storageBucket: "streaming-app-93d64.appspot.com",
  messagingSenderId: "315030015631",
  appId: "1:315030015631:web:6e3547ba4ba5a8d7d5aafa",
  measurementId: "G-K10J6PWL76"
};

const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
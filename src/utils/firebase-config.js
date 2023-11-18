// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLcmtEPrPVKNHtwKDBHM61WejfIOMIvKI",
  authDomain: "kyc-project-8d24c.firebaseapp.com",
  databaseURL: "https://kyc-project-8d24c-default-rtdb.firebaseio.com",
  projectId: "kyc-project-8d24c",
  storageBucket: "kyc-project-8d24c.appspot.com",
  messagingSenderId: "262328744000",
  appId: "1:262328744000:web:cd61ff6d9e3e4f5ce547a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
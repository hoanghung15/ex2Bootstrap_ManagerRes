// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ql3LoP5SGw1iD21KFcXK5c_rncrkn4k",
  authDomain: "ex2bootstrap-d216c.firebaseapp.com",
  projectId: "ex2bootstrap-d216c",
  storageBucket: "ex2bootstrap-d216c.appspot.com",
  messagingSenderId: "868062264125",
  appId: "1:868062264125:web:2747c489c62baf099ca354",
  measurementId: "G-KZQC9G0C36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
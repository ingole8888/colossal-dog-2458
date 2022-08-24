// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBScn_rE9lPQdVly9GnT9aUfAwTtL3BUiw",
  authDomain: "react-authentication-3820e.firebaseapp.com",
  projectId: "react-authentication-3820e",
  storageBucket: "react-authentication-3820e.appspot.com",
  messagingSenderId: "148764053067",
  appId: "1:148764053067:web:084ef4ac5c5ee0ce6f87ce",
  measurementId: "G-SJDRYC1Y1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;
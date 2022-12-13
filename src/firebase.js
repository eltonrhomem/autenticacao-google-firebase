// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZRPmm549K1d0r-8LQUPc7eGPmDi1-TEg",
  authDomain: "autenticacao-cbd5e.firebaseapp.com",
  projectId: "autenticacao-cbd5e",
  storageBucket: "autenticacao-cbd5e.appspot.com",
  messagingSenderId: "832446356767",
  appId: "1:832446356767:web:c1e8e70d0a0a913819642a",
  measurementId: "G-GKSRM3WM9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDBNaE9AjZAPwCHi5gqzIDc0FCUhE1c3k",
  authDomain: "employee-managemnet-app.firebaseapp.com",
  projectId: "employee-managemnet-app",
  storageBucket: "employee-managemnet-app.appspot.com",
  messagingSenderId: "462531045149",
  appId: "1:462531045149:web:71a569cd768bf3ee89e3f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
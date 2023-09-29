// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG1vcJbZhCNn9WaKUjs-r9JvYiSwvDya4",
  authDomain: "dev-firebase-login.firebaseapp.com",
  projectId: "dev-firebase-login",
  storageBucket: "dev-firebase-login.appspot.com",
  messagingSenderId: "713940385427",
  appId: "1:713940385427:web:59d46ab879c46ea7305766",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

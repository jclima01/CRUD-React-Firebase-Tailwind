// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOhokYE6mzcgN-ImlXKu9Pgp89SvbMLt8",
  authDomain: "crud-react-firebase-112a0.firebaseapp.com",
  projectId: "crud-react-firebase-112a0",
  storageBucket: "crud-react-firebase-112a0.appspot.com",
  messagingSenderId: "523201905246",
  appId: "1:523201905246:web:55d7cd88d5770c44956acf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
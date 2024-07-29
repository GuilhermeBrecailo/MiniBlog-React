// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG2KzJAZJfO40S8tJ4okKbXFZsJ_OrTrc",
  authDomain: "miniblog-11890.firebaseapp.com",
  projectId: "miniblog-11890",
  storageBucket: "miniblog-11890.appspot.com",
  messagingSenderId: "537472248529",
  appId: "1:537472248529:web:7eb9c580ca300bdc6cb3f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };

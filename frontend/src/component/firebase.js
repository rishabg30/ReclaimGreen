import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

//To initialize firebase in react app
const app = firebase.initializeApp({
  apiKey: "AIzaSyAHlbZYMvKH7AKgzOwCu8FmT6jY1vRG_0s",
  authDomain: "cfemission.firebaseapp.com",
  projectId: "cfemission",
  storageBucket: "cfemission.appspot.com",
  messagingSenderId: "80388017798",
  appId: "1:80388017798:web:b4d98732fd0f6426ff8b07",
  measurementId: "G-PVEC6V8MGW"
});

const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default auth;

import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKalbsumLmWjihIys4ch5GRu4N0eBnB7M",
  authDomain: "disney-5c3af.firebaseapp.com",
  projectId: "disney-5c3af",
  storageBucket: "disney-5c3af.appspot.com",
  messagingSenderId: "640344933786",
  appId: "1:640344933786:web:d6d702955791aa92422623",
  measurementId: "G-5PY04ZCXE0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
export { getAuth, signInWithPopup, provider, GoogleAuthProvider };
export default db;

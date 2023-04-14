// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


{/*const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export {auth, db};*/}

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = getFirestore(app);

export {  auth, db };

// Initialize Firebase
{/*const app = initializeApp(firebaseConfig);

const auth = app.auth()

export {auth};*/}
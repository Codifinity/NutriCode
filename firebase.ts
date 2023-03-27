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
  apiKey: "AIzaSyD6m3U3QUZMy3kWKOgjUaiMN2Qj5ZE7J4c",
  authDomain: "fir-auth-9a259.firebaseapp.com",
  projectId: "fir-auth-9a259",
  storageBucket: "fir-auth-9a259.appspot.com",
  messagingSenderId: "68322339636",
  appId: "1:68322339636:web:85082ef168f17f5f62d361"
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
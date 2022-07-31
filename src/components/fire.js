import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXN6RzuEczoAb4qvrkl9rKJEJh_mRjFXc",
  authDomain: "login-e0f6d.firebaseapp.com",
  projectId: "login-e0f6d",
  storageBucket: "login-e0f6d.appspot.com",
  messagingSenderId: "1049329687345",
  appId: "1:1049329687345:web:9774c0236e143bfb29ee10"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
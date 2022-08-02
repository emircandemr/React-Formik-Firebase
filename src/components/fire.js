import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXN6RzuEczoAb4qvrkl9rKJEJh_mRjFXc",
  authDomain: "login-e0f6d.firebaseapp.com",
  projectId: "login-e0f6d",
  storageBucket: "login-e0f6d.appspot.com",
  messagingSenderId: "1049329687345",
  appId: "1:1049329687345:web:9774c0236e143bfb29ee10"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export const registerHandler = async (email , password) => {

  const {user} = await createUserWithEmailAndPassword(auth,email,password)
  return user
}

export const login = async (email , password) => {

  const {user} = await signInWithEmailAndPassword(auth,email,password)
  return user
}

export const logOut = async () => {

  await signOut(auth)
  return true
}

export default firebaseApp;
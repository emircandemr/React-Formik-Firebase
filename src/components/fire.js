import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from 'react-hot-toast';


const firebaseConfig = {
  apiKey: "AIzaSyDXN6RzuEczoAb4qvrkl9rKJEJh_mRjFXc",
  authDomain: "login-e0f6d.firebaseapp.com",
  projectId: "login-e0f6d",
  storageBucket: "login-e0f6d.appspot.com",
  messagingSenderId: "1049329687345",
  appId: "1:1049329687345:web:9774c0236e143bfb29ee10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const registerHandler = async (email , password) => {
  try{
    const {user} = await createUserWithEmailAndPassword(auth,email,password)
    toast.success("Kayıt Başarılı")

    return user
  }
  catch(error){
    toast.error(error.message)
  }
}

export const loginHandler = async (email , password) => {
  try{
    const {user} = await signInWithEmailAndPassword(auth,email,password)
    toast.success("Giriş Başarılı")
    return user
  }
  catch(error){
    toast.error(error.message)
  }
}

export const logOut = async () => {

  await signOut(auth)
  return true
}

export default app;
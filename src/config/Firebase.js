import { initializeApp, } from "firebase/app";
import { createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig)
export { app, createUserWithEmailAndPassword };
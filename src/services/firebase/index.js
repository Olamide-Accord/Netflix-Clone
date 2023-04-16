import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATOVZkdENHgFmoFUPCa0agM6DiNnfSqZY",
  authDomain: "netflix-6e492.firebaseapp.com",
  projectId: "netflix-6e492",
  storageBucket: "netflix-6e492.appspot.com",
  messagingSenderId: "850499911527",
  appId: "1:850499911527:web:bf7dcebee7cc7e3721b9c2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signupAuth = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const loginAuth = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const authState = (callback) => onAuthStateChanged(auth, callback);

export default app;
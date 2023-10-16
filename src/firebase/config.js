import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, updateDoc } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBhsH82J0yVxsbcP-vKgNj_S-2Murl8ypE",
  authDomain: "journal-app-cd7b6.firebaseapp.com",
  projectId: "journal-app-cd7b6",
  storageBucket: "journal-app-cd7b6.appspot.com",
  messagingSenderId: "187441030054",
  appId: "1:187441030054:web:f3531f2064c0a7a2296567",
};

export const fireBaseApp = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(fireBaseApp);
export const fireBaseDB = getFirestore(fireBaseApp);

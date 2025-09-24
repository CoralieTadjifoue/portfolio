import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK_dclzPJh04fWuZ-zLcK5y3NPB3Djl_E",
  authDomain: "portfolio-c2668.firebaseapp.com",
  projectId: "portfolio-c2668",
  storageBucket: "portfolio-c2668.firebasestorage.app",
  messagingSenderId: "155404682525",
  appId: "1:155404682525:web:9ce4222cf1beec93598df4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
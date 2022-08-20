
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDgv9hmNl5stJXULBUyGfDK4R4Sa64jHdQ",
  authDomain: "quillcats-technology.firebaseapp.com",
  projectId: "quillcats-technology",
  storageBucket: "quillcats-technology.appspot.com",
  messagingSenderId: "889734915988",
  appId: "1:889734915988:web:520811ee6d7973f266d181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const baseDato =getFirestore(app)
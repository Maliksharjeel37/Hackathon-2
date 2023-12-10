
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket:process.env.STORAGEBUKET,
  messagingSenderId:process.env. MESSAGINGSENDERID,
  appId:process.env. APPID
};


const app = initializeApp(firebaseConfig);
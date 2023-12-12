import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjHgdbUR9j1blI7ZjVmumFpTy6fJB0R0g",
  authDomain:"hackthon2-71051.firebaseapp.com",
  projectId:"hackthon2-71051",
  storageBucket: "hackthon2-71051.appspot.com",
  messagingSenderId: "1071956811391",
  appId: "1:1071956811391:web:607bb367ab208fe041a94a"
};




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

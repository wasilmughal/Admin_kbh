
import { initializeApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0OWIUOXmXtdE0Tu7a67NpCCDFOtmfYaw",
  authDomain: "my-work-5a950.firebaseapp.com",
  databaseURL: "https://my-work-5a950-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-work-5a950",
  storageBucket: "my-work-5a950.appspot.com",
  messagingSenderId: "877585048373",
  appId: "1:877585048373:web:43867e7fa92f3d5691a27c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
export {auth}
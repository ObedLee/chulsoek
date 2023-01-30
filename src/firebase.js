// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVl3nmKOybizDijMCgMgy5OBX8E_Hg_IU",
    authDomain: "cedar-bot-311910.firebaseapp.com",
    databaseURL: "https://cedar-bot-311910-default-rtdb.firebaseio.com",
    projectId: "cedar-bot-311910",
    storageBucket: "cedar-bot-311910.appspot.com",
    messagingSenderId: "494500124912",
    appId: "1:494500124912:web:e6afb85566b3c8fe458a35",
    measurementId: "G-ZSZDHKQ51D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app




import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCM4fmIYtcSx3MWcHWcWxwQivatRf9W-VU",
    authDomain: "office-cert-valid.firebaseapp.com",
    projectId: "office-cert-valid",
    storageBucket: "office-cert-valid.firebasestorage.app",
    messagingSenderId: "729876927881",
    appId: "1:729876927881:web:c4c7cbd9acb12fe667fd58"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
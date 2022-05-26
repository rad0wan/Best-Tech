// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyBJqdQR3Hd5OEniATbxk6vhZ-ZW_B8GMOM",
    authDomain: "best-tech0.firebaseapp.com",
    projectId: "best-tech0",
    storageBucket: "best-tech0.appspot.com",
    messagingSenderId: "1087690238587",
    appId: "1:1087690238587:web:04dfcfce773b4a8f5750de"
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;


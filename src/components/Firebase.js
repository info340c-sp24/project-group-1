import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwDPYX6VanhkbMMVe-J4lrrRwaNqKtpUw",
    authDomain: "info-340---iplanner.firebaseapp.com",
    projectId: "info-340---iplanner",
    storageBucket: "info-340---iplanner.appspot.com",
    messagingSenderId: "242408384941",
    appId: "1:242408384941:web:301974f79d99b179385924",
    measurementId: "G-8F65CPR8Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

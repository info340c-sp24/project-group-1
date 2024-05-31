// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export default app;
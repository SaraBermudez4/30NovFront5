// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVhq6fEeGGmo7ByT-EtwNMMmQexw4klow",
    authDomain: "proyectofrontend5.firebaseapp.com",
    projectId: "proyectofrontend5",
    storageBucket: "proyectofrontend5.appspot.com",
    messagingSenderId: "148001397018",
    appId: "1:148001397018:web:f9732b06cfc9c6fb43f4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()

export {
    app,
    google
}
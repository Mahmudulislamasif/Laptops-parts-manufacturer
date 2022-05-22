// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcUFVh5GKaXBAF9RA5pIulgPD4IjwYi20",
  authDomain: "final-hero-project.firebaseapp.com",
  projectId: "final-hero-project",
  storageBucket: "final-hero-project.appspot.com",
  messagingSenderId: "884177721890",
  appId: "1:884177721890:web:c787bddcc8c5d48854087b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
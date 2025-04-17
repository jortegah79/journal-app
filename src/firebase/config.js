// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMGN1YDe3nFuFxtUBU2q2BBqv54H18XqE",
    authDomain: "react-cursos-6ef0a.firebaseapp.com",
    projectId: "react-cursos-6ef0a",
    storageBucket: "react-cursos-6ef0a.firebasestorage.app",
    messagingSenderId: "917204329126",
    appId: "1:917204329126:web:227876891973fe26610a67"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp)

export const firebaseDB = getFirestore(firebaseApp);
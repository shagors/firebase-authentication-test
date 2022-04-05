// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqhxAwavNrBDDOAeDjNndlGF2BLfEl_iY",
    authDomain: "fir-authentication-test-ca430.firebaseapp.com",
    projectId: "fir-authentication-test-ca430",
    storageBucket: "fir-authentication-test-ca430.appspot.com",
    messagingSenderId: "654475203804",
    appId: "1:654475203804:web:8adc0c641af7eb49621019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
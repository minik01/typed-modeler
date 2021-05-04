import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyClFun3oixBFgZzDqhhhbqTbiWyE47FecQ",
    authDomain: "typed-modeler.firebaseapp.com",
    projectId: "typed-modeler",
    storageBucket: "typed-modeler.appspot.com",
    messagingSenderId: "546376391143",
    appId: "1:546376391143:web:295ffddbff10e75375c542",
    measurementId: "G-8SXTLFQMBX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();

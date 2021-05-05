import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVNs6kkE2AmDCNqpd50yi19fEKxp4eoNk",
    authDomain: "typed-modeler-2.firebaseapp.com",
    databaseURL: "https://typed-modeler-2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "typed-modeler-2",
    storageBucket: "typed-modeler-2.appspot.com",
    messagingSenderId: "322650688197",
    appId: "1:322650688197:web:510d8f88d7f9a42aa93eac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();

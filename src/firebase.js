import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAogMBaLG4pVMDpy6x4c0u3czUQax4ZTwY",
    authDomain: "disneyplus-clone-8b014.firebaseapp.com",
    projectId: "disneyplus-clone-8b014",
    storageBucket: "disneyplus-clone-8b014.appspot.com",
    messagingSenderId: "648397336040",
    appId: "1:648397336040:web:e17e31c7943d8f6344885d",
    measurementId: "G-94T7HRLD4N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
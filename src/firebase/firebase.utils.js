import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBUROfXdH41GC-TvWb0W2sqR4Zpyz3lPYQ",
    authDomain: "crwn-db-c689e.firebaseapp.com",
    databaseURL: "https://crwn-db-c689e.firebaseio.com",
    projectId: "crwn-db-c689e",
    storageBucket: "",
    messagingSenderId: "858487427571",
    appId: "1:858487427571:web:739e4e9debbcc6174e4286",
    measurementId: "G-G6MCWCCHJS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
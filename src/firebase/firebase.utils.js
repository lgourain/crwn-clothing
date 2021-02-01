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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
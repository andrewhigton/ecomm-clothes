import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSVZ9Ib9cjdNZTwCUnfrIPFqIm22kdltA",
    authDomain: "ecomm-clothes-db.firebaseapp.com",
    databaseURL: "https://ecomm-clothes-db.firebaseio.com",
    projectId: "ecomm-clothes-db",
    storageBucket: "",
    messagingSenderId: "305270687447",
    appId: "1:305270687447:web:7fe14c4e52a30da5bd5292",
    measurementId: "G-1EWXGR02TE"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSVZ9Ib9cjdNZTwCUnfrIPFqIm22kdltA",
    authDomain: "ecomm-clothes-db.firebaseapp.com",
    databaseURL: "https://ecomm-clothes-db.firebaseio.com",
    projectId: "ecomm-clothes-db",
    storageBucket: "ecomm-clothes-db.appspot.com",
    messagingSenderId: "305270687447",
    appId: "1:305270687447:web:7fe14c4e52a30da5bd5292",
    measurementId: "G-1EWXGR02TE"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //where does uid come from? think i know but check
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // console.log(snapShot)
  //so this creates a user, if not there, in the database, ie a google signin
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  //this is what we return, when called in App.js
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
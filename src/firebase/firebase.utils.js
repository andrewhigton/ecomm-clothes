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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// export const createUserProfileDocument = async(userAuth, additionalData ) => {
// 	if(!userAuth) return;

// 	const userRef = firestore.doc(`users/${userAuth.uid}`);
// 		// 'users/128sdfsdfrg')
// 	const snapShot = await userRef.get(); 
// 	if(!snapShot.exists) {
// 		const { displayName, email } = userAuth;
// 		const createdAt = new Date();	
// 		try {
// 			await userRef.set({
// 				displayName,
// 				email,
// 				createdAt,
// 				...additionalData
// 			})
// 		} catch(error) {
// 			console.log('error creating user', error.message);
// 		}
// 	}	//console.log(snapShot);
// return userRef;	
// } 

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
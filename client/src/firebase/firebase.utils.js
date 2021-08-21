import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCSVZ9Ib9cjdNZTwCUnfrIPFqIm22kdltA",
    authDomain: "ecomm-clothes-db.firebaseapp.com",
    databaseURL: "https://ecomm-clothes-db.firebaseio.com",
    projectId: "ecomm-clothes-db",
    storageBucket: "ecomm-clothes-db.appspot.com",
    messagingSenderId: "305270687447",
    appId: "1:305270687447:web:7fe14c4e52a30da5bd5292",
    measurementId: "G-1EWXGR02TE"
  };
// const config = {
//     apiKey: "AIzaSyCSVZ9Ib9cjdNZTwCUnfrIPFqIm22kdltA",
//     authDomain: "ecomm-clothes-db.firebaseapp.com",
//     databaseURL: "https://ecomm-clothes-db.firebaseio.com",
//     projectId: "ecomm-clothes-db",
//     storageBucket: "ecomm-clothes-db.appspot.com",
//     messagingSenderId: "305270687447",
//     appId: "1:305270687447:web:7fe14c4e52a30da5bd5292",
//     measurementId: "G-1EWXGR02TE"
//   };

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

//earlier version - don't delete
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
//     apiKey: "AIzaSyCSVZ9Ib9cjdNZTwCUnfrIPFqIm22kdltA",
//     authDomain: "ecomm-clothes-db.firebaseapp.com",
//     databaseURL: "https://ecomm-clothes-db.firebaseio.com",
//     projectId: "ecomm-clothes-db",
//     storageBucket: "ecomm-clothes-db.appspot.com",
//     messagingSenderId: "305270687447",
//     appId: "1:305270687447:web:7fe14c4e52a30da5bd5292",
//     measurementId: "G-1EWXGR02TE"
//   };

// firebase.initializeApp(config);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;
//   //where does uid come from? think i know but check
//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const snapShot = await userRef.get();

//   // console.log(snapShot)
//   //so this creates a user, if not there, in the database, ie a google signin
//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log('error creating user', error.message);
//     }
//   }
//   //this is what we return, when called in App.js
//   return userRef;
// };

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// //this is oauth, look into it a little more
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
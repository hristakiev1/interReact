import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNSv-0RcTUd9qD0t0R6QK9Ec5KrvHbLSY",
  authDomain: "food-dome.firebaseapp.com",
  projectId: "food-dome",
  storageBucket: "food-dome.appspot.com",
  messagingSenderId: "951614037449",
  appId: "1:951614037449:web:b96a6ee6a517e418b3dc18",
  measurementId: "G-X2KG7RMK2K",
};

firebase.initializeApp(config);

// Firestore Database implementation

export const firestore = firebase.firestore();

// addCollectionAndDoc only used to import our database in Firebase Database ( collection ) - one time needed only
export const addCollectionAndDoc = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};
// then execute in useEffect -  addCollectionAndDoc("database", places); places must be array

export const retrieveData = async (collection) => {
  const dataBaseRef = firestore.collection(collection);

  const snapShot = await dataBaseRef.get();
  return snapShot.docs.map((doc) => ({ ...doc.data() }));
};

export const addToDocument = async (collection, item) => {
  const dataBaseRef = firestore.collection(collection);

  const snapShot = await dataBaseRef.get();

  const selectedItem = snapShot.docs.findIndex(
    (doc) => doc.data()._id === item._id
  );
  const itemSnapshot = snapShot.docs[selectedItem];

  if (itemSnapshot) {
    await dataBaseRef.doc(itemSnapshot.id).update(item);
  } else {
    item._id = Date.now().toString();
    await dataBaseRef.doc().set(item);
  }
};

export const deleteDocument = async (collection, item) => {
  const dataBaseRef = firestore.collection(collection);

  const snapShot = await dataBaseRef.get();

  const itemToDelete = snapShot.docs.findIndex(
    (doc) => doc.data()._id === item._id
  );
  const itemID = snapShot.docs[itemToDelete].id;

  await firestore.collection(collection).doc(itemID).delete();
};

// User Authentication

// Auth with Google Sign In
export const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//Create User Profile Document

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userDocumentRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userDocumentRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userDocumentRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userDocumentRef;
};

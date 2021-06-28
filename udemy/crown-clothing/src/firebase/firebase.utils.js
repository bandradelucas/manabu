import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAsD2DkLDT_EFFUoU_5Xh-jilnVeT7Dhb8',
  authDomain: 'testing-db-4e294.firebaseapp.com',
  databaseURL: 'https://testing-db-4e294.firebaseio.com',
  projectId: 'testing-db-4e294',
  storageBucket: 'testing-db-4e294.appspot.com',
  messagingSenderId: '386527327002',
  appId: '1:386527327002:web:c4eb44f5fde6faa850f2a3',
  measurementId: 'G-MKYKC0SC0T',
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
        ...additionalData,
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

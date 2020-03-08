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
    measurementId: 'G-MKYKC0SC0T'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

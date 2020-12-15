import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqN_5agjy59WnHJTXlQ8_qvcWkShLI7e4",
    authDomain: "lamb-db.firebaseapp.com",
    databaseURL: "https://lamb-db.firebaseio.com",
    projectId: "lamb-db",
    storageBucket: "lamb-db.appspot.com",
    messagingSenderId: "273004016121",
    appId: "1:273004016121:web:8ea814147d128190858d28"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
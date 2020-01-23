import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArUIBJYXonuUTy3Xknx5qXZuGuBYZ2-_g",
    authDomain: "oh-la-la-a8121.firebaseapp.com",
    databaseURL: "https://oh-la-la-a8121.firebaseio.com",
    projectId: "oh-la-la-a8121",
    storageBucket: "oh-la-la-a8121.appspot.com",
    messagingSenderId: "123109755879",
    appId: "1:123109755879:web:79f8e2dd0004debbd38b42",
    measurementId: "G-J6H5N5RRD8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => (auth.signInWithPopup(provider));
export default firebase;
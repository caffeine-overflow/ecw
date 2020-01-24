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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log(userAuth);
    if (!userAuth) return; //if not logged in exit funtion
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }
        catch{
            console.log('Error creating the user');
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => (auth.signInWithPopup(provider));
export default firebase;
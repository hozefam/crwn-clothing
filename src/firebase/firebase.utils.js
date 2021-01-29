import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDWw0aaHwQr0HD1Ij7ZpxeUYtNLw-Q5NOg",
  authDomain: "crwn-db-2d5ea.firebaseapp.com",
  projectId: "crwn-db-2d5ea",
  storageBucket: "crwn-db-2d5ea.appspot.com",
  messagingSenderId: "512213752854",
  appId: "1:512213752854:web:1f3c6ddc4601257ef92937",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtjW0poUUZzaJH_3C0r9ZlLLWf7TF2FgA",
  authDomain: "a-clone-challenge.firebaseapp.com",
  projectId: "a-clone-challenge",
  storageBucket: "a-clone-challenge.appspot.com",
  messagingSenderId: "1035787233296",
  appId: "1:1035787233296:web:86f061aeb01be021fc4295",
  measurementId: "G-JY99VNXS2Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

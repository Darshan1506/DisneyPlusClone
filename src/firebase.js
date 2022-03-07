import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
const firebaseConfig = {
    apiKey: "AIzaSyA17YGc_Z1KsIThJPdxoRG3VTCVzYqLWu4",
    authDomain: "disney-plus-clone-26a2e.firebaseapp.com",
    databaseURL: "https://disney-plus-clone-26a2e-default-rtdb.firebaseio.com",
    projectId: "disney-plus-clone-26a2e",
    storageBucket: "disney-plus-clone-26a2e.appspot.com",
    messagingSenderId: "934980950412",
    appId: "1:934980950412:web:a9ed989f20b639aa375ea9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth , provider,storage};
export default db;
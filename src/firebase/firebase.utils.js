import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBor4o999dbVBjAcIgO17QphDuc_6BG83o",
    authDomain: "crown-store-57c31.firebaseapp.com",
    databaseURL: "https://crown-store-57c31.firebaseio.com",
    projectId: "crown-store-57c31",
    storageBucket: "crown-store-57c31.appspot.com",
    messagingSenderId: "262271583494",
    appId: "1:262271583494:web:63c1cb069b59fbe5250a87",
    measurementId: "G-5ZS9P6X2P4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
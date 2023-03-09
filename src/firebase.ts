import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQCE2vYpqsCom21to6MLV5xuAKNMfuTL0",
  authDomain: "amzon-app-44df6.firebaseapp.com",
  projectId: "amzon-app-44df6",
  storageBucket: "amzon-app-44df6.appspot.com",
  messagingSenderId: "638504357893",
  appId: "1:638504357893:web:794c29a6a5f7471b6c0c6c",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

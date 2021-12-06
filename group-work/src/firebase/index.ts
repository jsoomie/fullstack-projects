import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBC26u9Fi4zUer4ZHGpbaIT6PjRWFwyuk",
  authDomain: "group-work-2f796.firebaseapp.com",
  projectId: "group-work-2f796",
  storageBucket: "group-work-2f796.appspot.com",
  messagingSenderId: "1032458405668",
  appId: "1:1032458405668:web:f9437229b64b5eb7c795b1",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
export const db = firebase.firestore();
export const auth = firebase.auth();

// create timestamp
export const timestamp = firebase.firestore.Timestamp;

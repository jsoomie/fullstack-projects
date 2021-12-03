import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnSQV_zhTd4-gVWPCvOkRK-um8LDjA2xI",
  authDomain: "money-tracker-10948.firebaseapp.com",
  projectId: "money-tracker-10948",
  storageBucket: "money-tracker-10948.appspot.com",
  messagingSenderId: "902901285173",
  appId: "1:902901285173:web:b90fde1c1c97a77833cc7c",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
export const db = firebase.firestore();
export const auth = firebase.auth();

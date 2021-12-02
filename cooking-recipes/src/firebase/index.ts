import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS7zdSW589OmqjaHhynyhK8Sgi7gpYDZ8",
  authDomain: "cooking-recipe-71efd.firebaseapp.com",
  projectId: "cooking-recipe-71efd",
  storageBucket: "cooking-recipe-71efd.appspot.com",
  messagingSenderId: "852257695138",
  appId: "1:852257695138:web:ca9f7b10ca48b5ea9ebefb",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
export const projectFirestore = firebase.firestore();

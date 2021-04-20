import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByb1VzdIjsIB1J2dwsyDFfEOyIbhLkG0o",
  authDomain: "mix-project-81fbb.firebaseapp.com",
  projectId: "mix-project-81fbb",
  storageBucket: "mix-project-81fbb.appspot.com",
  messagingSenderId: "872561665795",
  appId: "1:872561665795:web:133c5ed2f6bc0ffc132b36",
  measurementId: "G-Y7XHEJ1HFJ",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;

//firebase에서 가지고 오는거
const auth = firebase.auth();

export { auth, apiKey };

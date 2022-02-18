import firebase from "firebase/app";
//import "firebaseui";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: "mirupa-10885.firebaseapp.com",
  databaseURL: "https://mirupa-10885.firebaseio.com",
  projectId: "mirupa-10885",
  storageBucket: "mirupa-10885.appspot.com",
  messagingSenderId: "161135277056",
  appId: "1:161135277056:web:10f204189769ba9ca7d4e5",
  measurementId: "G-DQ3EX4490R"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth(); //https:developers.google.com/identity/protocols/oauth2/scopes?authuser=1#lifesciences
// Initialize the FirebaseUI Widget using Firebase.
var googleProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  db,
  auth,
  googleProvider
}
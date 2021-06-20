import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
 apiKey: "AIzaSyB-WwmK5UXLKfToFGGJn_UvyK_x3sbZ1EA",
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
const auth = firebase.auth();

export {
 firebase,
 db,
 auth
}
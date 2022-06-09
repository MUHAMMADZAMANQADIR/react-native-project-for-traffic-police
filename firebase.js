import firebase from 'firebase';
import 'firebase/auth';
import Constants from 'expo-constants';
 
const firebaseConfig = {
  apiKey: "AIzaSyDHVx3RQyCU1cSCorwX8BDMPn28DXZeYBs",
  authDomain: "madproject-c8021.firebaseapp.com",
  projectId: "madproject-c8021",
  storageBucket: "madproject-c8021.appspot.com",
  messagingSenderId: "275195250392",
  appId: "1:275195250392:web:e5fe954f77cf0ba1afb9ad",
  measurementId: "G-MF69MLJRKY"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();

export {db} ;

export default Firebase;
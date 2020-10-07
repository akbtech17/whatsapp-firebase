import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApw8DMMvRqlUpnN5HSVymkvlYFIbSvqj0",
  authDomain: "whatsapp-firebase-4b395.firebaseapp.com",
  databaseURL: "https://whatsapp-firebase-4b395.firebaseio.com",
  projectId: "whatsapp-firebase-4b395",
  storageBucket: "whatsapp-firebase-4b395.appspot.com",
  messagingSenderId: "382499587467",
  appId: "1:382499587467:web:997b20e280ea7c00831b8e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider =  new  firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db; 
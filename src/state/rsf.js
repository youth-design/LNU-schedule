import firebase from "firebase/app";
import "@firebase/firestore"; // 👈 If you're using firestore
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBot4nfveECST3mCNj-iKdgUHrUrbsDu3I",
  authDomain: "vnuschedule.firebaseapp.com",
  databaseURL: "https://vnuschedule.firebaseio.com",
  projectId: "vnuschedule",
  storageBucket: "vnuschedule.appspot.com",
  messagingSenderId: "318637603204"
});

const rsf = new ReduxSagaFirebase(firebaseApp);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default rsf;

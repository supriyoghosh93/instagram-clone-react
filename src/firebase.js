import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHl5uPWhuDlmRHej43gEmL8Mi0EwkfX74",
  authDomain: "instagram-clone-ee946.firebaseapp.com",
  databaseURL: "https://instagram-clone-ee946.firebaseio.com",
  projectId: "instagram-clone-ee946",
  storageBucket: "instagram-clone-ee946.appspot.com",
  messagingSenderId: "1079798328614",
  appId: "1:1079798328614:web:ff368a36576e12b76225e7",
  measurementId: "G-JS0D36CKSF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;

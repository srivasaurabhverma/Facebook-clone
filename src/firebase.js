// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { firestore } from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCBvsvcQC-e8DWnAtTwSX5Gb7lfieKVDh4",
  authDomain: "facebook-7e1e9.firebaseapp.com",
  projectId: "facebook-7e1e9",
  storageBucket: "facebook-7e1e9.appspot.com",
  messagingSenderId: "108135169249",
  appId: "1:108135169249:web:5768c102cbbbdca4630ba0",
  measurementId: "G-0K51RKWSY0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

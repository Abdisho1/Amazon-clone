import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcAhVSbEDYJ4q9kd7G9ajMVfwfvqlyhSQ",
  authDomain: "clone-84272.firebaseapp.com",
  projectId: "clone-84272",
  storageBucket: "clone-84272.appspot.com",
  messagingSenderId: "232990321914",
  appId: "1:232990321914:web:33cde99c5ffe0588112d43",
  measurementId: "G-6YNZMXMRGJ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
// const analytics = getAnalytics(app);

export { auth, db };
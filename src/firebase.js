import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6hvu0ez52gzJGdSkvQ2DkAgUZT10BvBI",
    authDomain: "discord-d758f.firebaseapp.com",
    databaseURL: "https://discord-d758f.firebaseio.com",
    projectId: "discord-d758f",
    storageBucket: "discord-d758f.appspot.com",
    messagingSenderId: "977053807293",
    appId: "1:977053807293:web:0168c5f05347d1d8ed3dd4",
    measurementId: "G-GSRYFX273P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
const { initializeApp } = require("@firebase/app");
const { GoogleAuthProvider,getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } = require("@firebase/auth");
const { getFirestore,query, getDocs, collection, where, addDoc } =require('firebase/firestore');
// firebase-admin package
// const { initializeApp: initializeAdminApp } = require('firebase-admin/app');
// const { getAuth: getAdminAuth, createCustomToken } = require('firebase-admin/auth');
// const { getFirestore } = require('firebase-admin/firestore');

// // Initialize firebase-admin
// const adminApp = initializeAdminApp();
// const adminAuth = getAdminAuth();
// const firestore = getFirestore();


const firebaseConfig = {
  apiKey: "AIzaSyDeZDU7QrGSd62WkE8mRXttKihWVp5L5Lc",
  authDomain: "fluent-optics-394219.firebaseapp.com",
  projectId: "fluent-optics-394219",
  storageBucket: "fluent-optics-394219.appspot.com",
  messagingSenderId: "65943690193",
  appId: "1:65943690193:web:39a62419b838e9af7fdef0",
  measurementId: "G-422M2C8TBY"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  signInWithEmailAndPassword
};

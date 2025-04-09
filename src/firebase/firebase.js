// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, fetchSignInMethodsForEmail } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxYfBmt69VjO2KagYX8p4A68uAn0Hg6cA",
  authDomain: "smart-fit-e9078.firebaseapp.com",
  projectId: "smart-fit-e9078",
  appId: "1:1038679698288:web:66f7192f881c1cd09abdb5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
facebookProvider.addScope('email');
facebookProvider.setCustomParameters({
    auth_type: 'rerequest', // 👈 forces FB to re-ask permissions
  });
  

export { auth, googleProvider, facebookProvider, signInWithPopup, FacebookAuthProvider, fetchSignInMethodsForEmail };

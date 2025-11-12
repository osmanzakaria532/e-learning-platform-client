// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCz8zgsHMJFkAyiC-huNzNDv1lMDTkopg0',
  authDomain: 'e-learning-platform-auth-1bfe2.firebaseapp.com',
  projectId: 'e-learning-platform-auth-1bfe2',
  storageBucket: 'e-learning-platform-auth-1bfe2.firebasestorage.app',
  messagingSenderId: '1018073600355',
  appId: '1:1018073600355:web:bf3b78577885a206858356',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

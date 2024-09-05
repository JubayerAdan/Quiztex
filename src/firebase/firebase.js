// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrpETM7_HXDd9KZC_j9A2S0GZKEe7BcR4",
  authDomain: "quiztex.firebaseapp.com",
  projectId: "quiztex",
  storageBucket: "quiztex.appspot.com",
  messagingSenderId: "494418940384",
  appId: "1:494418940384:web:6bb98f9a288abc33031b85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgLGppWCMolm6nKVdSdLHYSu7RUQaFP6U",
  authDomain: "insumax-reactjs.firebaseapp.com",
  projectId: "insumax-reactjs",
  storageBucket: "insumax-reactjs.appspot.com",
  messagingSenderId: "1025617686876",
  appId: "1:1025617686876:web:4d3807c48bb6683340d199"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
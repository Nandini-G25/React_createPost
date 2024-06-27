// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQfJWHO8OVMJwaw0QLTNMeyhY61LEMHyY",
  authDomain: "my-react-app-new.firebaseapp.com",
  projectId: "my-react-app-new",
  storageBucket: "my-react-app-new.appspot.com",
  messagingSenderId: "89226226759",
  appId: "1:89226226759:web:864d5e39c681a987125562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
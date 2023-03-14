// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv8n4ucbIh_hK0RQvX34YbSRXQ83oY9-I",
  authDomain: "online-explore.firebaseapp.com",
  projectId: "online-explore",
  storageBucket: "online-explore.appspot.com",
  messagingSenderId: "1007271740588",
  appId: "1:1007271740588:web:b50304739d9afa10810b09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
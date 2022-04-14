// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE70MlTKpX3GGmIefyOhVg8wPNzqlNOU8",
  authDomain: "genius-car-services-64ed0.firebaseapp.com",
  projectId: "genius-car-services-64ed0",
  storageBucket: "genius-car-services-64ed0.appspot.com",
  messagingSenderId: "85025496518",
  appId: "1:85025496518:web:b1f7f2b2acdc335a68a6c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
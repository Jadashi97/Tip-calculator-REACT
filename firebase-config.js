// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxxBskIeKXz84aqFY99PqHSkc_-G3jOfA",
  authDomain: "tip-project-d529a.firebaseapp.com",
  projectId: "tip-project-d529a",
  storageBucket: "tip-project-d529a.appspot.com",
  messagingSenderId: "869187649978",
  appId: "1:869187649978:web:ac180ba3fcc3f62de0dd83",
  measurementId: "G-CQZ0EVP1LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
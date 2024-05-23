// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7yvDtNTszQq7yFkIuesF1c8WDmEIO4vM",
  authDomain: "lines-ecebf.firebaseapp.com",
  projectId: "lines-ecebf",
  storageBucket: "lines-ecebf.appspot.com",
  messagingSenderId: "531947070769",
  appId: "1:531947070769:web:ee9a420f2254c2f2f23c10",
  measurementId: "G-54JYN61YFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import firebase from "firebase/compat";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQdA3QOIRa545ZETFa97bAuBoSGNnIWF8",
  authDomain: "uber-eats-e1ab6.firebaseapp.com",
  projectId: "uber-eats-e1ab6",
  storageBucket: "uber-eats-e1ab6.appspot.com",
  messagingSenderId: "341151904",
  appId: "1:341151904:web:5a695bdb2d1bf82f81f9c5",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  export const firebaseConfig = {
  apiKey: "AIzaSyABFYz0tQwAcBH3ECWjDiQqFuAvu51V78Y",
  authDomain: "reactproj1backend.firebaseapp.com",
  databaseURL: "https://reactproj1backend-default-rtdb.firebaseio.com",
  projectId: "reactproj1backend",
  storageBucket: "reactproj1backend.appspot.com",
  messagingSenderId: "1059344896437",
  appId: "1:1059344896437:web:68eb498e23749c8c2509fc",
  measurementId: "G-01YYJM6ZF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Get Firestore instance

export { db };

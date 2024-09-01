// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "clouddrive-2ecf7.firebaseapp.com",
  projectId: "clouddrive-2ecf7",
  storageBucket: "clouddrive-2ecf7.appspot.com",
  messagingSenderId: "794986063276",
  appId: "1:794986063276:web:d3b129401d8d1f944c0609",
  measurementId: "G-4QK3CMTQDW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

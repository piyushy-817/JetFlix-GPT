// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJaiYtOMhqBvF4cxhjc3bR4q2VWCjdSv0",
  
  authDomain: "jetflix-gpt.firebaseapp.com",
  projectId: "jetflix-gpt",
  storageBucket: "jetflix-gpt.firebasestorage.app",
  messagingSenderId: "756835249310",
  appId: "1:756835249310:web:a6c697afd6c92d64f8df8f",
  measurementId: "G-PZBWBHFVGS"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  
 const analytics = getAnalytics(app);

 

 
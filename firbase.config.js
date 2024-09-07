// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhWROx2buOi7MBI_Q-CkEFvdVftD3HsQ0",
  authDomain: "dragon-news-server-f487d.firebaseapp.com",
  projectId: "dragon-news-server-f487d",
  storageBucket: "dragon-news-server-f487d.appspot.com",
  messagingSenderId: "675148457558",
  appId: "1:675148457558:web:4698c9007278ef8cdebdf7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
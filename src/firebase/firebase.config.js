// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9KN1v7K3TyhCjGazyXeaLjp32srT4riA",
  authDomain: "dragon-news-project-b1f59.firebaseapp.com",
  projectId: "dragon-news-project-b1f59",
  storageBucket: "dragon-news-project-b1f59.firebasestorage.app",
  messagingSenderId: "944718600213",
  appId: "1:944718600213:web:6aef56a503c3b8e94ad61c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
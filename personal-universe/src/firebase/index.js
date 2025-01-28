import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhO5LJBlJMf-6uCSNrUMjVdOZdAzWSMNg",
  authDomain: "baby-guessing.firebaseapp.com",
  projectId: "baby-guessing",
  storageBucket: "baby-guessing.firebasestorage.app",
  messagingSenderId: "227866419880",
  appId: "1:227866419880:web:9ff4b9b22bdcd8cfd7189d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
	db
};
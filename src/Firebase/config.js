import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAseKVsySqgBUy6lQzK9uNCqQWvchcffjQ",
  authDomain: "mini-blog-b73cf.firebaseapp.com",
  projectId: "mini-blog-b73cf",
  storageBucket: "mini-blog-b73cf.appspot.com",
  messagingSenderId: "84575917385",
  appId: "1:84575917385:web:d93e136cd93b6c5cee3698",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

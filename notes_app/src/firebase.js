import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCF9CveXrn5ch0lkJhnRrMHoaOPWR65M_Y",
  authDomain: "react-notes-7a5d1.firebaseapp.com",
  projectId: "react-notes-7a5d1",
  storageBucket: "react-notes-7a5d1.appspot.com",
  messagingSenderId: "420447338703",
  appId: "1:420447338703:web:45cc71686fb16a5e6437ba"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

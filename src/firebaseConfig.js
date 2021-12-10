// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLL12ur18HXmUBEM3p_b55ku76In35UJM",
  authDomain: "vibe-b81c4.firebaseapp.com",
  projectId: "vibe-b81c4",
  storageBucket: "vibe-b81c4.appspot.com",
  messagingSenderId: "445674678160",
  appId: "1:445674678160:web:6a25348daf912d6407b515",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }

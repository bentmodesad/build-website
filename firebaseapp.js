// firebase-app.js
// Konfigurasi dan Inisialisasi Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { 
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { 
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-storage.js";

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyDkdgBayBc3aCbXJJwrWJU_yKuEf5lew8I",
  authDomain: "xdkv3-e549b.firebaseapp.com",
  projectId: "xdkv3-e549b",
  storageBucket: "xdkv3-e549b.firebasestorage.app",
  messagingSenderId: "542182832963",
  appId: "1:542182832963:web:9a53d830969446953c0df6",
  measurementId: "G-X2BZMZKL67"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// Export semua yang diperlukan
export {
  auth,
  db,
  storage,
  googleProvider,
  // Auth functions
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  // Firestore functions
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  // Storage functions
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
};

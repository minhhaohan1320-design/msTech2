import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA8xgz1Ay6JNu27uLP2lHOGzMq4S8-46NQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mstech-48e0d.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://mstech-48e0d-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mstech-48e0d",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "mstech-48e0d.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "90751240962",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:90751240962:web:5f286551cd5983e3d0d01b"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

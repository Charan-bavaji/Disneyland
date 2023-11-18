import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAW3cFVzdWU7UtaquozGkdswW2JPrcK7-Q",
    authDomain: "disneyland-c31e8.firebaseapp.com",
    projectId: "disneyland-c31e8",
    storageBucket: "disneyland-c31e8.appspot.com",
    messagingSenderId: "237184535314",
    appId: "1:237184535314:web:14e15c161b668b1cad81cb",
    measurementId: "G-87TH2TX87Y"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider;
const storage = getStorage(firebaseApp);
export { auth, googleProvider, storage };
export default db;

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
        apiKey: "AIzaSyDmyQAsf17ywU5dR7eNMOm-6Rk5U_1gdyk",
        authDomain: "chat-llm-project.firebaseapp.com",
        projectId: "chat-llm-project",
        storageBucket: "chat-llm-project.appspot.com",
        messagingSenderId: "946666894768",
        appId: "1:946666894768:web:d031b721fbab1fb53f9275"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

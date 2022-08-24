import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFJdbK1HdAHWEkOaY9qFpMtWzpOZq7s4k",
    authDomain: "city-hospital-872c2.firebaseapp.com",
    projectId: "city-hospital-872c2",
    storageBucket: "city-hospital-872c2.appspot.com",
    messagingSenderId: "835957069022",
    appId: "1:835957069022:web:6ba0133c39814c59fbde4f",
    measurementId: "G-HV3F3PZYC4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
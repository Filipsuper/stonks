import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZreLQfSZjevqHi06UNwCn2iztdOhs8iY",
    authDomain: "stonks-a6d1a.firebaseapp.com",
    projectId: "stonks-a6d1a",
    storageBucket: "stonks-a6d1a.appspot.com",
    messagingSenderId: "870839259133",
    appId: "1:870839259133:web:50759f3e2fa2cb553c9394",
    measurementId: "G-JE0X1VCJSX"
};

const app = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app);
export default app;
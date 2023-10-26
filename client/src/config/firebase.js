import { initializeApp } from "firebase/app";
import { getAnalytics , logEvent } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pdfextractor-88ee3.firebaseapp.com",
  // projectId: "pdfextractor-ea23f",
  projectId: "pdfextractor-88ee3",
  storageBucket: "pdfextractor-88ee3.appspot.com",
  messagingSenderId: "931616991508",
  appId: "1:931616991508:web:d485726656311e4704ba01",
  measurementId: "G-TB6CPVPDS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

export {app,auth,provider}
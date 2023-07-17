import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAw95CECahz3noCSsWLD9k2EVp8X4Qv2YM",
  authDomain: "slots-0.firebaseapp.com",
  projectId: "slots-0",
  storageBucket: "slots-0.appspot.com",
  messagingSenderId: "744350331178",
  appId: "1:744350331178:web:86455c3474ce5bc9b46e53",
  measurementId: "G-VE51JJMXG6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

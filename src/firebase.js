import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "REACT_APP_APIKEY",
  authDomain: "ceppic-react-astronomie.firebaseapp.com",
  projectId: "ceppic-react-astronomie",
  storageBucket: "ceppic-react-astronomie.appspot.com",
  messagingSenderId: "770932267303",
  appId: "1:770932267303:web:4e3ee6011341415e32b102"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}

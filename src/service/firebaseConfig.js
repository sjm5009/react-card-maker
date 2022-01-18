import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  /* apiKey: "AIzaSyBs5Jw_OBvo_zjIg49iiZ_nY8ap4vQ990w",
  authDomain: "business-card-maker-520a4.firebaseapp.com",
  projectId: "business-card-maker-520a4", "business-card-maker-520a4.firebaseapp.com"*/
};

export const firebaseApp = initializeApp(firebaseConfig);

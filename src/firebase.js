
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8ymqmv42tQUi5o538KMsYf_Gg7O7-KMU",
  authDomain: "yumito-e6155.firebaseapp.com",
  projectId: "yumito-e6155",
  storageBucket: "yumito-e6155.appspot.com",
  messagingSenderId: "765858403311",
  appId: "1:765858403311:web:bfd37b513ac0100dab9c1a",
  measurementId: "G-PN2LMWFZKZ"
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
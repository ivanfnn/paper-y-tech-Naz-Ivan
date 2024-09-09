// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const bf = getFirestore(app)

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.VITE_APIKEY,
//   authDomain: process.env.VITE_AUTHDOMAIN,
//   projectId: process.env.VITE_PROJECTID,
//   storageBucket: process.env.VITE_STORAGEBUCKET,
//   messagingSenderId: process.env.VITE_MESSAGINGSENDERID,
//   appId: process.env.VITE_APPID,
// };

// const app = initializeApp(firebaseConfig);
// export const bf = getFirestore(app);
import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import firebase from "firebase/compat/app";

const FireBaseContext = createContext(null);

firebase.initializeApp({
  apiKey: "AIzaSyBNtMHsN1yJxumaV7bIJG_ITBqzWrjw4ts",
  authDomain: "authorization-7a93b.firebaseapp.com",
  projectId: "authorization-7a93b",
  storageBucket: "authorization-7a93b.firebasestorage.app",
  messagingSenderId: "652933184261",
  appId: "1:652933184261:web:bcdc6f50abbe74a5e6556c",
  measurementId: "G-YXF2BE4X6W",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

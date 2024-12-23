import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import firebase from "firebase/compat/app";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";

// const FireBaseContext = createContext(null);

firebase.initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

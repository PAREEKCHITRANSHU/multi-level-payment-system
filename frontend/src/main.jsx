import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    {/* {" "}
    //naya lagay */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

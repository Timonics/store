import React from "react";
import ReactDOM from "react-dom/client";

import DataProvider from "./context/DataProvider.tsx";
import { BrowserRouter as Router } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="100248611857-gb5davjlsdo5n8pn1h8u47v633i467ta.apps.googleusercontent.com">
    <React.StrictMode>
      <Router>
        <DataProvider>
          <App />
        </DataProvider>
      </Router>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

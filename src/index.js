import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthProvider from "./service/auth_service";
import { firebaseApp } from "./service/firebaseConfig";

const authProvider = new AuthProvider(firebaseApp);
ReactDOM.render(
  <React.StrictMode>
    <App authProvider={authProvider} />
  </React.StrictMode>,
  document.getElementById("root")
);

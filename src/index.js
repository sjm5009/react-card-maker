import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthProvider from "./service/auth_service";
import { firebaseApp } from "./service/firebaseConfig";
import IamgeFileInput from "./components/image_file_input/iamge_file_input";
import ImageUploader from "./service/imageUploader";

const authProvider = new AuthProvider(firebaseApp);
const imageUploder = new ImageUploader();
const FileInput = (props) => (
  <IamgeFileInput {...props} imageUploader={imageUploder} />
);
ReactDOM.render(
  <React.StrictMode>
    <App authProvider={authProvider} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);

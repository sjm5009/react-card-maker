import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ authProvider }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login authProvider={authProvider} />}
          ></Route>
          <Route
            path="/maker"
            element={<Maker authProvider={authProvider} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

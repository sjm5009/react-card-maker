import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  const location = useLocation();
  const logoStlye =
    location.pathname === "/" ? styles.logo_login : styles.logo_maker;

  return (
    <header className={styles.container}>
      <img
        className={styles.logo_login}
        src="./people_logo.png"
        alt="login_logo"
      />
      <h1 className={styles.title}>Bussiness Card Maker</h1>
      {onLogout && (
        <button onClick={onLogout} className={styles.button}>
          LogOut
        </button>
      )}
    </header>
  );
};

export default Header;

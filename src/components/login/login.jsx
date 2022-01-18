import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authProvider }) => {
  const navigation = useNavigate();

  const loginAuth = (event) => {
    authProvider.login(event.currentTarget.textContent).then((result) => {
      goToMaker(result.user.uid);
    });
  };

  const goToMaker = (userId) => {
    navigation("/maker", { state: { id: userId } });
  };

  useEffect(() => {
    /*     authProvider.onAuthChanged((user) => {
      console.log(user);
      user && goToMaker(user.uid);
    }); */
  });

  return (
    <section className={styles.login}>
      <Header></Header>
      <section className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <ul className={styles.buttons}>
          <li>
            <button onClick={loginAuth} className={styles.button}>
              Google
            </button>
          </li>
          <li>
            <button onClick={loginAuth} className={styles.button}>
              GitHub
            </button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Login;

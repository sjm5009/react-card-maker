import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authProvider }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "Choman_1",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "choman_1@gamil.com",
      description: "Choman Description 1",
      fileName: "people_logo.png",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "Choman_2",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "choman_2@gamil.com",
      description: "Choman Description 2",
      fileName: "people_logo.png",
      fileURL: null,
    },
    3: {
      id: 3,
      name: "Choman_3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "choman_3@gamil.com",
      description: "Choman Description 3",
      fileName: "people_logo.png",
      fileURL: null,
    },
  });

  const navigation = useNavigate();

  const logout = () => {
    authProvider.logout();
  };

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  useEffect(() => {
    authProvider.onAuthChanged((user) => {
      if (!user) {
        navigation("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={logout}></Header>
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;

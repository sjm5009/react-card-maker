import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "./people_logo.png";
const Card = ({ card }) => {
  const { name, company, theme, title, email, description, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  const getThemeColor = (theme) => {
    switch (theme) {
      case "dark":
        return styles.dark;
      case "light":
        return styles.light;
      case "colorful":
        return styles.colorful;
      default:
        return new Error(`unknown case ${theme}`);
    }
  };
  return (
    <>
      <li className={`${styles.card} ${getThemeColor(theme)}`}>
        <img className={styles.img} src={url} alt="preview" />
        <div className={styles.cardInfo}>
          <h1 className={styles.name}>{name}</h1>
          <p className={`${styles.company} ${getThemeColor(theme)}`}>
            {company}
          </p>
          <p className={styles.title}>{title}</p>
          <p className={styles.email}>{email}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </li>
    </>
  );
};

export default Card;

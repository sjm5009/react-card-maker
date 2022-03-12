import React, { useRef } from "react";
import Button from "../button/button";
import IamgeFileInput from "../image_file_input/iamge_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const { name, company, theme, title, email, description } = card;

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    var updated = {
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    console.log(updated);
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = (event) => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        className={styles.input}
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        type="text"
        className={styles.input}
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        type="text"
        className={styles.input}
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        type="text"
        className={styles.input}
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        ref={descriptionRef}
        className={styles.textarea}
        name="description"
        value={description}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <IamgeFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit}></Button>
    </form>
  );
};

export default CardEditForm;

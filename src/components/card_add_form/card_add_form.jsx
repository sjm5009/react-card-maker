import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileButton from "../button/imageFileButton";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ addCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value || "dark",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      description: descriptionRef.current.value || "",
    };

    formRef.current.reset();
    addCard(card);
  };

  return (
    <form ref={formRef}>
      <input ref={nameRef} type="text" className={styles.input} name="name" />
      <input
        ref={companyRef}
        type="text"
        className={styles.input}
        name="company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} type="text" className={styles.input} name="title" />
      <input ref={emailRef} type="text" className={styles.input} name="email" />
      <textarea
        ref={descriptionRef}
        className={styles.textarea}
        name="descripion"
      ></textarea>
      <div>
        <ImageFileButton />
      </div>
      <Button name="submit" onClick={onSubmit}></Button>
    </form>
  );
};

export default CardAddForm;

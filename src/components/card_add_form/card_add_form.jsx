import React, { useRef } from "react";
import Button from "../button/button";
import IamgeFileInput from "../image_file_input/iamge_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();

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
      fileName: "",
      fileURL: "",
    };

    formRef.current.reset();
    addCard(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        type="text"
        className={styles.input}
        name="title"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        type="text"
        className={styles.input}
        name="company"
        placeholder="Company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        type="text"
        className={styles.input}
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        type="text"
        className={styles.input}
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={descriptionRef}
        className={styles.textarea}
        name="description"
        placeholder="Descripion"
      ></textarea>
      <div className={styles.fileInput}>
        <IamgeFileInput />
      </div>
      <Button name="Add" onClick={onSubmit}></Button>
    </form>
  );
};

export default CardAddForm;

import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import Airtable from "airtable";
import backendUrl from "../../const/backendUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function Write() {
  const [values, setValues] = useState({
    title: "",
    content: "",
    author: "",
    email: "",
    phone: "",
  });

  const handleTitle = (e) => {
    setValues({ ...values, title: e.target.value });
  };
  const handleContent = (e) => {
    setValues({ ...values, content: e.target.value });
  };
  const handleAuthor = (e) => {
    setValues({ ...values, author: e.target.value });
  };
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handlePhone = (e) => {
    setValues({ ...values, phone: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    base("Blog").create(
      [
        {
          fields: values,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          notifyError();
          return;
        }
        notifySuccess();
        clearForm();
      }
    );
  };

  const notifySuccess = () => toast.success("Thank You ✌");
  const notifyError = () => toast.error("Something Went Wrong 😢");

  const clearForm = () => {
    setValues({ ...values, title: "", content: "", author: "", email: "", phone:"" });
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Title of your post"
          value={values.title}
          onChange={handleTitle}
          required
        />
        <label>Content</label>
        <textarea
          rows="6"
          value={values.content}
          onChange={handleContent}
          required
        ></textarea>
        <label>Author</label>
        <input
          type="text"
          placeholder="Name of author"
          value={values.author}
          onChange={handleAuthor}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email id"
          value={values.email}
          onChange={handleEmail}
          required
        />
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Your phone number"
          value={values.phone}
          onChange={handlePhone}
          required
        />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Write;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function BlogCard({ post, id }) {
  // console.log(post.fields.)
  return (
    <Link to={`/blog/${id}`}>
      <div className={styles.card}>
        <div>
          <div className={styles.author}>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt=""/>
            <h3>{post.fields.author}</h3>
          </div>
          <div className={styles.text}>
            <h2>{post.fields.title}</h2>
          </div>
          <div className={styles.details}>
            <div className={styles.date}>
              <h3>{post.fields.date_published}</h3>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src="https://miro.medium.com/max/1100/1*7-yDlZrKZRbaA5f-Jcq-qw.jpeg" alt="" />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

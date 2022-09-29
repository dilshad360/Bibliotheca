import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function BlogCard({ post, id }) {
  // console.log(post.fields.)
  return (
    <div className={styles.card}>
      <Link to={`/blog/${id}`}>
        <div>
          <div className={styles.author}>
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
          {/* <img src={post.fields.coverPhoto.url} alt="noon"/> */}
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;

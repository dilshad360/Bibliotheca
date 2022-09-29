import React, { useState } from "react";
import Airtable from "airtable";
import { useEffect } from "react";
import { useParams } from "react-router";
import styles from "./styles.module.css"

const base = new Airtable({ apiKey: "keyIFFzaIXD9tzQwH" }).base(
  "appeS7JqbqChh9tHv"
);

function Blog() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    base("Table 1").find(`${params.id}`, (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      // console.log(record.fields)
      setPost(record.fields);
    });
  }, [params.id]);

  console.log(post);
  return (
    <main className={styles.blog}>
      <img
        src="https://miro.medium.com/max/1400/1*7-yDlZrKZRbaA5f-Jcq-qw.jpeg"
        className={styles.cover}
        alt=""
      />
      <div className={styles.title}>
        <div className={styles.authdetails}>
          {/* <img src={post.author.avatar.url} alt="" /> */}
          <div className={styles.authtext}>
            {/* <h4>{post.author.name}</h4> */}
            {/* <h6>{moment(post.datePublished).format("MMM d, YYYY")}</h6> */}
          </div>
        </div>
        {/* <h2>{post.title}</h2> */}
      </div>

      <div
        className={styles.content}
        // dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </main>
  );
}

export default Blog;

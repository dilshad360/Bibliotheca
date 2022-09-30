import React, { useState } from "react";
import Airtable from "airtable";
import { useEffect } from "react";
import { useParams } from "react-router";
import styles from "./styles.module.css"
import moment from "moment";
import Loader from "../../components/Loader/Loader";


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
      setPost(record.fields);
    });
  }, [params.id]);

  // console.warn(post.coverPhoto[0].url);
  return (
    
    
    <main className={styles.blog}>
    {post?
    <div>

      <img
        src={post.coverPhoto[0].url}
        className={styles.cover}
        alt=""
        />
      <div className={styles.title}>
        <div className={styles.authdetails}>
          <img src="https://i.pinimg.com/736x/2a/40/6b/2a406bf58db22cc7818ad1ff48c158cf.jpg" alt="" />
          <div className={styles.authtext}>
            <h4>{post.author}</h4>
            <h6>{moment(post.datePublished).format("MMM d, YYYY")}</h6>
          </div>
        </div>
         <h2>{post.title}</h2> 
      </div>
      
      <div
      className={styles.content}
      >
        {post.content}
      </div>
      </div>
      : <Loader/> }
      </main>
  );
}

export default Blog;

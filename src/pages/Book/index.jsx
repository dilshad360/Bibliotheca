import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styles from "./styles.module.css";
import BookSkeleton from "../../components/Skeleton/BookSkeleton";
import { fetchRecordById } from "../../utils/airtableService";

function Book() {
  const params = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    getBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBook = async () => {
    try {
      const tableName = "Book";
      const recordId = `${params.id}`;
      const record = await fetchRecordById(tableName, recordId);
      setBook(record.fields);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = (title) => {
    const searchTitle = title.replace(/\s/g, "+");
    const link = `https://www.google.com/search?q=${searchTitle}&source=lnms&tbm=shop`;
    window.open(link, "_blank");
  };

  return (
    <div className={styles.main}>
      {book ? (
        <div className={styles.book}>
          <img src={book.coverPhoto[0].url} alt={book.title} />
          <div className={styles.details}>
            <h2>{book.title}</h2>
            <h5>
              <span>Author:</span> {book.author}
            </h5>
            <p dangerouslySetInnerHTML={{ __html: book.content }}></p>
            <button
              onClick={() => {
                handleBuy(book.title);
              }}
            >
              Buy
            </button>
          </div>
        </div>
      ) : (
        <BookSkeleton />
      )}
    </div>
  );
}

export default Book;

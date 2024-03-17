import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import BookCardSkeleton from "../Skeleton/BookCardSkeleton";
import { fetchRecords } from "../../utils/airtableService";


function BookCard() {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {

    const check = sessionStorage.getItem('books'); 

    if (check) {
      setBooks(JSON.parse(check));
    } else {

      try {
        const tableName = "Book";
        const filterBy = "{status} = 'Published'";
        const sortField = "auto";
        const sortDirection = "desc";
        const Records = await fetchRecords(
          tableName,
          filterBy,
          sortField,
          sortDirection
        );

          setBooks(Records);
      } catch (error) {
        console.error(error);
      }


      // base("Book")
      // .select({ view: "Published" })
      // .eachPage(
      //   (records, fetchNextPage) => {
      //     sessionStorage.setItem("books", JSON.stringify(records));
      //     setBooks(records);
      //     fetchNextPage();
      //   },
      //   function done(err) {
      //     if (err) {
      //       console.error(err);
      //       return;
      //     }
      //   }
      // );
    }


  };

  return (
    <div className={styles.main}>
      <h2>Books</h2>
      {books.length ? (
        <ul className={styles.books}>
          {books.map((book) => (
            <li  key={book.id} className={styles.book}>
                <img
                  className={styles.bookCover}
                  src={book.fields.coverPhoto[0].url}
                  alt={book.fields.title}
                  loading="lazy"
                  onClick={() => {navigate(`/book/${book.id}`)}}
                  />
              {/* <h5>{book.fields.title}</h5> */}
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.books}>
        <BookCardSkeleton cards={3}/>
        </div>
      )}

    </div>
  );
}

export default BookCard;

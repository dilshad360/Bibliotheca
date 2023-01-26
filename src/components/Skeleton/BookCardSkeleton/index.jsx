import React from 'react'
import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.css";

function BookCardSkeleton({cards}) {
  return (
        Array(cards).fill(0).map(item =>
    <div className={styles.book}>
                <Skeleton height={260}/>          
    </div>
    )
  )
}

export default BookCardSkeleton
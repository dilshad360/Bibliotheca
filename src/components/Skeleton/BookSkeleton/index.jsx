import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./styles.module.css";

function BookSkeleton() {
  return (
    <div className={styles.book}>
        <Skeleton className={styles.cover} width={260} height={400}/>
        <div className={styles.details}>
        <Skeleton width={300} height={36} />
        <Skeleton width={200} />
        <div className={styles.content}>
        <Skeleton width={300}  />
        <Skeleton width={320} count={3} />
        <Skeleton width={350}  />
        </div>
        </div>
    </div>
  )
}

export default BookSkeleton
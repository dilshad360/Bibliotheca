import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.css";

function BlogCardSkeleton({cards}) {
  return (
    Array(cards).fill(0).map(item =>
        <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Skeleton height={160} />
        </div>
        <div className={styles.text}>
          <h2>
            <Skeleton width={140} />
          </h2>
          <h3>
            <Skeleton />
          </h3>
        </div>
      </div>
        )
  );
}

export default BlogCardSkeleton;

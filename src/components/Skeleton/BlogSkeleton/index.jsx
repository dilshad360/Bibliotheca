import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.css";

function BlogSkeleton() {
  return (
    <>
      <Skeleton height={220} />
      <Skeleton className={styles.authorDetails} width={180} />
      <Skeleton width={120} />
      <Skeleton className={styles.title} width={260} height={40} />
      <div className={styles.content}>
        <Skeleton  width={300} />
        <Skeleton count={3} width={270} />
        <Skeleton width={240} />
      </div>
    </>
  );
}

export default BlogSkeleton;

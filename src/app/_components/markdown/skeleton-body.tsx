import styles from './skeleton-markdown.module.css';

export function SkeletonSection() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonDescription}></div>     
      
      <hr></hr>

      <div className={styles.skeletonSubTitle}></div>
      <div className={styles.skeletonContent}></div>
      <div className={styles.skeletonContent}></div>
      <div className={styles.skeletonContent}></div>
      <div className={styles.skeletonContent}></div>
      <div className={styles.skeletonContent}></div>
      <div className={styles.skeletonContent}></div>
      <div className={styles.skeletonContent}></div>
    </div>
  );
}
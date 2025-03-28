import style from "./user-card.module.css";

export default function SkeletonUserCard() {

  return (
    <div className={style.skeletonCard}>
      <div className={style.header}>
        <div className={style.skeletonImage}></div>
        <div className={style.skeletonDetails}>
          <div className={style.skeletonName}></div>
          <div className={style.skeletonLevel}></div>
        </div>
      </div>
      <div className={style.skeletonButton}></div>
      <div className={style.skeletonButton}></div>
      <div className={style.skeletonContent}></div>
      <div className={style.skeletonContent}></div>
      <div className={style.skeletonContent}></div>
      <div className={style.skeletonContent}></div>
    </div>
  );
}
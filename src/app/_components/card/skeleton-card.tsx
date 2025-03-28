import style from "./card.module.css";

export default async function SkeletonCard() {
  return (
    <div className={style.skeleton}>
      <div className={style.skeletonImage}></div>
      <div className={style.skeletonData}>
        <div className={style.skeletonTitle}></div>
        <div className={style.skeletonDescription}></div>
        <div className={style.skeletonDescription}></div>
      </div>
    </div>
  );
}

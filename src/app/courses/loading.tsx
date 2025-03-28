import SkeletonCard from "@/src/app/_components/card/skeleton-card";
import SkeletonHeader from "@/src/app/_components/header/skeleton-header";
import style from './course-list.module.css';

export default async function Loading() {
  return (
    <main className={style.main}>
      <SkeletonHeader/>
      <div className={style.courseList}>
        {[...Array(6).keys()].map((key) =>
          <SkeletonCard key={key}/>
        )}
      </div>
    </main>
  );
}
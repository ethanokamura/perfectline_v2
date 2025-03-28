import style from "./loading.module.css";
import SkeletonHeader from "./_components/header/skeleton-header";
import ThemedImage from "./_components/theme/theme-image";

export default function Loading() {
  return (
    <main>
      <ThemedImage
        light="/light-logo.svg"
        dark="/dark-logo.svg"
        x={128} 
        y={128}
        alt="PerfectLine Logo"
      />
      <SkeletonHeader />
      <div className={style.skeletonContent}></div>
    </main>
  );
}

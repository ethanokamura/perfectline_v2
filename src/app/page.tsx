import * as config from "@/lib/constants";
import Header from "./_components/header";
import style from "./home.module.css";
import ThemedImage from "./_components/theme-image";

export default function HomePage() {
  return (
    <main className={style.home}>
      <ThemedImage
        light="/light-logo.svg"
        dark="/dark-logo.svg"
        x={128} 
        y={128}
        alt="PerfectLine Logo"
      />
      <Header title={config.title} subtitle="Coding Academy" description={config.description} />
      <p>Unlock your potential in the exciting world of software development and embark on a transformative educational journey.</p>
    </main>
  );
}

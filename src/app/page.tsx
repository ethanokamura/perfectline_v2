import Image from "next/image";
import * as config from "@/lib/constants";
import Header from "./_components/header";
import style from "./home.module.css";

export default function Home() {
  return (
    <main className={style.home}>
        <Image
          src="/dark-logo.svg"
          width={128}
          height={128}
          alt="PerfectLine Logo"
        />
      <Header title={config.title} subtitle="Coding Academy" description={config.description} />
      <p>Unlock your potential in the exciting world of software development and embark on a transformative educational journey.</p>
    </main>
  );
}

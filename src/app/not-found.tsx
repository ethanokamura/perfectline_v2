import Link from "next/link";
import style from "./home.module.css";
import Header from "./_components/header/header";

export default function Custom404() {
  return (
    <main className={style.home}>
      <Header title="PerfectLine" subtitle="404 - Page Not Found" description="Looks like something went wrong!" />
      <Link href={'/'}>Return Home</Link>
    </main>
  )
}

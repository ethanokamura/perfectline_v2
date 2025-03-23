import Link from "next/link";
import style from "./not-found.module.css";

export default function Custom404() {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1>PerfectLine</h1>
        <h2>404 - Page Not Found</h2>
      </header>
      <Link href={'/'}>Return Home</Link>
    </main>
  )
}

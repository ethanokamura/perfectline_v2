import Link from "next/link";
import Image from "next/image";
import styles from "./nav-menu.module.css";

export default function NavMenu() {
  return  (
    <nav className={styles.nav} >
      <Link href={'/'}>
        <Image
          src="/dark-logo.svg"
          width={48}
          height={48}
          alt="PerfectLine Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/courses'}>Courses</Link>
        </li>
      </ul>
    </nav>
  );
}
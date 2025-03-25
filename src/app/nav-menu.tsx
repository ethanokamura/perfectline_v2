import Link from "next/link";
import styles from "./nav-menu.module.css";
import { SignInButton } from "./_components/buttons";
import ThemedImage from "./_components/theme-image";

export default function NavMenu() {
  return  (
    <nav className={styles.nav} >
      <Link href={'/'}>
      <ThemedImage
        light="/light-logo.svg"
        dark="/dark-logo.svg"
        x={48} 
        y={48}
        alt="PerfectLine Logo"
      />
      </Link>
      <div className={styles.menu}>
        <Link href={'/courses'}>Courses</Link>
        <SignInButton />
      </div>
    </nav>
  );
}
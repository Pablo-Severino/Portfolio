import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Navbar.module.css";

export default function IndexNavbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src="logo.svg" alt="logo" width={122} height={56} />
        </div>
      </Link>
      <ul className={styles.ul}>
        <li className={styles.skills}>
          Skills
        </li>
        <li className={styles.projects}>
          Projects
        </li>
        <li className={styles.about}>
          About
        </li>
        <li className={styles.contacts}>
          Contacts
        </li>
      </ul>
      <button className={styles.download}>
        Download CV
      </button>
    </nav>
  );
}
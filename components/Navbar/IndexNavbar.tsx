import SmoothScrollLink from '../SmoothScrollLink';

import styles from "../../styles/Navbar.module.css";

export default function IndexNavbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <SmoothScrollLink href="#skills">
          <li className={styles.skills}>
            Skills
          </li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#projects">
          <li className={styles.projects}>
            Projects
          </li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#contacts">
          <li className={styles.contacts}>
            Contacts
          </li>
        </SmoothScrollLink>
      </ul>
    </nav>
  );
}
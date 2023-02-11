import styles from "../../styles/Navbar.module.css";

export default function IndexNavbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.skills}>
          Skills
        </li>
        <li className={styles.projects}>
          Projects
        </li>
        <li className={styles.contacts}>
          Contacts
        </li>
      </ul>
    </nav>
  );
}
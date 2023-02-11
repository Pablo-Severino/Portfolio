import Image from "next/image";

// Styles
import styles from "../../styles/Footer.module.css";

export default function IndexFooter() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        2023&copy; Pablo Severino
      </span>
    </footer>
  );
}
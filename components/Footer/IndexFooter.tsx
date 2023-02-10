import Image from "next/image";

// Styles
import styles from "../../styles/Footer.module.css";

export default function IndexFooter() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        <Image src="Github.svg" alt="Vercel Logo" width={32} height={32} />
        <Image src="Instagram.svg" alt="Vercel Logo" width={32} height={32} />
        <Image src="Twitter.svg" alt="Vercel Logo" width={32} height={32} />
        <Image src="Linkedin.svg" alt="Vercel Logo" width={32} height={32} />
      </span>
    </footer>
  );
}
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_name}>
        <img src="logo.svg" alt="Logo" className={styles.logo} />
        <span className={styles.brand_name}>Kadanak</span>
      </div>
      <nav>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="#about">About</a>
          </li>
          <li className={styles.link}>
            <a href="#work">Work</a>
          </li>
          <li className={styles.link}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

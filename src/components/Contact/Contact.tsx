import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div id='contact' className={styles.container}>
      <h2 className={styles.heading}>Contact</h2>
      <ul className={styles.buttons}>
        <li>
          <a
            href="https://x.com"
            className={`${styles.x} ${styles.contact_item}`}
            target="_blank"
          >
            <img src="/x.svg" alt="X logo" />
            @KADanak
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            className={`${styles.instagram} ${styles.contact_item}`}
            target="_blank"
          >
            <img src="/instagram.svg" alt="Instagram logo" />
            @kadanak
          </a>
        </li>
        <li>
          <a
            href="mailto:kadanak@dillonb07.studio"
            className={`${styles.email} ${styles.contact_item}`}
            target="_blank"
          >
            <img src="/mail.svg" alt="Email icon" />
            hi@kadanak.co.uk
          </a>
        </li>
      </ul>
    </div>
  );
}

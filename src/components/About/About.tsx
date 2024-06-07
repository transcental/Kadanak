import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>About Us</h2>
      <div className={styles.split}>
        <p className={styles.company}>
          We at Kadanak pride ourselves on creating innovative products to
          educate people of all ages about a variety of topic in unique ways.
        </p>
        <div className={styles.people}>
          <div className={styles.person}>
            <img src="/avatars/dillon.png" alt="person" />
            <div className={styles.info}>
              <h3>Dillon Barnes</h3>
              <p className={styles.desc}>
                Lead Developer & Project Manager
              </p>
            </div>
          </div>
          <div className={styles.person}>
            <img src="/avatars/ken.png" alt="person" />
            <div className={styles.info}>
              <h3>Ken Seabrook</h3>
              <p className={styles.desc}>
                Lead Game Designer & Artist
              </p>
            </div>
          </div>
          <div className={styles.person}>
            <img src="https://via.placeholder.com/96" alt="person" />
            <div className={styles.info}>
              <h3>Antonia Diaconu</h3>
              <p className={styles.desc}>
                Lead Storyteller & Modeller
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

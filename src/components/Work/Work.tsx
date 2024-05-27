import styles from "./Work.module.css";

function Posters() {
  return (
    <div className={styles.posters}>
      <div className={styles.poster}>
        <img src="https://via.placeholder.com/260x368" alt="poster" />
        <h4>Poster Title</h4>
        <p>
          Mollit quis sit id nisi aliquip. Deserunt nisi aliquip commodo ipsum.
          Reprehenderit sunt ut mollit eu aliqua. Eiusmod duis dolore tempor non
          tempor ea fugiat. Culpa sit elit velit adipisicing Lorem ipsum sunt
          et.
        </p>
      </div>
      <div className={styles.poster}>
        <img src="https://via.placeholder.com/260x368" alt="poster" />
        <h4>Poster Title</h4>
        <p>
          Mollit quis sit id nisi aliquip. Deserunt nisi aliquip commodo ipsum.
          Reprehenderit sunt ut mollit eu aliqua. Eiusmod duis dolore tempor non
          tempor ea fugiat. Culpa sit elit velit adipisicing Lorem ipsum sunt
          et.
        </p>
      </div>
      <div className={styles.poster}>
        <img src="https://via.placeholder.com/260x368" alt="poster" />
        <h4>Poster Title</h4>
        <p>
          Mollit quis sit id nisi aliquip. Deserunt nisi aliquip commodo ipsum.
          Reprehenderit sunt ut mollit eu aliqua. Eiusmod duis dolore tempor non
          tempor ea fugiat. Culpa sit elit velit adipisicing Lorem ipsum sunt
          et.
        </p>
      </div>
      <div className={styles.poster}>
        <img src="https://via.placeholder.com/260x368" alt="poster" />
        <h4>Poster Title</h4>
        <p>
          Mollit quis sit id nisi aliquip. Deserunt nisi aliquip commodo ipsum.
          Reprehenderit sunt ut mollit eu aliqua. Eiusmod duis dolore tempor non
          tempor ea fugiat. Culpa sit elit velit adipisicing Lorem ipsum sunt
          et.
        </p>
      </div>
    </div>
  );
}

function HUDs() {
  return (
    <div className={styles.hud_container}>
      <div className={styles.hud}>
        <div className={styles.hud_info}>
          <h4>HUD Title</h4>
          <p>
            Mollit quis sit id nisi aliquip. Deserunt nisi aliquip commodo
            ipsum. Reprehenderit sunt ut mollit eu aliqua. Eiusmod duis dolore
            tempor non tempor ea fugiat. Culpa sit elit velit adipisicing Lorem
            ipsum sunt et.
          </p>
        </div>
        <img src="https://via.placeholder.com/370x262" alt="hud" />
      </div>
      <div className={styles.hud}>
        <img src="https://via.placeholder.com/370x262" alt="hud" />
        <div className={styles.hud_info}>
          <h4>HUD Title</h4>
          <p>
            Mollit quis sit id nisi aliquip. Deserunt nisi aliquip commodo
            ipsum. Reprehenderit sunt ut mollit eu aliqua. Eiusmod duis dolore
            tempor non tempor ea fugiat. Culpa sit elit velit adipisicing Lorem
            ipsum sunt et.
          </p>
        </div>
      </div>
      <div className={styles.hud}>
        <div className={styles.hud_info}>
          <h4>HUD Title</h4>
          <p>
            Mollit quis sit id nisi aliquip. Deserunt nisi aliquip commodo
            ipsum. Reprehenderit sunt ut mollit eu aliqua. Eiusmod duis dolore
            tempor non tempor ea fugiat. Culpa sit elit velit adipisicing Lorem
            ipsum sunt et.
          </p>
        </div>
        <img src="https://via.placeholder.com/370x262" alt="hud" />
      </div>
      <div className={styles.hud}>
        <img src="https://via.placeholder.com/370x262" alt="hud" />
        <div className={styles.hud_info}>
          <h4>HUD Title</h4>
          <p>
            Mollit quis sit id nisi aliquip. Deserunt nisi aliquip commodo
            ipsum. Reprehenderit sunt ut mollit eu aliqua. Eiusmod duis dolore
            tempor non tempor ea fugiat. Culpa sit elit velit adipisicing Lorem
            ipsum sunt et.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <h3 className={styles.subheading}>Posters</h3>
      <Posters />
      <h3 className={styles.subheading}>Heads Up Displays</h3>
      <HUDs />
    </div>
  );
}

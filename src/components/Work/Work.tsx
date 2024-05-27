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

export default function Work() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <h3 className={styles.subheading}>Posters</h3>
      <Posters />
    </div>
  );
}

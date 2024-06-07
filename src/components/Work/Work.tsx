import styles from "./Work.module.css";

function Posters() {
  return (
    <div className={styles.posters}>
      <div className={styles.poster}>
        <img src="/posters/dillon.png" alt="poster" className={styles.tall} />
        <h4>The Black Dome</h4>
        <p>
          Fleeb. As Fleeb takes over the world, he starts teaching young school kids about the importance of histoory through his magical machine that can take the children back through time.
        </p>
      </div>
      <div className={styles.poster}>
        <img src="/posters/ken.png" className={styles.wide} alt="poster" />
        <h4>The Black Dome</h4>
        <p>
          This is the poster for the planetarium show which we have made as a group. A small blurb describes what the show is like and the staring voice actor and the title.
          et.
        </p>
      </div>
      <div className={styles.poster}>
        <img src="/posters/antonia.jpeg" className={styles.tall} alt="poster" />
        <h4>The Black Doome</h4>
        <p>
          This is a poster we can use to advertise our planetarium show we worked on as a group, where Fleeb takes a group of students back during the plague times. 
        </p>
      </div>
    </div>
  );
}

function HUDs() {
  return (
    <div className={styles.hud_container}>
      <div className={styles.hud}>
        <img src="/huds/dillon.png" alt="hud" />
        <div className={styles.hud_info}>
          <h4>Trialing Time</h4>
          <p>
            This is a concept screenshot of a game called Trialing Time. The player gets to control Fleeb as he adventures through time. However, one wrong step and he could get lost in the threads of time forever. The HUD features several important elements. A year indicator, fuel levels, health and a hard to read radar. 
          </p>
        </div>
      </div>
      <div className={styles.hud}>
        <img src="/huds/ken.png" alt="hud" />
        <div className={styles.hud_info}>
          <h4>The Misadventures of Fleeb</h4>
          <p>
            The HUD I made contains an analogue clock with a display of the time so Fleeb knows where he is, a map, any significant events that happened written in the top right and a - and + button in case people need to see things in more detail.
          </p>
        </div>
      </div>
      <div className={styles.hud}>
        <img src="/huds/antonia.jpeg" alt="hud" />
        <div className={styles.hud_info}>
          <h4>Fleep the Hourglass</h4>
          <p>
            The HUD I made contains a map in the top left corner that shows you where specific tasks are. The top right corner has an inventory box, a Fleeb icon that leads you to the profile page, where you get to change his outfits. The backpack icon is what would give you access to time traveling. the bar at the bottom shows how much of the event you have completed.
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
      <hr />
      <Posters />
      <h3 className={styles.subheading}>Heads Up Displays</h3>
      <hr />
      <HUDs />
    </div>
  );
}

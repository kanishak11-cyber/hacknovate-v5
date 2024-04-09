import React from "react";
import styles from "./Location.module.css";
import venueLogo from "./assets/venueLogo.png";
import card from "./assets/card.png";

const Location = () => {
  return (
    <div id="Venue" className={styles.LocationCard}>
      <div className={styles.locationWrapper}>
        <div className={styles.infoContainer}>
          <img src={venueLogo} alt="" />
          <div className={styles.infosection}>
            <h1>Hackathon Venue</h1>
            <p>
              KMEA COLLEGE,<br></br>Kuzhivelippady, Aluva,<br></br>
              Kerala - India 683561
            </p>
          </div>
          <a
            href="https://www.google.com/maps/place/393H%2B8QQ+KMEA+College+of+Architecture,+Mochamkulam,+Kuzhivelippady,+Edathala,+Aluva,+Kerala+683561/@10.0533325,76.3794824,17z/data=!4m6!3m5!1s0x3b080bef6703e1a5:0x43d7d7759c8cea93!8m2!3d10.0533325!4d76.3794824!16s%2Fg%2F11g6bf7dc3"
            target="_blank"
            className={styles.atagButton}
          >
            EXPLORE
          </a>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <img src={card} alt="" />
        <div>
          <p>
            24 hours of<br></br>Coding hackathon, games &<br></br>
            events, Absolutely free of
            <br></br>cost, Food and Beverages,<br></br>Snacks and more.
          </p>
          <div className={styles.lineDiv}></div>
          <p>
            Hackathon Goodies, Karma<br></br>Points
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;

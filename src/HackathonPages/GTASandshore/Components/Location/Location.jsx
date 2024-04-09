import React from "react";
import styles from "./Location.module.css";
import venueLogo from "./assets/venueLogo.png";
import card from "./assets/card.png";
import { MailLogoSvg,PhoneLogoSvg } from "../../../../assets/svg/svg.tsx";

const Location = () => {
  return (
    <div id="Venue" className={styles.LocationCard}>
      <div className={styles.locationWrapper}>
        <div className={styles.infoContainer}>
          <img src={venueLogo} alt="" />
          <div className={styles.infosection}>
            <h1>Hackathon Venue</h1>
            <p>
              ABIDEEPS PARADISE,<br></br>Pockanchery, Vadanappally,<br></br>
              Kerala - India 680619
            </p>
          </div>
          <a
            href="https://goo.gl/maps/S12dPAnw33JfFamd6"
            target="_blank"
            className={styles.atagButton}
          >
            VISIT VENUE
          </a>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.cardWrapper}>
          <img src={card} alt="" />
          <div>
            <p>
              Beach vibe, 24 hours of<br></br>Coding hackathon, games &<br></br>
              events, Absolutely free of
              <br></br>cost, Food and Beverages,<br></br>Snacks and more.
            </p>
            <div className={styles.lineDiv}></div>
            <p>
              Hackathon Goodies, Karma<br></br>Points
            </p>
          </div>
        </div>
        <div className={styles.contactWrapper}>
          <p>Contact Us for further queries:</p>
          <div className={styles.lineDiv}></div>
          <div className={styles.innerContentWrapper}>
            <div>
              <MailLogoSvg />
              <a href="mailto:events@mulearn.in">events@mulearn.in</a>
            </div>
            <div>
              <PhoneLogoSvg />
              <div style={{display:"flex",flexDirection:"column"}}>
                <a href="tel:+91 79940 43754">+91 79940 43754</a>
                <a href="tel:+91 94007 43624">+91 94007 43624</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

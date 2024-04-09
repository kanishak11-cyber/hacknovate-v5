import React from "react";
import styles from "./Location.module.css";
import card from "./assets/card.png";
import {PhoneLogoSvg,MailLogoSvg} from '../../../assets/svg/svg.tsx'

const Location = () => {
  return (
    <div id="Support" className={styles.LocationCard}>
      <div className={styles.bottomWrapper}>
        <div className={styles.cardWrapper}>
          <img src={card} alt="" />
          <div>
            <p>
              Grand Tech Adventures<br></br> hackathon, Games & Events,<br></br> Absolutely free
              of cost, Food <br></br>and Beverages, Snacks and<br></br> more.
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
              <div style={{ display: "flex", flexDirection: "column" }}>
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

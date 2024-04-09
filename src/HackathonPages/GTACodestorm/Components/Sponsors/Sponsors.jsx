import React from "react";
import styles from "./Sponsors.module.css";

import twinkle from "../../../../assets/images/singlestar.png";
import solana from "./assets/Solana.png";
import filecoin from "./assets/filecoin.png";
import devfolio from "./assets/devfolio.png";
import fundesign from "./assets/fundesign.png";
import Mulearn from './assets/µLearn.png'
import KKem from './assets/KKEMLogo.png'
import polygon from "./assets/polygon.png";
import replict from "./assets/Replit.png";
import whitecard from "./assets/white-cut-rect.png";
import uparrow from "./assets/pink-up-arrow.png";
const Sponsors = () => {
  return (
    <section id="sponsors">
      <div className={styles.contactsWrapper}>
        <h1 className={styles.headingTeam}>Our Sponsors</h1>

        <div className={styles.sponsorsLogoWrapper}>
          <div className={styles.divSponsorsTire}>
            <div className={styles.companySponsorsDiv}>
              <a href="https://knowledgemission.kerala.gov.in/" target="_blank">
                <img src={KKem} alt="KKEM" />
              </a>{" "}
              <a href="https://mulearn.org/" target="_blank">
                <img src={Mulearn} alt="mulearn" />
              </a>
            </div>
            <div className={styles.twinkleSponsors}>
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

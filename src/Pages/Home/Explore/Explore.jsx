import React from "react";
import styles from "./Explore.module.css";
import image from "./assets/image.svg";
import Mulearn from "./assets/µLearn.png";
import KKEM from "./assets/KKEMLogo.png";

const Explore = () => {
  return (
    <div id="Explore" className={styles.OverviewWrapper}>
      <div className={styles.InnerDiv}>
        <img src={image} alt="" />
        <div>
          <img src={KKEM} alt="" />
          <h1>
            Empowering Innovation<br></br>and Collaboration
          </h1>
          <p>
            KKEM is actively driving the Grand Tech Adventure (GTA) hackathon
            series to transform Kerala into a Knowledge Society. Their committed
            partnership amplifies opportunities for aspiring tech individuals,
            turning the event into a platform for job-centric skills. As the
            organizer of the GTA Hackathon, KKEM provides youth the chance to
            display their abilities, address actual challenges, and network with
            professionals. Their aim to empower young people through jobs aligns
            perfectly with the hackathon's objectives.
          </p>
          <a href="">EXPLORE KKEM</a>
        </div>
      </div>
      <div className={styles.InnerDiv + " " + styles.Mulearn}>
        <img src={image} alt="" />
        <div>
          <img src={Mulearn} alt="" />
          <h1>
            Empowering Innovation<br></br>and Collaboration
          </h1>
          <p>
            Mulearn spearheads the Grand Tech Adventure (GTA) hackathon series,
            aiming to turn Kerala into a Knowledge Society. Their solid
            partnership increases prospects for upcoming tech enthusiasts,
            positioning the event as a springboard for employment-focused
            abilities. As the organizer of the GTA Hackathon, Mulearn offers
            youth a platform to present their skills, solve real-world issues,
            and engage with industry leaders. Their mission to boost the youth
            via worthwhile jobs matches the hackathon's aims.
          </p>
          <a href="https://mulearn.org" target="_blank">EXPLORE MuLeaarn</a>
        </div>
      </div>
    </div>
  );
};

export default Explore;

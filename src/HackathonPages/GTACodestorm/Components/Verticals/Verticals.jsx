import React from "react";
import styles from "./Verticals.module.css";
import arvr from "./assets/arvr.svg";
import Aiml from "./assets/aiml.svg";
import web from "./assets/website.svg";
import Appli from "./assets/application.svg";
const Verticals = () => {
  return (
    <div className={styles.verticalWrapper}>
      <h1>Our Verticals</h1>
      <div className={styles.contentContainer}>
        <div>
          <img src={Aiml} alt="" />
        </div>
        <div>
          <img src={arvr} alt="" />
        </div>
        <div>
          <img src={web} alt="" />
        </div>
        <div>
          <img src={Appli} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Verticals;

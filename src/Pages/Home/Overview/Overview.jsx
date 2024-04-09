import React from "react";
import styles from "./Overview.module.css";
import image from "./assets/Image.svg";

const Overview = () => {
  return (
    <div id="Overview" className={styles.OverviewWrapper}>
      <div className={styles.InnerDiv}>
        <img src={image} alt="" />
        <div>
          <h1>What is GTA?</h1>
          <p>
            Get ready to embark on a transformative journey of innovation and
            collaboration with the Grand Tech Adventures (GTA) series. Our
            7-series offline hackathon saga is designed to redefine the way
            young minds experience technology and problem-solving. Each event is
            a chapter in this epic tech odyssey, uniting students, mentors, and
            industry leaders to explore a world of endless possibilities. Get
            ready for the next wave of innovation and tech brilliance as we
            introduce GTA: Sandshore Hackathon. After the success of CodeStorm,
            the adventure continues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;

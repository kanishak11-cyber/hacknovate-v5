import React from "react";
import styles from "./Prizes.module.css";

const Prizes = () => {
  return (
    <div className={styles.prizeWrapper}>
      <div className={styles.amountWrapper}>
        <div>
          <h2>FIRST PRIZE</h2>
          <h1 className={styles.first}>15,000 INR</h1>
        </div>
        <div>
          <h2>SECOND PRIZE</h2>
          <h1 className={styles.second}>7,500 INR</h1>
        </div>{" "}
        <div>
          <h2>THIRD PRIZE</h2>
          <h1 className={styles.third}>3,000 INR</h1>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        ** NOTE : For all track 1st, 2nd & 3rd prize are available **
      </p>
    </div>
  );
};

export default Prizes;

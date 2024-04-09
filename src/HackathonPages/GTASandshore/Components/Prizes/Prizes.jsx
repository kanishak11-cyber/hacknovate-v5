import React from "react";
import styles from "./Prizes.module.css";

const Prizes = () => {
  return (
    <div className={styles.prizeWrapper}>
      <div className={styles.amountWrapper}>
        <div>
          <h2>FIRST PRIZE</h2>
          <h1 className={styles.first}>10,000 INR</h1>
        </div>
        <div>
          <h2>SECOND PRIZE</h2>
          <h1 className={styles.second}>5,000 INR</h1>
        </div>
      </div>
      <p style={{ textAlign: "center", color: "#888888" }}>
        Note: The first and second prizes are given for each verticals
        separately.
      </p>
    </div>
  );
};

export default Prizes;

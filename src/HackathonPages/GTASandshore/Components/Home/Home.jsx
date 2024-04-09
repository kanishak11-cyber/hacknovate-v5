import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import sandshoreLogo from "../../../../assets/images/gtasandshoreLogo.png";
import fivestar from "../../assets/5stargrp.png";

const Home = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Set your target date here
  const targetDate = new Date("2023-11-11T08:59:59");

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date().getTime();
      const targetTime = targetDate.getTime();
      const timeDifference = targetTime - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setRemainingTime({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    const intervalId = setInterval(calculateRemainingTime, 1000);

    calculateRemainingTime(); // Calculate initial time difference immediately

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className={styles.HomeWrapper}>
        <div className={styles.homelogodevfolio}>
          <img src={sandshoreLogo} alt="" />
          <h2 style={{ textAlign: "center" }}>HACKATHON</h2>
          <img
            src={fivestar}
            alt=""
            style={{ marginBottom: "8px", marginTop: "0px" }}
          />
          <div
            class="apply-button"
            data-hackathon-slug="gta-sandshores"
            data-button-theme="dark-inverted"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
      </div>
      <div className={styles.homeFooter}>
        <div>
          <h1>{String(remainingTime.days).padStart(2, "0")}</h1>
          <p>DAYS</p>
        </div>
        <div>
          <h1>{String(remainingTime.hours).padStart(2, "0")}</h1>
          <p>HOURS</p>
        </div>
        <div>
          <h1>{String(remainingTime.minutes).padStart(2, "0")}</h1>
          <p>MINUTES</p>
        </div>
        <div>
          <h1>{String(remainingTime.seconds).padStart(2, "0")}</h1>
          <p>SECONDS</p>
        </div>
      </div>
    </>
  );
};

export default Home;

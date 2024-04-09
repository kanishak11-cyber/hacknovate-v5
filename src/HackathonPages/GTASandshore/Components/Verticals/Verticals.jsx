import React from "react";
import styles from "./Verticals.module.css";
import arvr from "./assets/arvr.svg";
import Aiml from "./assets/aiml.svg";
import web from "./assets/website.svg";
import Appli from "./assets/application.svg";
const Verticals = () => {
  return (
    <>
      <div className={styles.verticalWrapper}>
        <h1>Our Verticals</h1>
        <div className={styles.contentContainer}>
          <div>
            <img src={Aiml} alt="" loading="lazy" />
          </div>
          <div>
            <img src={arvr} alt="" loading="lazy" />
          </div>
          <div>
            <img src={web} alt="" loading="lazy" />
          </div>
          <div>
            <img src={Appli} alt="" loading="lazy" />
          </div>
        </div>
      </div>
      <div className={styles.verticalWrapper}>
        <h1>Problem Stetements</h1>
        <div className={styles.contentContainer + " " + styles.problem}>
          <a href="https://mulearnfoundation.notion.site/AI-ML-fa133a33fe93439ba718d0294037564a">
            AI / ML
          </a>
          <a href="https://mulearnfoundation.notion.site/AR-VR-7ffccc2649af4f7ca4aeded12c0a5b5a">
            AR / VR
          </a>
          <a href="https://mulearnfoundation.notion.site/WEB-and-APP-69d350902d8c4b54b38458564f52aaf8">
            WEBSITE
          </a>
          <a href="https://mulearnfoundation.notion.site/WEB-and-APP-69d350902d8c4b54b38458564f52aaf8">
            APPLICATION
          </a>
        </div>
      </div>
      <div className={styles.submitLink}>
        <div>
          <p>Solutions</p>
        </div>
        <a
          href="https://airtable.com/apppADe83MpHBM05J/shrTSIqyz7NeAn57d"
          target="_blank"
        >
          Submit
        </a>
      </div>
    </>
  );
};

export default Verticals;

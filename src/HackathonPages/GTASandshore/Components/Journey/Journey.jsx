import React from "react";
import styles from "./Journey.module.css";
import map from "./assets/background.svg";
import {
  PersonSvg,
  CompusSvg,
  ComputerSvg,
} from "../../../../assets/svg/svg.tsx";
import Check from "./assets/Checkpoint.png";
const Journey = () => {
  return (
    <div id="Journey" className={styles.outerWrapper}>
      <div className={styles.journeyWrapper}>
        <h1>Journey Map</h1>
        <div className={styles.mapWrapper}>
          <img className={styles.background} src={map} alt="" />
          <div className={styles.maskbg}></div>
          {/* <div className={styles.timelineWrapper}>
            <div className={styles.container + " " + styles.first}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Registration Starts</p>
              </div>
            </div>
            <div className={styles.strip1}></div>
            <div className={styles.strip1Sub}></div>

            <div className={styles.container + " " + styles.second}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>October 20</h3>
                <p>Registration Ends</p>
              </div>
            </div>
            <div className={styles.strip2}></div>
            <div className={styles.strip2Sub}></div>
            <div className={styles.strip2Sub2}></div>

            <div className={styles.container + " " + styles.third}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>October 22</h3>
                <p>First Shortlisting</p>
              </div>
            </div>
            <div className={styles.strip3}></div>
            <div className={styles.strip3Sub}></div>

            <div className={styles.container + " " + styles.four}>
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Shortlisting Process Ends</p>
              </div>
              <PersonSvg />

              <div className={styles.yellowCircle}></div>
            </div>
            <div className={styles.strip4}></div>
            <div className={styles.strip4Sub}></div>

            <div className={styles.container + " " + styles.five}>
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Shortlisted teams announced</p>
              </div>
              <img src={Check} alt="" />

              <div className={styles.yellowCircle}></div>
            </div>
            <div className={styles.strip5}></div>

            <div className={styles.container + " " + styles.six}>
              <div className={styles.inner}>
                <h3>November 11</h3>
                <p>Hackathon Starts</p>
              </div>
              <PersonSvg />

              <div className={styles.yellowCircle}></div>
            </div>
            <div className={styles.strip6}></div>
            <div className={styles.strip6Sub}></div>

            <div className={styles.container + " " + styles.seven}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>November 12</h3>
                <p>Hackathon Ends</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Journey;

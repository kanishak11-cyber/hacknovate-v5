import React from 'react'
import styles from './About.module.css'

import {PinkShade } from '../../../../assets/svg/svg.tsx'
import logo from "../../../../assets/images/gtasandshoreLogo.png"
import star from "../../../../assets/images/singlestar.png"
const About = () => {
  return (
    <div id="Overview" className={styles.aboutWrapper}>
      <div className={styles.leftContainer}>
        <img src={logo} alt="" />
        <p>HACKATHON</p>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <img src={star} alt="" />
          <h1>11-12</h1>
          <h2>NOVEMBER 2023</h2>
          <PinkShade />
        </div>
        <div>
          <img src={star} alt="" />
          <h1>1L+</h1>
          <h2>PRIZEPOOL</h2>
          <PinkShade />
        </div>
      </div>
    </div>
  );
}

export default About

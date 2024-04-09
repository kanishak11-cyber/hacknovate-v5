import React from "react";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Overview from "./Overview/Overview";
import Explore from "./Explore/Explore";
import WhyGTA from "./WhyGTA/WhyGTA";
import TheSeries from "./theSeries/theSeries";
import Location from "./Location/Location";
import Footer from "../../Components/Footer/Footer";
import styles from './Home.module.css'
// import GTASandshores from '../../HackathonPages/GTASandshore/GTASandshore'

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Navbar />
      <Landing />
      <Overview />
      <Explore />
      <WhyGTA />
      <TheSeries />
      <Location />
      <Footer />
      {/* <GTASandshores /> */}
    </div>
  );
};

export default Home;

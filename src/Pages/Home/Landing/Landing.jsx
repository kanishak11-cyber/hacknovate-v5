import React, { useRef, useState, useEffect } from "react";
import styles from "./Landing.module.css";
import vid from "./land.mp4";
import { useReactPath } from "../Navbar/path.hook.js";

const Landing = () => {
  const path = useReactPath();
  const videoRef = useRef(null); // Create a ref
  const [navbg, setNavBg] = useState(false);

  useEffect(() => {}, [path]);

  const changeNavBg = () => {
    window.scrollY >= 0 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    if (window.innerWidth < 620 && navbg && videoRef.current) {
      videoRef.current.play(); // Use the ref to play the video
	//   videoRef.current.muted = false;
    }
  }, [navbg]);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div className={styles.landingWrapper}>
      <div className={styles.videoWrapper}>
        {/* <iframe
          className={styles.iframeelement}
          src="https://www.youtube.com/embed/CaQ8MmCdmwM?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playsinline=1&start=0&fs=0&playlist=CaQ8MmCdmwM"
          allow="autoplay; fullscreen"
        ></iframe> */}
        <video ref={videoRef} autoPlay loop muted preload="auto">
          <source src={vid} type="video/mp4"></source>
        </video>
      </div>
      <div className={styles.landingContentWrapper}>
        <div className={styles.contentWrapper}>
          <h3>GTA : SandShores</h3>
          <h3>Registrations Closed!</h3>
          <p>
            Experience the beach hackathon that you’ve<br></br>never experienced
            before!
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/sandshores">EXPLORE HACKATHON</a>
            {/* <a href="https://gta-sandshores.devfolio.co/">APPLY NOW</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

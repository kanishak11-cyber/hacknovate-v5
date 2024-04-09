import React, { useEffect, useState } from "react";
import { ULearn, GTALogo } from "../../../assets/svg/svg.tsx";
import styles from "./Navbar.module.css";
import { useReactPath } from "./path.hook.js";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const path = useReactPath();
  const navContent = [
    "Overview",
    "The-Series",
    "Why-GTA?",
    "Explore",
    "Support",
  ];
  useEffect(() => {}, [path]);
  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <>
      <div
        className={styles.navbarWrapper}
        style={{
          background: navbg ? "rgba(0,0,0,0.8)" : "rgba(0, 0, 0, 0.3)",
        }}
      >
        <a href="/" className={styles.navLogoWrapper}>
          <ULearn />
          <div></div>
          <GTALogo />
        </a>
        <div className={styles.navigationContentWrapper}>
          {" "}
          {navContent.map((content, i) => (
            <a
              href={`#${content}`}
              key={i.toString() + content}
              className={styles.atagWrapper}
            >
              <p
                style={{
                  borderBottom: window.location.href.includes(`#${content}`)
                    ? "4px solid #fff"
                    : "",
                  padding: "10px 5px 20px",
                  margin: "0px 0px",
                  color: window.location.href.includes(`#${content}`)
                    ? "#fff"
                    : "#E8E8E8",
                  fontWeight: window.location.href.includes(`#${content}`)
                    ? 700
                    : 400,
                }}
              >
                {content}
              </p>
            </a>
          ))}
        </div>
        <a
          href="https://gta-sandshores.devfolio.co/"
          className={styles.navRegisterButton}
        >
          REGISTERATION CLOSED
        </a>
      </div>
      <div
        className={styles.mobileNav}
        style={{
          background: navbg ? "rgba(0,0,0,0.6)" : "rgba(0, 0, 0, 0.85)",
        }}
      >
        <a href="/" className={styles.navLogoWrapper}>
          <GTALogo />
        </a>
        <button onClick={openMenu}>
          <HiMenu className={styles.menuHamburger} />
        </button>
        {openmenu && (
          <div className={styles.menuDiv}>
            {navContent.map((content, i) => (
              <a href={`#${content}`} key={i.toString() + content}>
                <p
                  style={{
                    color: window.location.href.includes(`#${content}`)
                      ? "#fff"
                      : "#E8E8E8",
                    fontWeight: window.location.href.includes(`#${content}`)
                      ? 700
                      : 400,
                  }}
                >
                  {content}
                </p>
              </a>
            ))}
            <a
              href="https://gta-sandshores.devfolio.co/"
              className={styles.navRegisterButton}
            >
              REGISTERATION CLOSED
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

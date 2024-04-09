import React from "react";
import styles from "./theSeries.module.css";

import codestorm from "./assets/codestorm.svg";
import bgcodestorm from "./assets/bgCodestorm.svg";
import sandshores from "./assets/sandshore.svg";
import bgsandshores from "./assets/bgSandshores.svg";

const theSeries = () => {
    const data = [
        {
            title: "GTA Sandshore Hackathon",
            venue: "Abideep's Paradise",
            para: "Get ready for the next wave of innovation and tech brilliance as we introduce GTA: Sandshore Hackathon. After the success of CodeStorm, the adventure continues.",
            explore: "/sandshores",
            profile: sandshores,
            bg: bgsandshores,
        },
        {
            title: "GTA CodeStorm Hackathon",
            venue: "KMEA College of Architechture",
            para: "Get ready for the next wave of innovation and tech brilliance as we introduce GTA: Sandshore Hackathon. After the success of CodeStorm, the adventure continues.",
            explore: "/codestorm",
            profile: codestorm,
            bg: bgcodestorm,
        },
    ];
    return (
        <div id="The-Series" className={styles.theSeriesWrapper}>
            {data.map(({ title, venue, para, explore, profile, bg }, i) => (
                <div className={styles.individual}>
                    <div
                        style={{
                            background: `url(${bg}) center center/cover no-repeat`,
                        }}
                        className={styles.individualTop}
                    >
                        <img src={profile} alt="" />
                    </div>
                    <div className={styles.individualBottom}>
                        <h1>{title}</h1>
                        <p>{venue}</p>
                        <p>{para}</p>
                        <a href={explore}>Explore Hackathon</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default theSeries;

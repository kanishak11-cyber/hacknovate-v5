import React, { useState, useEffect } from "react";
import styles from "./Leaderboard.module.css";
import Footer from "../Footer/Footer";
import { BackButtonSvg } from "../../assets/svg/svg.tsx";
import { getLeaderboard } from "./LeaderboardApi";

const Leaderboard = ({ leaderboardUrl, backUrl, registerUrl }) => {
    const [content, setContent] = useState({});
    const [processedContent, setProcessedContent] = useState({}); // New state variable

    useEffect(() => {
        getLeaderboard(setContent, leaderboardUrl);
    }, [leaderboardUrl]);

    useEffect(() => {
        if (!content || Object.keys(content).length === 0) return;

        function processCollegeName(name) {
            let nameWithSpaces = name
                .replace(/of/g, " of ")
                .replace(/joseph's/g, " joseph's ")
                .replace(/sree/g, " sree ")
                .replace(/apj/g, " aPJ ")
                .replace(/abdul/g, " abdul ")
                .replace(/kalam/g, " kalam ")
                .replace(/science/g, " science ")
                .replace(/government/g, " government ")
                .replace(/institute/g, " institute ")
                .replace(/university/g, " university ")
                .replace(/college/g, " college ")
                .replace(/technology/g, " technology ")
                .replace(/engineering/g, " engineering ");

            let capitalizedNames = nameWithSpaces.split(" ").map((word) => {
                // list of words you do not want to capitalize
                const exceptions = ["of", "and"];
                if (exceptions.includes(word.toLowerCase())) {
                    return word.toLowerCase();
                }
                return word.charAt(0).toUpperCase() + word.slice(1);
            });

            return capitalizedNames.join(" ");
        }

        let newData = {};
        for (let key in content) {
            if (content.hasOwnProperty(key)) {
                newData[processCollegeName(key)] = content[key];
            }
        }
        setProcessedContent(newData); // Update the processed data
    }, [content]);

    return (
        <div className={styles.leaderboardWrapper}>
            <div className={styles.leaderboardNavigation}>
                <a href={backUrl}>
                    <BackButtonSvg />
                    <span>Back</span>
                </a>
                <h1>LEADERBOARD</h1>
                <a href={registerUrl} className={styles.register}>
                    REGISTER
                </a>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>College Name</th>
                        <th>Reg No's</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(processedContent)
                        .slice(0, 15) // Slice the first 15 entries
                        .map(([college, regNo], i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{college}</td>
                                <td>{regNo}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
};

export default Leaderboard;
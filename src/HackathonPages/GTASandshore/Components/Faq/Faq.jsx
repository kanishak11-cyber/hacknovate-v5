import React, { useEffect, useState } from "react";
import styles from "./Faq.module.css";
import img from "./assets/Details.png";
import { ArrowUp, ArrowDown } from "../../../../assets/svg/svg.tsx";

const Faq = ({ heading, para, isOpen, onToggle }) => {
    return (
        <div className={styles.faqContentWrapper}>
            <div
                style={{
                    background: isOpen
                        ? `url(${img})center center/cover no-repeat`
                        : "#000",
                }}
                className={styles.Container}
            >
                <div className={styles.header}>
                    <h1>{heading}</h1>
                    <button onClick={onToggle}>
                        {isOpen ? <ArrowUp /> : <ArrowDown />}
                    </button>{" "}
                </div>

                {isOpen && (
                    <div>
                        <p>{para}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Faq;
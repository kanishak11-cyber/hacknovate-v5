import React, { useState } from "react";
import styles from "./Faq.module.css";

import FAQ from "./Faq";
const Faq1 = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const faqArray = [
    {
      heading: "What is the maximum team size allowed?",
      para: "Teams can consist of 2 to 4 members for participation in the hackathon.",
    },
    {
      heading: "Is there a registration fee for the hackathon?",
      para: "Registration is entirely free of charge. No fees are required for participation.",
    },
    {
      heading: "Can we work on pre-existing projects?",
      para: "No, participants are strictly required to develop a prototype within a 24-hour timeframe, based on the problem statements provided.",
    },
  ];

  return (
    <div id="FAQs" className={styles.faqWrapper}>
      <h1 style={{ color: "#fff", textAlign: "center" }}>FAQs</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "7px",
        }}
      >
        {faqArray.map(({ heading, para }, i) => (
          <FAQ
            heading={heading}
            para={para}
            isOpen={openIndex === i}
            onToggle={() => {
              if (openIndex === i) {
                setOpenIndex(-1); // Close the currently open FAQ
              } else {
                setOpenIndex(i); // Open the clicked FAQ and close others
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq1;

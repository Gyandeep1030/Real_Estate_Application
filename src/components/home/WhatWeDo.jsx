import React from "react";
import styles from "./WhatWeDo.module.css";
import key from "../../assets/icons/key.png";
import lock from "../../assets/icons/lock.png";
import mic from "../../assets/icons/mic.png";
import performance from "../../assets/icons/performance.png";

const WhatWeDo = () => {
  const features = [
    {
      id: 1,
      icon: performance,
      title: "Buy & Sell Properties",
      desc: "Find verified homes for sale or list your property with ease.",
    },
    {
      id: 2,
      icon: key,
      title: "Find Rental Homes",
      desc: "Browse through thousands of rental options suited to your needs.",
    },
    {
      id: 3,
      icon: mic,
      title: "Smart AI Property Search",
      desc: "Get instant recommendations based on your budget & location.",
    },
    {
      id: 4,
      icon: lock,
      title: "Safe & Secure Transactions",
      desc: "Verified listings & secure deals to ensure a smooth experience.",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What We Do?</h2>
      <p className={styles.subheading}>
        Helping you find, buy, and rent the perfect property with ease.
      </p>

      <div className={styles.grid}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={feature.icon} alt={feature.title} className={styles.iconImg} />
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.desc}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;

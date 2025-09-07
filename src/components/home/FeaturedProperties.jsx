import React from "react";
import styles from "./FeaturedProperties.module.css";

import mainImg from "../../assets/image/house5.png";
import img2 from "../../assets/image/house2.png";
import img3 from "../../assets/image/house3.png";
import img4 from "../../assets/image/house4.png";

const FeaturedProperty = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.heading}>Featured Property</h2>
        <button className={styles.projectsBtn}>See 268 New Projects ↗</button>
      </div>

      {/* Property Grid */}
      <div className={styles.grid}>
        {/* Left big image */}
        <div className={styles.mainCard}>
          <img src={mainImg} alt="Kenanga Residence" />
          <div className={styles.overlay}>
            <p className={styles.by}>By Finder & Projects</p>
            <h3 className={styles.title}>Kenanga Residence</h3>
          </div>
        </div>

        {/* Right side grid */}
        <div className={styles.rightGrid}>
          <div className={styles.tallImage}>
            <img src={img4} alt="Property" />
          </div>
          <div className={styles.smallGrid}>
            <img src={img2} alt="Property" />
            <img src={img3} alt="Property" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;

import React from "react";
import styles from "./ClientProperties.module.css";
import img1 from "../../assets/image/Rectangle19.png";
import img2 from "../../assets/image/Rectangle20.png";
import cash from "../../assets/icons/cash.png";
import trust from "../../assets/icons/trusted.png";
import map from "../../assets/icons/map.png";


const ClientProperties = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Images */}
        <div className={styles.images}>
          <img src={img1} alt="Property 1" className={styles.img1} />
          <img src={img2} alt="Property 2" className={styles.img2} />
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            We Provide Latest Properties <br /> For Our Valuable Clients
          </h2>

          <div className={styles.feature}>
            <span className={styles.icon}><img src={cash} alt="" /></span>
            <div>
              <h3 className={styles.featureTitle}>Budget Friendly</h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
                tempus. Lectus quis pretium varius iaculis sed.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <span className={styles.icon}><img src={trust} alt="" /></span>
            <div>
              <h3 className={styles.featureTitle}>Trusted By Thousand</h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
                tempus. Lectus quis pretium varius iaculis sed.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <span className={styles.icon}><img src={map} alt="" /></span>
            <div>
              <h3 className={styles.featureTitle}>Prime Location</h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
                tempus. Lectus quis pretium varius iaculis sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProperties;

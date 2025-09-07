import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/image/Vector.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h2 className={styles.heading}>Get in Touch with Us</h2>
          <p className={styles.subheading}>
            Subscribe now for exclusive property insights and deals!
          </p>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>

        {/* Links + Bottom */}
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src={logo} alt="PropBot Logo" />
              <span>PropBot</span>
            </div>
          </div>
          <ul className={styles.links}>
            <li>For Sale</li>
            <li>Rentals</li>
            <li>New Projects</li>
            <li>Property News</li>
          </ul>
          <div className={styles.right}>
            <p>@2025 PropBot. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

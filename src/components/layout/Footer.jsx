import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/sale">For Sale</a>
          <a href="/rentals">Rentals</a>
          <a href="/projects">New Projects</a>
          <a href="/news">Property News</a>
        </div>
        <p className={styles.copy}>
          ©2025 PropBot. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

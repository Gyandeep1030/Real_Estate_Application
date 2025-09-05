import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Get in Touch with Us</h2>
      <p className={styles.text}>
        Subscribe now for exclusive property insights and deals!
      </p>
      <div className={styles.form}>
        <input type="email" placeholder="Enter your email" />
        <button>Submit</button>
      </div>
    </section>
  );
};

export default Newsletter;

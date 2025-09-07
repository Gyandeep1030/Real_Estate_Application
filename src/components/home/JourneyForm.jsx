import React from "react";
import styles from "./JourneyForm.module.css";

const JourneyForm = () => {
  return (
    <section className={styles.section}>
      {/* Heading */}
      <h2 className={styles.heading}>Start Your Journey Today!</h2>
      <p className={styles.subheading}>
        Create a profile in seconds and find your ideal home.
      </p>

      {/* Form */}
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className={styles.input}
        />
        <select className={styles.input}>
          <option value="">Select User Type</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="agent">Agent</option>
        </select>
        <input
          type="text"
          placeholder="Enter Your Location"
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Continue
        </button>
      </form>
    </section>
  );
};

export default JourneyForm;

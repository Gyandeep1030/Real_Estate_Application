import React from "react";
import SignupForm from "../components/auth/SignupForm";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <section className={styles.signupPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>Create New Account</h2>
        <p className={styles.subtitle}>
          Join PropBot today and start your property journey.
        </p>
        <SignupForm />
      </div>
    </section>
  );
};

export default Signup;

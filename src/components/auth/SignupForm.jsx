import React, { useState } from "react";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted:", formData);
    // TODO: integrate with Firebase/AuthContext
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className={styles.inputGroup}>
        <label htmlFor="fullName">Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter Your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email Id"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password */}
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {/* Confirm Password */}
      <div className={styles.inputGroup}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Your Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit */}
      <button type="submit" className={styles.signupBtn}>
        Create Account
      </button>

      {/* Footer */}
      <p className={styles.footerText}>
        Already have an account?{" "}
        <a href="/login" className={styles.link}>
          Log In
        </a>
      </p>
    </form>
  );
};

export default SignupForm;

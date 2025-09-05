import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // TODO: integrate with AuthContext or Firebase
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Log In</h2>

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

      {/* Remember Me + Forgot Password */}
      <div className={styles.options}>
        <label className={styles.remember}>
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember Me
        </label>
        <a href="/forgot-password" className={styles.forgot}>
          Forgot Password?
        </a>
      </div>

      {/* Submit Button */}
      <button type="submit" className={styles.loginBtn}>
        Log In
      </button>

      {/* Divider */}
      <div className={styles.divider}>OR CONTINUE WITH</div>

      {/* Social Logins */}
      <div className={styles.socials}>
        <button type="button" className={styles.socialBtn}>
          Google
        </button>
        <button type="button" className={styles.socialBtn}>
          Facebook
        </button>
      </div>

      {/* Footer Links */}
      <p className={styles.footerText}>
        Doesn’t have an account?{" "}
        <a href="/signup" className={styles.link}>
          Create One
        </a>
      </p>
    </form>
  );
};

export default LoginForm;

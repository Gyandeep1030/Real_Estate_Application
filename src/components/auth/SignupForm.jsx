import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });
      navigate("/login");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch {
      setError("Google signup failed. Try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2 className={styles.heading}>Create new account</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <div className={styles.inputWithIcon}>
              <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            </div>
          
          </div>

          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <div className={styles.inputWithIcon}>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Id"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className={styles.icon}>✉️</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.inputWithIcon}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <div className={styles.inputWithIcon}>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Your Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className={styles.icon}
                onClick={() => setShowConfirm(!showConfirm)}
              >
                👁
              </span>
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.createBtn}>
            Create Account
          </button>
        </form>

        <div className={styles.socials}>
          <button className={styles.socialBtn}>
            <img src="/src/assets/icons/Apple.png" alt="Apple Logo" />
          </button>
          <button className={styles.socialBtn}>
            <img src="/src/assets/icons/Facebook.png" alt="Facebook Logo" />
          </button>
          <button className={styles.socialBtn} onClick={handleGoogleSignup}>
            <img src="/src/assets/icons/Google.png" alt="Google Logo" />
          </button>
        </div>

        <p className={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" className={styles.loginLink}>
            Log In
          </Link>
        </p>
      </div>

      <div className={styles.imageSection}>
        <img
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
          alt="Modern House"
        />
      </div>
    </div>
  );
};

export default SignupForm;

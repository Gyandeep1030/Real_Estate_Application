import React, { useState, useEffect } from "react";
import styles from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      toast.info("You are already logged in", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      toast.info("You are already logged in", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setError("");
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Try again.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    if (auth.currentUser) {
      toast.info("You are already logged in", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } catch {
      setError("Google login failed. Try again.");
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.formSection}>
        <h2 className={styles.heading}>Log In</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
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

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input type="checkbox" /> Remember Me
            </label>
            <Link to="/forgot-password" className={styles.forgot}>
              Forgot Password?
            </Link>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.loginBtn}>
            Log In
          </button>
        </form>

        <div className={styles.divider}>
          <span></span>
          <p>OR CONTINUE WITH</p>
          <span></span>
        </div>

        <div className={styles.socials}>
          <button className={styles.socialBtn}>
            <img src="/icons/Apple.png" alt="Apple Logo" />
          </button>
          <button className={styles.socialBtn}>
            <img src="/icons/Facebook.png" alt="Facebook Logo" />
          </button>
          <button className={styles.socialBtn} onClick={handleGoogleLogin}>
            <img src="/icons/google.png" alt="Google Logo" />
          </button>
        </div>

        <p className={styles.footerText}>
          Doesn't have an account?{" "}
          <Link to="/signup" className={styles.signupLink}>
            Create One
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
export default LoginForm;

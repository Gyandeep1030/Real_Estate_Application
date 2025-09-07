import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ArrowRight } from "lucide-react"; // using lucide-react icons
import logo from "../../assets/image/Vector.png";
const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const isAuthPage = ["/login", "/signup", "/loginform", "/signupform"].includes(path);

  if (isAuthPage) {
    return (
      <header className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.backButtonContainer}>
            <Link to="/" className={styles.backButton}>
              ← Back to Homepage
            </Link>
          </div>
          <div className={styles.logoContainer}>
            <img src={logo} alt="PropBot Logo" />
            <div className={styles.logo}>PropBot</div>
          </div>
          <div className={styles.aboutButtonContainer}>
            <Link to="/about" className={styles.aboutButton}>
              About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" />
          <div className={styles.logo}>PropBot</div>
        </div>

        {/* Nav Links */}
        <nav className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/buy">Buy</a>
          <a href="/rent">Rent</a>
          <a href="/sell">Sell</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </nav>

        {/* Auth Button */}
        <div className={styles.authButton}>
          <a href="/login">
            Login / Register <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

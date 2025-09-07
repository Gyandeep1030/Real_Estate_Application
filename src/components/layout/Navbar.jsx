import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ArrowRight } from "lucide-react"; // using lucide-react icons
import logo from "../../assets/image/Vector.png";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const isAuthPage = ["/login", "/signup", "/loginform", "/signupform"].includes(path);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

        {/* Hamburger Button */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Nav Links */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/buy" onClick={() => setMenuOpen(false)}>Buy</a>
          <a href="/rent" onClick={() => setMenuOpen(false)}>Rent</a>
          <a href="/sell" onClick={() => setMenuOpen(false)}>Sell</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
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

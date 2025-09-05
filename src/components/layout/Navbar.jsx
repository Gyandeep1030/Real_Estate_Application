import React from "react";
import styles from "./Navbar.module.css";
import { ArrowRight } from "lucide-react"; // using lucide-react icons
import logo from "../../assets/image/Vector.png"

const Navbar = () => {
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

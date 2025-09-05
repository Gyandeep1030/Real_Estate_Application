import React from "react";
import styles from "./HeroSection.module.css";
import heroBg from "../../assets/image/HeroImg.png";

// Inline SVG icons
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="2" d="M12 21c4-5 7-8.5 7-12a7 7 0 1 0-14 0c0 3.5 3 7 7 12z" />
    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <line x1="16" y1="16" x2="22" y2="22" strokeWidth="2" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconSmall} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <polyline points="6 9 12 15 18 9" strokeWidth="2" />
  </svg>
);

// ✅ New filter icons
const RentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeWidth="2" />
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
  </svg>
);

const HouseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="2" d="M3 12l9-9 9 9" />
    <path strokeWidth="2" d="M9 21V12h6v9" />
  </svg>
);

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="2" d="M12 21c4-5 7-8.5 7-12a7 7 0 1 0-14 0c0 3.5 3 7 7 12z" />
    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
  </svg>
);

const HeroSection = () => {
  return (
    <div className={styles.body}>
      <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className={styles.overlay}>
          <div className={styles.container}>
            {/* Headline */}
            <h1 className={styles.title}>Find Your Dream Home in One Click!</h1>
            <p className={styles.subtitle}>
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>

            {/* Search Bar */}
            <div className={styles.searchWrapper}>
              <div className={styles.searchBox}>
                <LocationIcon />
                <input type="text" placeholder="Search Location..." />
                <div className={styles.rightIcons}>
                  <SearchIcon />
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Filter Row with Icons */}
      <div className={styles.filterRow}>
        <button className={styles.filterBtn}>
          <RentIcon /> For Rent <ChevronDown />
        </button>
        <button className={styles.filterBtn}>
          <HouseIcon /> House <ChevronDown />
        </button>
        <button className={styles.filterBtn}>
          <PinIcon /> Indonesia <ChevronDown />
        </button>
        <button className={styles.findBtn}>Find Property</button>
      </div>
    </div>
  );
};

export default HeroSection;

import React, { useEffect, useState } from "react";
import styles from "./FeaturedPropertyCards.module.css";
import { fetchProperties } from "../../services/api";
import fallbackImg from "../../assets/image/Image_not_available.png";

const FeaturedPropertyCards = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data); 
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    loadData();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Featured Property</h2>
        <button className={styles.moreBtn}>See 268 New Projects →</button>
      </div>

      <div className={styles.grid}>
        {properties.map((property) => (
          <div key={property.id} className={styles.cardWrapper}>
            <img
              src={property.image || fallbackImg}
              alt={property.name}
              className={styles.cardImage}
              onError={(e) => {
                e.target.onerror = null; // prevent infinite loop
                e.target.src = fallbackImg;
              }}
            />
            {/* Floating overlay card */}
            <div className={styles.cardOverlay}>
              <h3 className={styles.cardTitle}>
                📍 {property.name}, {property.state}
              </h3>
              <p className={styles.cardDesc}>
                Spacious 3BHK apartment in a prime location with modern amenities.
              </p>
              <div className={styles.footer}>
                <span className={styles.price}>${property.buildingNumber}000</span>
                <button className={styles.knowMoreBtn}>Know More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPropertyCards;

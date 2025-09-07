import React, { useEffect, useState } from "react";
import styles from "./RentalProperties.module.css";
import { fetchProperties } from "../../services/api";
import placeholderImg from "../../assets/image/Image_not_available.png"; // add a placeholder image
import star from "../../assets/icons/star.png"; 
import location from "../../assets/icons/location.png"; 



const RentalProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data.slice(6, 12)); // take another set for rentals
      } catch (error) {
        console.error("Error fetching rental properties:", error);
      }
    };
    loadData();
  }, []);

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>Find The Perfect Rental Home</h2>
          <p className={styles.subheading}>
            Browse our top-rated properties for rent, featuring premium listings
            tailored to your needs. Find your dream home today!
          </p>
        </div>
        <button className={styles.moreBtn}>View All Rentals</button>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className={styles.scrollWrapper}>
        <div className={styles.cardsRow}>
          {properties.map((property) => (
            <div key={property.id} className={styles.card}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={property.image || placeholderImg}
                  alt={property.name || "Property"}
                  className={styles.image}
                  onError={(e) => (e.target.src = placeholderImg)}
                />
              </div>

              {/* Content */}
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.location}>
                    <img src={location} alt="" /> {property.city}, {property.state}
                  </span>
                  <span className={styles.rating}><img src={star} alt="" /> 4.5/5</span>
                </div>

                <p className={styles.desc}>
                  Spacious 3BHK apartment in a prime location with modern
                  amenities.
                </p>

                <div className={styles.footer}>
                  <button className={styles.buyBtn}>Buy Now</button>
                  <span className={styles.price}>
                    ${property.buildingNumber}00/month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalProperties;

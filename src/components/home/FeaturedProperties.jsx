import React from "react";
import styles from "./FeaturedProperties.module.css";

const properties = [
  {
    location: "New York, NY",
    price: "$450,000",
    rating: "4.5/5",
    desc: "Spacious 3BHK apartment in a prime location with modern amenities.",
  },
  {
    location: "New York, NY",
    price: "$1,500/month",
    rating: "4.5/5",
    desc: "Spacious 3BHK apartment in a prime location with modern amenities.",
  },
];

const FeaturedProperties = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Best Properties Available For Sale</h2>
      <div className={styles.grid}>
        {properties.map((p, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.image}></div>
            <div className={styles.info}>
              <h3>{p.location}</h3>
              <p className={styles.rating}>{p.rating}</p>
              <p className={styles.price}>{p.price}</p>
              <p className={styles.desc}>{p.desc}</p>
              <button className={styles.btn}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.viewMore}>View More Properties</button>
    </section>
  );
};

export default FeaturedProperties;

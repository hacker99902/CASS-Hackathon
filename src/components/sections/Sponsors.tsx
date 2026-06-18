"use client";

import { motion } from "framer-motion";
import styles from "./Sponsors.module.css";
import siteConfig from "@/config/site.json";

export default function Sponsors() {
  const platinum = siteConfig.sponsors.filter((s) => s.tier === "platinum");
  const gold = siteConfig.sponsors.filter((s) => s.tier === "gold");
  const silver = siteConfig.sponsors.filter((s) => s.tier === "silver");

  const cardClass = (tier: string) => {
    if (tier === "platinum") return `${styles.sponsorCard} ${styles.platinum}`;
    if (tier === "gold") return `${styles.sponsorCard} ${styles.gold}`;
    return `${styles.sponsorCard} ${styles.silver}`;
  };

  return (
    <section className={`${styles.sponsors} section`} id="sponsors" aria-label="Sponsors">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="sectionLabel">Partners</span>
          <h2 className="sectionHeading">Our Sponsors</h2>
        </motion.div>

        {platinum.length > 0 && (
          <motion.div
            className={styles.tierSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className={styles.tierLabel}>Platinum</p>
            <div className={styles.platinumGrid}>
              {platinum.map((s) => (
                <div key={s.name} className={cardClass(s.tier)}>
                  <span className={styles.placeholderLogo}>{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {gold.length > 0 && (
          <motion.div
            className={styles.tierSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <p className={styles.tierLabel}>Gold</p>
            <div className={styles.goldGrid}>
              {gold.map((s) => (
                <div key={s.name} className={cardClass(s.tier)}>
                  <span className={styles.placeholderLogo}>{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {silver.length > 0 && (
          <motion.div
            className={styles.tierSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            <p className={styles.tierLabel}>Silver</p>
            <div className={styles.silverGrid}>
              {silver.map((s) => (
                <div key={s.name} className={cardClass(s.tier)}>
                  <span className={styles.placeholderLogo}>{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className={styles.cta}>
          <p className={styles.ctaText}>Interested in sponsoring IEEE CASS Hackathon 2026?</p>
          <div className={styles.ctaLinks}>
            <a href={`mailto:${siteConfig.contactEmail}`} className={styles.ctaLink}>
              ✉ {siteConfig.contactEmail}
            </a>
            <span className={styles.ctaDivider}>·</span>
            <a href={`tel:${siteConfig.contactPhone}`} className={styles.ctaLink}>
              📞 {siteConfig.contactPhone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
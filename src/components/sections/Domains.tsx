"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./Domains.module.css";
import domains from "@/config/domains.json";

export default function Domains() {
  const handleExplore = () => {
    const el = document.querySelector("#problems");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`${styles.domains} section`} id="domains" aria-label="Domains">
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className="sectionLabel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Focus Areas
          </motion.span>
          <motion.h2
            className="sectionHeading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          >
            Two Domains, Ten Challenges
          </motion.h2>
          <motion.p
            className="sectionSubtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          >
            Choose your domain and tackle five carefully crafted problem statements designed with real industry relevance.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.id}
              className={styles.card}
              style={{ "--accentColor": domain.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className={styles.cardTop}>
                <span
                  className={styles.domainBadge}
                  style={{
                    background: `${domain.color}1a`,
                    color: domain.color,
                    border: `1px solid ${domain.color}33`,
                  }}
                >
                  Domain {idx + 1}
                </span>
                <span className={styles.domainNumber} aria-hidden="true">0{idx + 1}</span>
              </div>

              <h3 className={styles.cardTitle}>{domain.title}</h3>
              <p className={styles.cardDesc}>{domain.shortDescription}</p>

              <div className={styles.cardFooter}>
                <div className={styles.psCount}>
                  <span className={styles.psCountNum}>5</span>
                  <span>Problem Statements</span>
                </div>
                <button
                  className={styles.exploreBtn}
                  style={{ background: `${domain.color}1a`, color: domain.color }}
                  onClick={handleExplore}
                  aria-label={`Explore ${domain.title} problem statements`}
                >
                  Explore
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
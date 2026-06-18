"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styles from "./RegistrationCTA.module.css";
import siteConfig from "@/config/site.json";

export default function RegistrationCTA() {
  return (
    <section className={`${styles.cta} section`} id="register" aria-label="Register">
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className={styles.glow} aria-hidden="true" />
          <span className={styles.eyebrow}>Registration Open</span>
          <h2 className={styles.heading}>Ready to Participate?</h2>
          <p className={styles.subtext}>
            Register through Unstop and start building innovative solutions. Spots are limited — secure your place before registration closes on DATE.
          </p>
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Register on Unstop
            <ExternalLink size={16} />
          </a>
          <p className={styles.note}>Teams of 2–4</p>
        </motion.div>
      </div>
    </section>
  );
}
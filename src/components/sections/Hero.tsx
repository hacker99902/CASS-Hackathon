"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";
import siteConfig from "@/config/site.json";
import Snowman from "@/components/ui/Snowman";

// Change this to your real event start date
const HACKATHON_DATE = new Date("2026-12-20T09:00:00+05:30");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = HACKATHON_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleExplore = () => {
    const el = document.querySelector("#domains");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="home" aria-label="Hero">
      <div className={styles.circuitBg} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <Snowman className={styles.snowman} />

      <div className="container">
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <span className={styles.eyebrow}>
              <span className={styles.dot} aria-hidden="true" />
              IEEE Circuits and Systems Society
            </span>
          </motion.div>

          <motion.p
            className={styles.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            IEEE CASS Hackathon 2026
          </motion.p>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <span className={styles.headlineAccent}>Build Solutions.</span>
            <br />
            Solve Real Problems.
          </motion.h1>

          <motion.div
            className={styles.meta}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <span className={styles.metaItem}>2 Domains</span>
            <span className={styles.metaDivider} aria-hidden="true" />
            <span className={styles.metaItem}>10 Problem Statements</span>
            <span className={styles.metaDivider} aria-hidden="true" />
            <span className={styles.metaItem}>24 Hours</span>
          </motion.div>

          <motion.div
            className={styles.countdown}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            aria-label="Countdown to hackathon"
          >
            <div className={styles.countUnit}>
              <span className={styles.countValue}>{pad(timeLeft.days)}</span>
              <span className={styles.countLabel}>Days</span>
            </div>
            <span className={styles.countSep} aria-hidden="true">:</span>
            <div className={styles.countUnit}>
              <span className={styles.countValue}>{pad(timeLeft.hours)}</span>
              <span className={styles.countLabel}>Hours</span>
            </div>
            <span className={styles.countSep} aria-hidden="true">:</span>
            <div className={styles.countUnit}>
              <span className={styles.countValue}>{pad(timeLeft.minutes)}</span>
              <span className={styles.countLabel}>Minutes</span>
            </div>
            <span className={styles.countSep} aria-hidden="true">:</span>
            <div className={styles.countUnit}>
              <span className={styles.countValue}>{pad(timeLeft.seconds)}</span>
              <span className={styles.countLabel}>Seconds</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <a
              href={siteConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Register Now
              <ExternalLink size={15} />
            </a>
            <button className={styles.secondaryBtn} onClick={handleExplore}>
              Explore Domains
              <ChevronDown size={15} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
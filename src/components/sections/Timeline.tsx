"use client";

import { motion } from "framer-motion";
import styles from "./Timeline.module.css";
import siteConfig from "@/config/site.json";

export default function Timeline() {
  const events = siteConfig.timeline;
  const activeCount = 2;

  return (
    <section className={`${styles.timeline} section`} id="timeline" aria-label="Timeline">
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className="sectionLabel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Schedule
          </motion.span>
          <motion.h2
            className="sectionHeading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          >
            Event Timeline
          </motion.h2>
          <motion.p
            className="sectionSubtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          >
            Key milestones from registration to results. Plan your participation around these dates.
          </motion.p>
        </div>

        {/* Horizontal — desktop */}
        <div className={styles.horizontal} role="list" aria-label="Timeline events">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              className={styles.hItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              role="listitem"
            >
              <div className={`${styles.hDot} ${i < activeCount ? styles.hDotActive : ""}`} aria-hidden="true" />
              <p className={styles.hDate}>{ev.date}</p>
              <p className={styles.hEvent}>{ev.event}</p>
              <p className={styles.hDesc}>{ev.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vertical — mobile */}
        <div className={styles.vertical} role="list" aria-label="Timeline events">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              className={styles.vItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              role="listitem"
            >
              <div className={`${styles.vDot} ${i < activeCount ? styles.vDotActive : ""}`} aria-hidden="true" />
              <p className={styles.vDate}>{ev.date}</p>
              <p className={styles.vEvent}>{ev.event}</p>
              <p className={styles.vDesc}>{ev.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
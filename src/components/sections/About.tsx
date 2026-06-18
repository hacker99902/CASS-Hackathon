"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import siteConfig from "@/config/site.json";

function useCountUp(target: number, started: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, started, duration]);
  return count;
}

function StatCard({ value, suffix, label, started }: {
  value: number; suffix: string; label: string; started: boolean;
}) {
  const count = useCountUp(value, started);
  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>
        {count}<span>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [
  { emoji: "🎓", text: "Open to undergraduate and postgraduate engineering students" },
  { emoji: "🧑‍🏫", text: "Mentorship from IEEE industry and academic experts" },
  { emoji: "🛠️", text: "Hands-on problem solving with real evaluation datasets" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={`${styles.about} section`} id="about" aria-label="About">
      <div className="container">
        <div className={styles.grid}>
          {/* Text column */}
          <div className={styles.textCol}>
            {["label", "heading", "desc1", "desc2", "highlights"].map((key, i) => (
              <motion.div
                key={key}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeItem}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                {key === "label" && <span className="sectionLabel">About the Event</span>}
                {key === "heading" && (
                  <h2 className="sectionHeading" style={{ marginTop: "16px" }}>
                    Where Engineering Meets Real Impact
                  </h2>
                )}
                {key === "desc1" && (
                  <p className={styles.description}>
                    IEEE CASS Hackathon 2026 is a national-level hackathon organized by the IEEE
                    Circuits and Systems Society. We bring together the brightest engineering minds
                    to tackle critical challenges in embedded systems, IoT, signal processing, and AI.
                  </p>
                )}
                {key === "desc2" && (
                  <p className={styles.description} style={{ marginTop: 0 }}>
                    Participants work in focused teams, guided by industry mentors, to build
                    functional prototypes addressing real-world problems. This is not just a
                    competition — it is a launchpad.
                  </p>
                )}
                {key === "highlights" && (
                  <div className={styles.highlight}>
                    {highlights.map((item) => (
                      <div className={styles.highlightItem} key={item.text}>
                        <span className={styles.emoji} aria-hidden="true">{item.emoji}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Stats column */}
          <div className={styles.statsCol} ref={ref}>
            <div className={styles.statsGrid}>
              {siteConfig.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                >
                  <StatCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    started={inView}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
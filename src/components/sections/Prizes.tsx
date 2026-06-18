"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";
import styles from "./Prizes.module.css";
import siteConfig from "@/config/site.json";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={26} />,
  medal: <Medal size={22} />,
  award: <Award size={22} />,
};

export default function Prizes() {
  const winner = siteConfig.prizes.find((p) => p.icon === "trophy")!;
  const runners = siteConfig.prizes.filter((p) => p.icon !== "trophy");

  return (
    <section className={`${styles.prizes} section`} id="prizes" aria-label="Prizes">
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className="sectionLabel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Rewards
          </motion.span>
          <motion.h2
            className="sectionHeading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          >
            Prize Pool
          </motion.h2>
          <motion.p
            className="sectionSubtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          >
            Compete for prizes that reflect the caliber of the challenge. Beyond cash, every participant gains access to a network that matters.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {/* Runner Up */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <div className={`${styles.iconWrap} ${styles.iconWrapRunner}`}>
              {iconMap[runners[0]?.icon ?? "medal"]}
            </div>
            <p className={styles.rank}>Runner Up</p>
            <p className={styles.amount}>{runners[0]?.amount}</p>
            <div className={styles.divider} />
            <p className={styles.prizeLabel}>Cash Prize</p>
          </motion.div>

          {/* Winner */}
          <motion.div
            className={`${styles.card} ${styles.cardWinner}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.0, ease: "easeOut" }}
          >
            <div className={`${styles.iconWrap} ${styles.iconWrapWinner}`}>
              {iconMap[winner.icon]}
            </div>
            <p className={`${styles.rank} ${styles.rankWinner}`}>Winner</p>
            <p className={`${styles.amount} ${styles.amountWinner}`}>{winner.amount}</p>
            <div className={styles.divider} />
            <p className={styles.prizeLabel}>Grand Prize</p>
          </motion.div>

          {/* Second Runner Up */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            <div className={`${styles.iconWrap} ${styles.iconWrapRunner}`}>
              {iconMap[runners[1]?.icon ?? "award"]}
            </div>
            <p className={styles.rank}>2nd Runner Up</p>
            <p className={styles.amount}>{runners[1]?.amount}</p>
            <div className={styles.divider} />
            <p className={styles.prizeLabel}>Cash Prize</p>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          className={styles.benefits}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <p className={styles.benefitsTitle}>Additional Benefits for All Participants</p>
          <ul className={styles.benefitsList}>
            {siteConfig.additionalBenefits.map((benefit) => (
              <li key={benefit} className={styles.benefitItem}>
                <span className={styles.benefitDot} aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
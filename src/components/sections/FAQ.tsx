"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "./FAQ.module.css";
import siteConfig from "@/config/site.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className={`${styles.faq} section`} id="faq" aria-label="FAQ">
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="sectionLabel">Got Questions?</span>
            <h2 className="sectionHeading">Frequently Asked</h2>
          </motion.div>

          <div className={styles.accordion}>
            {siteConfig.faq.map((item, i) => (
              <motion.div
                key={i}
                className={`${styles.item} ${openIndex === i ? styles.itemOpen : ""}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              >
                <button
                  className={styles.trigger}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-body-${i}`}
                  id={`faq-trigger-${i}`}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    <Plus size={14} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-body-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      className={styles.body}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.32, ease: "easeOut" }}
                    >
                      <p className={styles.answer}>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
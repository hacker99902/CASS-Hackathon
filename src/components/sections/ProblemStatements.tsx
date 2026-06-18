"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import styles from "./ProblemStatements.module.css";
import domains from "@/config/domains.json";
import type { ProblemStatement } from "@/types";

function Modal({
  ps,
  accentColor,
  onClose,
}: {
  ps: ProblemStatement;
  accentColor: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent bar */}
          <div
            className={styles.modalAccent}
            style={{ background: accentColor }}
          />

          {/* Header */}
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{ps.title}</h2>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable body */}
          <div className={styles.modalBody}>
            <p className={styles.modalDesc}>{ps.description}</p>

            <div className={styles.modalGrid}>
              <div className={styles.modalBlock}>
                <p
                  className={styles.modalBlockTitle}
                  style={{ color: accentColor }}
                >
                  Objectives
                </p>
                <ul className={styles.modalList}>
                  {ps.objectives.map((o, i) => (
                    <li key={i} className={styles.modalListItem}>
                      <span
                        className={styles.listDot}
                        style={{ background: accentColor }}
                      />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalBlock}>
                <p
                  className={styles.modalBlockTitle}
                  style={{ color: accentColor }}
                >
                  Deliverables
                </p>
                <ul className={styles.modalList}>
                  {ps.deliverables.map((d, i) => (
                    <li key={i} className={styles.modalListItem}>
                      <span
                        className={styles.listDot}
                        style={{ background: accentColor }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalBlock}>
                <p
                  className={styles.modalBlockTitle}
                  style={{ color: accentColor }}
                >
                  Evaluation Criteria
                </p>
                <ul className={styles.modalList}>
                  {ps.evaluationCriteria.map((ec, i) => (
                    <li key={i} className={styles.modalListItem}>
                      <span
                        className={styles.listDot}
                        style={{ background: accentColor }}
                      />
                      {ec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProblemStatements() {
  const [selected, setSelected] = useState<{
    ps: ProblemStatement;
    color: string;
  } | null>(null);

  return (
    <section
      className={`${styles.problems} section`}
      id="problems"
      aria-label="Problem Statements"
    >
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="sectionLabel">Challenges</span>
          <h2 className="sectionHeading">Problem Statements</h2>
          <p className="sectionSubtext">
            Ten problems across two domains. Click any problem to view full
            details.
          </p>
        </motion.div>

        {domains.map((domain, di) => (
          <motion.div
            key={domain.id}
            className={styles.domainGroup}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: di * 0.1, ease: "easeOut" }}
          >
            <div className={styles.domainLabel}>
              <span
                className={styles.domainTag}
                style={{
                  background: `${domain.color}1a`,
                  color: domain.color,
                  border: `1px solid ${domain.color}33`,
                }}
              >
                Domain {di + 1}
              </span>
              <span className={styles.domainTitle}>{domain.title}</span>
            </div>

            <div className={styles.cardGrid}>
              {domain.problemStatements.map((ps, idx) => (
                <motion.button
                  key={ps.id}
                  className={styles.psCard}
                  onClick={() =>
                    setSelected({ ps, color: domain.color })
                  }
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -3 }}
                  aria-label={`View ${ps.title}`}
                >
                  <span
                    className={styles.psCardIndex}
                    style={{ color: domain.color }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.psCardTitle}>{ps.title}</span>
                  <ChevronRight
                    size={16}
                    className={styles.psCardArrow}
                    style={{ color: domain.color }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <Modal
          ps={selected.ps}
          accentColor={selected.color}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Trophy, Medal, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import siteConfig from "@/config/site.json";
import styles from "./results.module.css";

export const metadata: Metadata = {
  title: "Results",
  description: "IEEE CASS Hackathon 2026 results and winners.",
};

export default function ResultsPage() {
  const { resultsAnnounced, results } = siteConfig;

  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        {/* Hero */}
        <div className={`${styles.hero} section`}>
          <div className="container">
            <Link href="/" className={styles.backLink}>
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <span className="sectionLabel">IEEE CASS Hackathon 2026</span>
            <h1 className="sectionHeading" style={{ marginTop: "12px" }}>
              {resultsAnnounced ? "Hackathon Results" : "Results"}
            </h1>
          </div>
        </div>

        {!resultsAnnounced ? (
          /* ── Pending State ── */
          <div className={`${styles.pending} section`}>
            <div className="container">
              <div className={styles.pendingIcon} aria-hidden="true">
                <Clock size={28} />
              </div>
              <h2 className={styles.pendingTitle}>Results Will Be Announced Soon</h2>
              <p className={styles.pendingText}>
                The evaluation round is underway. Our expert panel is carefully reviewing all submissions. Check back on{" "}
                <strong style={{ color: "var(--text-primary)" }}>Feb 24, 2026</strong> for the final results.
              </p>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.notifyBtn}
              >
                Follow us for updates
              </a>
            </div>
          </div>
        ) : (
          /* ── Results State ── */
          <div className={`${styles.results} section`}>
            <div className="container">
              {/* Podium */}
              <div className={styles.podium}>
                {/* Runner Up */}
                <div className={styles.resultCard}>
                  <span className={`${styles.rankBadge} ${styles.rankRunner}`}>
                    <Medal size={12} />
                    Runner Up
                  </span>
                  <p className={styles.teamName}>{results.runnerUp.teamName}</p>
                  <p className={styles.project}>&ldquo;{results.runnerUp.project}&rdquo;</p>
                  <ul className={styles.members}>
                    {results.runnerUp.members.map((m) => (
                      <li key={m} className={styles.member}>{m}</li>
                    ))}
                  </ul>
                  <p className={styles.institution}>{results.runnerUp.institution}</p>
                </div>

                {/* Winner */}
                <div className={`${styles.resultCard} ${styles.resultCardWinner}`}>
                  <span className={`${styles.rankBadge} ${styles.rankWinner}`}>
                    <Trophy size={12} />
                    Winner
                  </span>
                  <p className={`${styles.teamName} ${styles.teamNameWinner}`}>
                    {results.winner.teamName}
                  </p>
                  <p className={styles.project}>&ldquo;{results.winner.project}&rdquo;</p>
                  <ul className={styles.members}>
                    {results.winner.members.map((m) => (
                      <li key={m} className={styles.member}>{m}</li>
                    ))}
                  </ul>
                  <p className={styles.institution}>{results.winner.institution}</p>
                </div>

                {/* Second Runner Up */}
                <div className={styles.resultCard}>
                  <span className={`${styles.rankBadge} ${styles.rankRunner}`}>
                    <Award size={12} />
                    2nd Runner Up
                  </span>
                  <p className={styles.teamName}>{results.secondRunnerUp.teamName}</p>
                  <p className={styles.project}>&ldquo;{results.secondRunnerUp.project}&rdquo;</p>
                  <ul className={styles.members}>
                    {results.secondRunnerUp.members.map((m) => (
                      <li key={m} className={styles.member}>{m}</li>
                    ))}
                  </ul>
                  <p className={styles.institution}>{results.secondRunnerUp.institution}</p>
                </div>
              </div>

              {/* Special Mentions */}
              {results.specialMentions.length > 0 && (
                <div className={styles.mentions}>
                  <h2 className={styles.mentionsTitle}>Special Mentions</h2>
                  <div className={styles.mentionGrid}>
                    {results.specialMentions.map((m, i) => (
                      <div key={i} className={styles.mentionCard}>
                        <p className={styles.mentionAward}>{m.award}</p>
                        <p className={styles.mentionTeam}>{m.teamName}</p>
                        <p className={styles.mentionProject}>{m.project}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
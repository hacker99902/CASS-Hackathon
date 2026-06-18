"use client";

import Link from "next/link";
import { Link2, Globe, Mail, X } from "lucide-react";
import styles from "./Footer.module.css";
import siteConfig from "@/config/site.json";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Domains", href: "#domains" },
  { label: "Problem Statements", href: "#problems" },
  { label: "Timeline", href: "#timeline" },
  { label: "Results", href: "/results" },
];

const resourceLinks = [
  { label: "Register on Unstop", href: siteConfig.registrationUrl, external: true },
  { label: "Prize Pool", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Sponsors", href: "#sponsors" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <div className={styles.logoMark}>C</div>
            <p className={styles.brandName}>IEEE CASS Hackathon 2026</p>
            <p className={styles.brandDesc}>
              A national-level 24-hour hackathon by the IEEE Circuits and Systems Society. Building solutions that matter.
            </p>
            <a href={`mailto:${siteConfig.contactEmail}`} className={styles.contactLink}>
              {siteConfig.contactEmail}
            </a>
          </div>

          <div>
            <p className={styles.colTitle}>Quick Links</p>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Resources</p>
            <ul className={styles.linkList}>
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.footerLink}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!link.external && link.href.startsWith("#")) {
                        e.preventDefault();
                        handleScroll(link.href);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className={styles.colTitle} style={{ marginTop: "32px" }}>Follow Us</p>
            <div className={styles.socialLinks}>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Link2 size={16} />
              </a>
              <a
                href={siteConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter / X"
              >
                <X size={16} />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Globe size={16} />
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className={styles.socialLink}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} IEEE CASS Hackathon. All rights reserved.
          </p>
          <p className={styles.ieee}>
            Organized by the IEEE Circuits and Systems Society
          </p>
        </div>
      </div>
    </footer>
  );
}
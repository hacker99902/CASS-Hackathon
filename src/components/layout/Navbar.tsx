"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import styles from "./Navbar.module.css";
import siteConfig from "@/config/site.json";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Domains", href: "#domains" },
  { label: "Timeline", href: "#timeline" },
  { label: "Results", href: "/results" },
  { label: "Register", href: siteConfig.registrationUrl, external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, external?: boolean) => {
    setMobileOpen(false);
    if (!external && href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTransparent}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.logo} aria-label="IEEE CASS Hackathon Home">
          <div className={styles.logoMark}>C</div>
          <span className={styles.logoText}>
            IEEE CASS{" "}
            <span className={styles.logoTextMuted}>Hackathon</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className={styles.navLinks} role="list">
          {navItems.slice(0, 4).map((item) => (
            <li key={item.label}>
              {item.href.startsWith("/") ? (
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerBtn}
          >
            Register Now
            <ExternalLink size={13} />
          </a>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks} role="list">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileRegisterBtn}
            onClick={() => setMobileOpen(false)}
          >
            Register on Unstop
            <ExternalLink size={14} />
          </a>
        </div>
      )}
    </nav>
  );
}
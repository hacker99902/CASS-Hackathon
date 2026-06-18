import Link from "next/link";
import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className={styles.btn}>
        ← Back to Home
      </Link>
    </div>
  );
}
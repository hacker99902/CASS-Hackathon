"use client";

import { useEffect, useState } from "react";
import { Snowflake } from "lucide-react";
import styles from "./Snowfall.module.css";

type Flake = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

export default function Snowfall({ count = 28 }: { count?: number }) {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  // Generated after mount so server and client HTML always match
  useEffect(() => {
    setFlakes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 16,
        duration: 12 + Math.random() * 14,
        delay: -Math.random() * 20,
        drift: (Math.random() * 2 - 1) * 60,
        opacity: 0.25 + Math.random() * 0.45,
      }))
    );
  }, [count]);

  return (
    <div className={styles.layer} aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className={styles.flake}
          style={
            {
              left: `${f.left}%`,
              animationDuration: `${f.duration}s`,
              animationDelay: `${f.delay}s`,
              opacity: f.opacity,
              "--drift": `${f.drift}px`,
            } as React.CSSProperties
          }
        >
          <Snowflake size={f.size} strokeWidth={1.75} />
        </span>
      ))}
    </div>
  );
}
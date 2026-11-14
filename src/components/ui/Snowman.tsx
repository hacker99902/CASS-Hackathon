export default function Snowman({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 300"
      role="img"
      aria-label="Snowman"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* arms */}
      <path d="M62 178 L14 140 M58 160 L38 150" stroke="#6b4a2b" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M138 178 L186 140 M142 160 L162 150" stroke="#6b4a2b" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* body */}
      <circle cx="100" cy="238" r="58" fill="#fff" stroke="#d4d4da" strokeWidth="3" />
      <circle cx="100" cy="158" r="42" fill="#fff" stroke="#d4d4da" strokeWidth="3" />
      <circle cx="100" cy="90" r="32" fill="#fff" stroke="#d4d4da" strokeWidth="3" />
      {/* hat */}
      <ellipse cx="100" cy="64" rx="36" ry="7" fill="#1c1c1f" />
      <rect x="78" y="30" width="44" height="34" rx="4" fill="#1c1c1f" />
      <rect x="78" y="50" width="44" height="8" fill="#d42426" />
      {/* face */}
      <circle cx="90" cy="84" r="3.2" fill="#1c1c1f" />
      <circle cx="110" cy="84" r="3.2" fill="#1c1c1f" />
      <path d="M100 91 L128 98 L100 103 Z" fill="#f08a24" />
      <path d="M88 104 Q100 112 112 104" stroke="#1c1c1f" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* scarf */}
      <rect x="66" y="114" width="68" height="14" rx="7" fill="#d42426" />
      <rect x="112" y="122" width="14" height="36" rx="5" fill="#b51d1f" />
      {/* buttons */}
      <circle cx="100" cy="146" r="3.6" fill="#1c1c1f" />
      <circle cx="100" cy="162" r="3.6" fill="#1c1c1f" />
      <circle cx="100" cy="178" r="3.6" fill="#1c1c1f" />
    </svg>
  );
}
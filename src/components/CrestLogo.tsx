export default function CrestLogo({
  className = "",
  size = "lg",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = { sm: "w-16 h-16", md: "w-24 h-24", lg: "w-48 h-48" };

  return (
    <div className={`${sizeMap[size]} ${className}`}>
      <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield shape */}
        <path
          d="M100 230 L20 140 L20 40 L100 20 L180 40 L180 140 Z"
          fill="#F4F0E6"
          stroke="#C8A24A"
          strokeWidth="3"
        />

        {/* Red saltire (X cross) */}
        <path d="M20 40 L180 200" stroke="#8B1E24" strokeWidth="20" />
        <path d="M180 40 L20 200" stroke="#8B1E24" strokeWidth="20" />

        {/* Green inner shield with fish */}
        <path
          d="M100 180 L55 130 L55 80 L100 65 L145 80 L145 130 Z"
          fill="#1F4D36"
          stroke="#C8A24A"
          strokeWidth="2"
        />

        {/* Three fish */}
        <g fill="#C0C0C0" stroke="#888" strokeWidth="0.5">
          {/* Fish 1 */}
          <ellipse cx="100" cy="88" rx="22" ry="7" />
          <polygon points="122,88 132,80 132,96" />
          <circle cx="85" cy="86" r="1.5" fill="#333" />
          {/* Fish 2 */}
          <ellipse cx="100" cy="112" rx="22" ry="7" />
          <polygon points="122,112 132,104 132,120" />
          <circle cx="85" cy="110" r="1.5" fill="#333" />
          {/* Fish 3 */}
          <ellipse cx="100" cy="136" rx="22" ry="7" />
          <polygon points="122,136 132,128 132,144" />
          <circle cx="85" cy="134" r="1.5" fill="#333" />
        </g>

        {/* Roses in corners */}
        {[
          [40, 65],
          [160, 65],
          [40, 175],
          [160, 175],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="8" fill="#8B1E24" />
            <circle cx={cx} cy={cy} r="4" fill="#a82830" />
            <circle cx={cx} cy={cy} r="2" fill="#C8A24A" />
          </g>
        ))}

        {/* Arm with dagger on top */}
        <g transform="translate(100, 15)">
          {/* Arm */}
          <path
            d="M-15,0 Q-20,-15 -10,-20 L0,-22 L10,-20 Q20,-15 15,0"
            fill="#d4a574"
            stroke="#b8956a"
            strokeWidth="1"
          />
          {/* Dagger blade */}
          <line
            x1="0"
            y1="-22"
            x2="0"
            y2="-48"
            stroke="#C0C0C0"
            strokeWidth="3"
          />
          {/* Dagger guard */}
          <line
            x1="-6"
            y1="-22"
            x2="6"
            y2="-22"
            stroke="#C8A24A"
            strokeWidth="2"
          />
          {/* Dagger handle */}
          <line
            x1="0"
            y1="-18"
            x2="0"
            y2="-10"
            stroke="#3A2B22"
            strokeWidth="3"
          />
        </g>

        {/* Decorative mantling */}
        <path
          d="M20 40 Q0 30 5 55 Q-5 70 10 80"
          stroke="#8B1E24"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M180 40 Q200 30 195 55 Q205 70 190 80"
          stroke="#8B1E24"
          strokeWidth="3"
          fill="none"
        />

        {/* Banner */}
        <path
          d="M35 210 L165 210 L160 225 L100 220 L40 225 Z"
          fill="#0d0d0d"
          stroke="#C8A24A"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

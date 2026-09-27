interface StrategicSignalFieldProps {
  className?: string;
}

export function StrategicSignalField({ className = '' }: StrategicSignalFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-[44%] sm:top-[46%] lg:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-10 w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[760px] lg:h-[760px] xl:w-[860px] xl:h-[860px] ${className}`}
    >
      {/* ── Layer 1: Diffuse Ambient Studio Backlight (-10% Radius) ───────── */}
      <div
        style={{
          background:
            'radial-gradient(circle at center, rgba(220, 165, 70, 0.24) 0%, rgba(30, 48, 80, 0.30) 40%, rgba(10, 16, 32, 0) 67%)',
        }}
        className="absolute inset-0 w-full h-full rounded-full pointer-events-none blur-3xl opacity-75"
      />

      {/* ── Layer 2: Core Warm Golden Halo (-10% Radius: 58% -> 52%) ──────── */}
      <div
        style={{
          background:
            'radial-gradient(circle at center, rgba(245, 195, 95, 0.70) 0%, rgba(225, 170, 70, 0.45) 24%, rgba(180, 125, 45, 0.15) 47%, rgba(10, 16, 32, 0) 67%)',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] h-[52%] rounded-full blur-2xl sm:blur-3xl opacity-65 pointer-events-none"
      />

      {/* ── Layer 3: Exactly 8 Concentric Golden Signal Rings (-10% Radius) ─ */}
      <svg
        viewBox="0 0 800 800"
        className="w-full h-full absolute inset-0 opacity-95 pointer-events-none"
      >
        <defs>
          {/* Golden Rings Radiance Falloff Mask (-10% radius: 380 -> 342) */}
          <radialGradient
            id="hero-rings-fade"
            cx="400"
            cy="400"
            r="342"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="72%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="92%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-rings-mask">
            <rect width="800" height="800" fill="url(#hero-rings-fade)" />
          </mask>
        </defs>

        {/* ── Exactly 8 Concentric Golden Rings Centered at (400, 400) ────── */}
        <g mask="url(#hero-rings-mask)">
          {/* Ring 1 (r=38 -> r=34) */}
          <circle
            cx="400"
            cy="400"
            r="34"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.25"
            opacity="0.48"
          />

          {/* Ring 2 (r=68 -> r=61) */}
          <circle
            cx="400"
            cy="400"
            r="61"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.2"
            opacity="0.42"
          />

          {/* Ring 3 (r=104 -> r=94) */}
          <circle
            cx="400"
            cy="400"
            r="94"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.15"
            opacity="0.36"
          />

          {/* Ring 4 (r=146 -> r=131) */}
          <circle
            cx="400"
            cy="400"
            r="131"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.1"
            opacity="0.30"
          />

          {/* Ring 5 (r=192 -> r=173) */}
          <circle
            cx="400"
            cy="400"
            r="173"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.0"
            opacity="0.24"
          />

          {/* Ring 6 (r=242 -> r=218) */}
          <circle
            cx="400"
            cy="400"
            r="218"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.95"
            opacity="0.18"
          />

          {/* Ring 7 (r=296 -> r=266) */}
          <circle
            cx="400"
            cy="400"
            r="266"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.9"
            opacity="0.14"
          />

          {/* Ring 8 (r=354 -> r=319) */}
          <circle
            cx="400"
            cy="400"
            r="319"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.85"
            opacity="0.10"
          />
        </g>
      </svg>
    </div>
  );
}

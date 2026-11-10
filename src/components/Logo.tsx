import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showTagline = false,
  className = '',
}) => {
  const isLight = variant === 'light' || variant === 'white';
  const primaryTextColor = isLight ? '#FFFFFF' : '#073D2B';
  const secondaryTextColor = isLight ? '#EAF2E7' : '#10563A';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Food Circle Graphic Leaf Seal */}
      <div className="relative w-10 h-10 shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform transition-transform hover:rotate-12 duration-300"
          aria-hidden="true"
        >
          {/* Circular outer track */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke={isLight ? '#FFFFFF' : '#073D2B'}
            strokeWidth="3.5"
            strokeDasharray="260"
            strokeDashoffset="20"
            className="opacity-90"
          />
          {/* Orange accent arc */}
          <path
            d="M 50,6 A 44,44 0 0,1 94,50"
            fill="none"
            stroke="#FF8900"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Stylized Food Safety Leaf Core */}
          <path
            d="M 50,22 C 34,22 26,40 32,62 C 36,76 48,82 50,82 C 52,82 64,76 68,62 C 74,40 66,22 50,22 Z"
            fill={isLight ? '#FFFFFF' : '#10563A'}
          />
          {/* Leaf Central Rib */}
          <path
            d="M 50,30 L 50,75"
            stroke={isLight ? '#073D2B' : '#FAF8F1'}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Leaf Veins */}
          <path
            d="M 50,45 Q 60,40 64,36 M 50,55 Q 60,51 63,48 M 50,45 Q 40,40 36,36 M 50,55 Q 40,51 37,48"
            stroke={isLight ? '#073D2B' : '#FAF8F1'}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Small Orange Sunlight Seed */}
          <circle cx="50" cy="18" r="4.5" fill="#FF8900" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className="font-arvo font-bold text-xl tracking-tight leading-none"
            style={{ color: primaryTextColor }}
          >
            FOOD CIRCLE
          </span>
        </div>
        {showTagline ? (
          <span
            className="text-[11px] font-sans font-medium tracking-wider uppercase mt-1 leading-none"
            style={{ color: secondaryTextColor }}
          >
            Safety • Quality • Trust
          </span>
        ) : (
          <span
            className="text-[11px] font-sans font-medium tracking-wide mt-0.5 leading-none opacity-85"
            style={{ color: secondaryTextColor }}
          >
            Food Safety Consultant
          </span>
        )}
      </div>
    </div>
  );
};

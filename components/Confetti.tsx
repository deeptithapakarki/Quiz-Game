
import React from 'react';

const CONFETTI_COUNT = 50;
const CONFETTI_COLORS = ['bg-yellow-400', 'bg-pink-400', 'bg-sky-400', 'bg-lime-400'];

export const Confetti: React.FC = () => {
  const confettiPieces = Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 2 + 3}s`,
      animationDelay: `${Math.random() * 2}s`,
    };
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    const size = Math.random() > 0.5 ? 'w-3 h-3' : 'w-2 h-4';
    const shape = Math.random() > 0.5 ? 'rounded-full' : '';

    return (
      <div
        key={i}
        className={`absolute top-0 confetti ${color} ${size} ${shape}`}
        style={style}
      ></div>
    );
  });

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{confettiPieces}</div>;
};

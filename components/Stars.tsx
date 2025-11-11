
import React from 'react';

const STAR_COUNT = 30;

export const Stars: React.FC = () => {
  const starPieces = Array.from({ length: STAR_COUNT }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      transform: `scale(${Math.random() * 0.5 + 0.5})`,
    };

    return (
      <div
        key={i}
        className="absolute text-yellow-300 text-2xl md:text-4xl animate-star-twinkle"
        style={style}
      >
        ⭐
      </div>
    );
  });

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{starPieces}</div>;
};

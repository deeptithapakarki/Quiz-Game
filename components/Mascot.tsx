
import React from 'react';

export const Mascot = () => {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0L61.2 35.4H97.6L68.2 57.3L79.4 92.7L50 70.8L20.6 92.7L31.8 57.3L2.4 35.4H38.8L50 0Z"
            fill="#FFD700"
            stroke="#FDB813"
            strokeWidth="3"
          />
          <circle cx="38" cy="45" r="5" fill="black" />
          <circle cx="62" cy="45" r="5" fill="black" />
          <path
            d="M40 65 Q50 75 60 65"
            stroke="black"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

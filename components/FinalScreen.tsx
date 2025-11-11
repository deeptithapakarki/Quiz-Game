
import React from 'react';
import { Mascot } from './Mascot';
import { Stars } from './Stars';

interface FinalScreenProps {
  onPlayAgain: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({ onPlayAgain }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center text-white p-8">
      <Stars />
      <div className="transform scale-150 mb-10">
        <Mascot />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold my-8" style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.2)' }}>
        🎊 You're a Quiz Master! 🎊
      </h1>
      <p className="text-3xl mb-10">You're a star!</p>
      <button
        onClick={onPlayAgain}
        className="px-12 py-6 bg-white text-sky-500 text-4xl font-bold rounded-full shadow-2xl transform transition-transform hover:scale-110 active:scale-95"
      >
        Play Again
      </button>
    </div>
  );
};

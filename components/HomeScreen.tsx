
import React from 'react';
import { Mascot } from './Mascot';

interface HomeScreenProps {
  onPlay: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onPlay }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white p-8">
      <Mascot />
      <h1 className="text-5xl md:text-7xl font-bold my-8 text-shadow" style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.2)' }}>
        🎉 Fun Quiz Time! 🎉
      </h1>
      <button
        onClick={onPlay}
        className="px-12 py-6 bg-white text-sky-500 text-4xl font-bold rounded-full shadow-2xl transform transition-transform hover:scale-110 active:scale-95"
      >
        Play
      </button>
    </div>
  );
};

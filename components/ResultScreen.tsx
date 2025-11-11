
import React from 'react';
import { TOTAL_LEVELS } from '../constants';
import { Mascot } from './Mascot';

interface ResultScreenProps {
  isSuccess: boolean;
  onNextLevel: () => void;
  onRetry: () => void;
  level: number;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ isSuccess, onNextLevel, onRetry, level }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white p-8 bg-black/30 rounded-3xl shadow-2xl backdrop-blur-md">
      <div className="transform scale-125 mb-6">
        <Mascot />
      </div>
      {isSuccess ? (
        <>
          <h2 className="text-4xl md:text-6xl font-bold my-4" style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}>
            Level {level} Cleared!
          </h2>
          <p className="text-2xl mb-8">Awesome work!</p>
          <button
            onClick={onNextLevel}
            className="px-10 py-5 bg-lime-500 text-white text-3xl font-bold rounded-full shadow-2xl transform transition-transform hover:scale-110 active:scale-95"
          >
            {level === TOTAL_LEVELS ? 'Finish!' : 'Next Level'}
          </button>
        </>
      ) : (
        <>
          <h2 className="text-4xl md:text-6xl font-bold my-4" style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}>
            Oh no!
          </h2>
          <p className="text-2xl mb-8">Let's give it another shot!</p>
          <button
            onClick={onRetry}
            className="px-10 py-5 bg-pink-500 text-white text-3xl font-bold rounded-full shadow-2xl transform transition-transform hover:scale-110 active:scale-95"
          >
            Try Again
          </button>
        </>
      )}
    </div>
  );
};

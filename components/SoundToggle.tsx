
import React from 'react';

interface SoundToggleProps {
  isMuted: boolean;
  toggleMute: () => void;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ isMuted, toggleMute }) => {
  return (
    <button
      onClick={toggleMute}
      className="absolute top-4 right-4 bg-white/50 p-3 rounded-full text-3xl shadow-md backdrop-blur-sm transition-transform hover:scale-110"
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
};

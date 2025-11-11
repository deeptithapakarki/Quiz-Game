import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import { Mascot } from './Mascot';
import { SoundToggle } from './SoundToggle';
import { Confetti } from './Confetti';
import { COLORS, HOVER_COLORS } from '../constants';

interface QuizScreenProps {
  level: number;
  score: number;
  question: Question;
  onAnswer: (answer: string) => void;
  isMuted: boolean;
  toggleMute: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ level, score, question, onAnswer, isMuted, toggleMute }) => {
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    correctSoundRef.current = document.getElementById('correct-sound') as HTMLAudioElement;
    incorrectSoundRef.current = document.getElementById('incorrect-sound') as HTMLAudioElement;
  }, []);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    if (!isMuted) {
      if (isCorrect && correctSoundRef.current) {
        correctSoundRef.current.currentTime = 0;
        correctSoundRef.current.play().catch(e => console.error("Correct sound failed:", e));
      } else if (!isCorrect && incorrectSoundRef.current) {
        incorrectSoundRef.current.currentTime = 0;
        incorrectSoundRef.current.play().catch(e => console.error("Incorrect sound failed:", e));
      }
    }

    setTimeout(() => {
      onAnswer(answer);
      setFeedback(null);
      setSelectedAnswer(null);
    }, 1500);
  };
  
  // Reset feedback if question changes
  useEffect(() => {
    setFeedback(null);
    setSelectedAnswer(null);
  }, [question]);

  const getButtonClass = (answer: string, index: number) => {
    if (selectedAnswer === null) {
      return `${COLORS[index]} ${HOVER_COLORS[index]}`;
    }
    if (answer === question.correctAnswer) {
      return 'bg-green-500 scale-105';
    }
    if (answer === selectedAnswer && answer !== question.correctAnswer) {
      return 'bg-red-500 animate-shake';
    }
    return 'bg-gray-400 opacity-70';
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 text-center relative">
      {feedback === 'correct' && <Confetti />}
      <SoundToggle isMuted={isMuted} toggleMute={toggleMute} />
      <header className="flex justify-between items-center text-white font-bold text-2xl md:text-3xl mb-4 bg-black/20 p-4 rounded-full shadow-lg">
        <div>Level: {level}</div>
        <div className={`flex-shrink-0 mx-4 ${
            feedback === 'correct' ? 'animate-happy-jump' : ''
          } ${
            feedback === 'incorrect' ? 'animate-sad-shake' : ''
          }`}>
          <Mascot />
        </div>
        <div>Score: {score}</div>
      </header>
      <main className={`bg-white/80 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md ${
          feedback === 'correct' ? 'animate-correct-pulse' : ''
        } ${
          feedback === 'incorrect' ? 'animate-incorrect-pulse' : ''
        }`}>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 min-h-[8rem] flex items-center justify-center">
          {question.question}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={!!selectedAnswer}
              className={`flex items-center justify-center p-4 rounded-2xl text-white font-bold text-xl md:text-2xl shadow-lg transition-all duration-300 transform ${getButtonClass(option, index)}`}
            >
              {question.icon( 'text-4xl mr-4')}
              <span>{option}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};
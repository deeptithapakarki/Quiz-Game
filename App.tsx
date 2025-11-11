import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, Question } from './types';
import { QUIZ_DATA, TOTAL_LEVELS, QUESTIONS_PER_LEVEL } from './constants';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { FinalScreen } from './components/FinalScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Home);
  const [currentLevel, setCurrentLevel] = useState<number>(() => {
    const savedLevel = localStorage.getItem('quiz-level');
    return savedLevel ? parseInt(savedLevel, 10) : 1;
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
     const savedMute = localStorage.getItem('quiz-muted');
     return savedMute ? JSON.parse(savedMute) : true;
  });
  const [levelResult, setLevelResult] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    localStorage.setItem('quiz-level', currentLevel.toString());
  }, [currentLevel]);

  useEffect(() => {
    localStorage.setItem('quiz-muted', JSON.stringify(isMuted));
    if (audioRef.current) {
        audioRef.current.muted = isMuted;
        if (!isMuted) {
            audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        }
    }
  }, [isMuted]);

  useEffect(() => {
    audioRef.current = document.getElementById('background-music') as HTMLAudioElement;
    clickSoundRef.current = document.getElementById('click-sound') as HTMLAudioElement;
    if (audioRef.current) {
        audioRef.current.muted = isMuted;
        if (!isMuted) {
          // Play on first user interaction is more reliable
          document.body.addEventListener('click', () => {
              if (audioRef.current && !isMuted) audioRef.current.play().catch(e => console.error("Audio play failed on interaction:", e))
          }, { once: true });
        }
    }
  }, []);

  const playClickSound = useCallback(() => {
    if (!isMuted && clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(e => console.error("Click sound failed:", e));
    }
  }, [isMuted]);

  const selectRandomQuestions = useCallback((level: number) => {
    const levelKey = `level${level}`;
    const allQuestions = QUIZ_DATA[levelKey];
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, QUESTIONS_PER_LEVEL);
  }, []);

  const startGame = useCallback((level: number) => {
    setCurrentLevel(level);
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuestions(selectRandomQuestions(level));
    setGameState(GameState.Quiz);
  }, [selectRandomQuestions]);
  
  const handlePlay = () => {
    playClickSound();
    startGame(currentLevel > TOTAL_LEVELS ? 1 : currentLevel);
  };

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      if (currentQuestionIndex === QUESTIONS_PER_LEVEL - 1) {
        setLevelResult(true);
        setGameState(GameState.Result);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    } else {
      setLevelResult(false);
      setGameState(GameState.Result);
    }
  };

  const handleNextLevel = () => {
    playClickSound();
    if (currentLevel < TOTAL_LEVELS) {
      const nextLevel = currentLevel + 1;
      startGame(nextLevel);
    } else {
      setCurrentLevel(TOTAL_LEVELS + 1); // Mark as completed
      setGameState(GameState.Final);
    }
  };

  const handleRetry = () => {
    playClickSound();
    startGame(currentLevel);
  };

  const handlePlayAgain = () => {
    playClickSound();
    startGame(1);
  };
  
  const toggleMute = () => {
      playClickSound();
      setIsMuted(prev => !prev);
  };

  const renderScreen = () => {
    switch (gameState) {
      case GameState.Quiz:
        return <QuizScreen 
                  level={currentLevel}
                  score={score}
                  question={questions[currentQuestionIndex]}
                  onAnswer={handleAnswer}
                  isMuted={isMuted}
                  toggleMute={toggleMute}
               />;
      case GameState.Result:
        return <ResultScreen 
                  isSuccess={levelResult}
                  onNextLevel={handleNextLevel}
                  onRetry={handleRetry}
                  level={currentLevel}
               />;
      case GameState.Final:
        return <FinalScreen onPlayAgain={handlePlayAgain} />;
      case GameState.Home:
      default:
        return <HomeScreen onPlay={handlePlay} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-200 via-pink-300 to-sky-400 flex items-center justify-center p-4">
      {renderScreen()}
    </div>
  );
};

export default App;
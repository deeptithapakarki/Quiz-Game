// FIX: Import React to use React.ReactNode type.
import React from 'react';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  icon: (className: string) => React.ReactNode;
}

export type QuizData = {
  [key: string]: Question[];
};

export enum GameState {
  Home = 'HOME',
  Quiz = 'QUIZ',
  Result = 'RESULT',
  Final = 'FINAL',
}
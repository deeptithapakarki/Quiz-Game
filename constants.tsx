
import React from 'react';
import { QuizData } from './types';

const BananaIcon = (className: string) => <div className={className}>🍌</div>;
const AppleIcon = (className: string) => <div className={className}>🍎</div>;
const OrangeIcon = (className: string) => <div className={className}>🍊</div>;
const GrapeIcon = (className: string) => <div className={className}>🍇</div>;

const SunIcon = (className: string) => <div className={className}>☀️</div>;
const MoonIcon = (className: string) => <div className={className}>🌙</div>;
const StarIcon = (className: string) => <div className={className}>⭐</div>;
const CloudIcon = (className: string) => <div className={className}>☁️</div>;

const DogIcon = (className: string) => <div className={className}>🐶</div>;
const CatIcon = (className: string) => <div className={className}>🐱</div>;
const LionIcon = (className: string) => <div className={className}>🦁</div>;
const FishIcon = (className: string) => <div className={className}>🐠</div>;

const TriangleIcon = (className: string) => <div className={className}>🔺</div>;
const SquareIcon = (className: string) => <div className={className}>🟪</div>;
const CircleIcon = (className: string) => <div className={className}>🟣</div>;
const HeartIcon = (className: string) => <div className={className}>❤️</div>;

const EarthIcon = (className: string) => <div className={className}>🌍</div>;
const MarsIcon = (className: string) => <div className={className}>🪐</div>; // Saturn for Mars
const JupiterIcon = (className: string) => <div className={className}>☄️</div>; // Comet for Jupiter

const CarIcon = (className: string) => <div className={className}>🚗</div>;
const BoatIcon = (className: string) => <div className={className}>⛵</div>;
const PlaneIcon = (className: string) => <div className={className}>✈️</div>;
const TrainIcon = (className: string) => <div className={className}>🚂</div>;

const GiraffeIcon = (className: string) => <div className={className}>🦒</div>;
const PaintIcon = (className: string) => <div className={className}>🎨</div>;
const BrainIcon = (className: string) => <div className={className}>🧠</div>;
const AvocadoIcon = (className: string) => <div className={className}>🥑</div>;
const WaterIcon = (className: string) => <div className={className}>💧</div>;
const CalculatorIcon = (className: string) => <div className={className}>🧮</div>;
const LightbulbIcon = (className: string) => <div className={className}>💡</div>;
const RiverIcon = (className: string) => <div className={className}>🌊</div>;
const DesertIcon = (className: string) => <div className={className}>🏜️</div>;
const MoneyIcon = (className: string) => <div className={className}>💰</div>;
const RomanIcon = (className: string) => <div className={className}>🏛️</div>;

export const TOTAL_LEVELS = 7;
export const QUESTIONS_PER_LEVEL = 5;

export const QUIZ_DATA: QuizData = {
  level1: [
    { question: 'What color is a ripe banana?', options: ['Yellow', 'Red', 'Blue', 'Green'], correctAnswer: 'Yellow', icon: BananaIcon },
    { question: 'Which animal says "Meow"?', options: ['Dog', 'Cat', 'Cow', 'Duck'], correctAnswer: 'Cat', icon: CatIcon },
    { question: 'What do you see in the sky during the day?', options: ['Moon', 'Stars', 'Sun', 'Planets'], correctAnswer: 'Sun', icon: SunIcon },
    { question: 'How many wheels does a bicycle have?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'Two', icon: CarIcon },
    { question: 'What color are apples?', options: ['Blue', 'Orange', 'Purple', 'Red'], correctAnswer: 'Red', icon: AppleIcon },
    { question: 'Which animal barks?', options: ['Cat', 'Dog', 'Horse', 'Sheep'], correctAnswer: 'Dog', icon: DogIcon },
    { question: 'What shape is a ball?', options: ['Square', 'Triangle', 'Circle', 'Star'], correctAnswer: 'Circle', icon: CircleIcon },
  ],
  level2: [
    { question: 'How many sides does a triangle have?', options: ['Two', 'Three', 'Four', 'Five'], correctAnswer: 'Three', icon: TriangleIcon },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4', icon: AppleIcon },
    { question: 'What is the opposite of "hot"?', options: ['Warm', 'Cold', 'Spicy', 'Sunny'], correctAnswer: 'Cold', icon: CloudIcon },
    { question: 'Which of these is a primary color?', options: ['Green', 'Orange', 'Blue', 'Purple'], correctAnswer: 'Blue', icon: GrapeIcon },
    { question: 'What do bees make?', options: ['Jam', 'Honey', 'Juice', 'Milk'], correctAnswer: 'Honey', icon: SunIcon },
    { question: 'What is the sound a cow makes?', options: ['Oink', 'Moo', 'Baa', 'Quack'], correctAnswer: 'Moo', icon: CatIcon },
    { question: 'Which fruit is orange and round?', options: ['Apple', 'Banana', 'Orange', 'Grape'], correctAnswer: 'Orange', icon: OrangeIcon },
  ],
  level3: [
    { question: 'What planet do we live on?', options: ['Mars', 'Venus', 'Earth', 'Jupiter'], correctAnswer: 'Earth', icon: EarthIcon },
    { question: 'How many days are in a week?', options: ['5', '6', '7', '8'], correctAnswer: '7', icon: StarIcon },
    { question: 'Which animal is known as the "king of the jungle"?', options: ['Tiger', 'Elephant', 'Lion', 'Bear'], correctAnswer: 'Lion', icon: LionIcon },
    { question: 'What is the capital of France?', options: ['London', 'Rome', 'Berlin', 'Paris'], correctAnswer: 'Paris', icon: HeartIcon },
    { question: 'What do you use to write on a blackboard?', options: ['Pen', 'Pencil', 'Chalk', 'Crayon'], correctAnswer: 'Chalk', icon: MoonIcon },
    { question: 'Which vehicle travels on water?', options: ['Car', 'Airplane', 'Boat', 'Train'], correctAnswer: 'Boat', icon: BoatIcon },
    { question: 'What is frozen water called?', options: ['Steam', 'Gas', 'Liquid', 'Ice'], correctAnswer: 'Ice', icon: CloudIcon },
  ],
  level4: [
    { question: 'Who was the first person to walk on the moon?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins'], correctAnswer: 'Neil Armstrong', icon: MoonIcon },
    { question: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctAnswer: 'Pacific', icon: FishIcon },
    { question: 'How many continents are there?', options: ['5', '6', '7', '8'], correctAnswer: '7', icon: EarthIcon },
    { question: 'What gas do plants breathe in?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], correctAnswer: 'Carbon Dioxide', icon: CloudIcon },
    { question: 'What is the chemical symbol for water?', options: ['O2', 'CO2', 'H2O', 'NaCl'], correctAnswer: 'H2O', icon: GrapeIcon },
    { question: 'Which is the fastest land animal?', options: ['Lion', 'Cheetah', 'Horse', 'Kangaroo'], correctAnswer: 'Cheetah', icon: LionIcon },
    { question: 'What instrument has 88 keys?', options: ['Guitar', 'Violin', 'Piano', 'Drum'], correctAnswer: 'Piano', icon: StarIcon },
  ],
  level5: [
    { question: 'What is the largest mammal in the world?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'], correctAnswer: 'Blue Whale', icon: FishIcon },
    { question: 'In which country are the pyramids of Giza located?', options: ['Greece', 'Mexico', 'Egypt', 'Italy'], correctAnswer: 'Egypt', icon: EarthIcon },
    { question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond', 'Quartz'], correctAnswer: 'Diamond', icon: StarIcon },
    { question: 'Who wrote "Romeo and Juliet"?', options: ['Charles Dickens', 'J.K. Rowling', 'William Shakespeare', 'Mark Twain'], correctAnswer: 'William Shakespeare', icon: HeartIcon },
    { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell Wall'], correctAnswer: 'Mitochondria', icon: SunIcon },
    { question: 'How many planets are in our solar system?', options: ['7', '8', '9', '10'], correctAnswer: '8', icon: MarsIcon },
    { question: 'What is the capital of Japan?', options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'], correctAnswer: 'Tokyo', icon: JupiterIcon },
  ],
  level6: [
    { question: 'What is the tallest land animal?', options: ['Elephant', 'Giraffe', 'Rhino', 'Hippo'], correctAnswer: 'Giraffe', icon: GiraffeIcon },
    { question: 'Who painted the Mona Lisa?', options: ['Van Gogh', 'Picasso', 'Leonardo da Vinci', 'Monet'], correctAnswer: 'Leonardo da Vinci', icon: PaintIcon },
    { question: 'How many bones are in the adult human body?', options: ['156', '206', '256', '306'], correctAnswer: '206', icon: BrainIcon },
    { question: 'What is the main ingredient in guacamole?', options: ['Tomato', 'Onion', 'Avocado', 'Lime'], correctAnswer: 'Avocado', icon: AvocadoIcon },
    { question: 'At what temperature Celsius does water boil?', options: ['50°C', '100°C', '150°C', '200°C'], correctAnswer: '100°C', icon: WaterIcon },
    { question: 'Which planet is known as the "Red Planet"?', options: ['Jupiter', 'Mars', 'Venus', 'Saturn'], correctAnswer: 'Mars', icon: MarsIcon },
    { question: 'What is 12 multiplied by 12?', options: ['124', '134', '144', '154'], correctAnswer: '144', icon: CalculatorIcon },
  ],
  level7: [
    { question: 'Who invented the telephone?', options: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Albert Einstein'], correctAnswer: 'Alexander Graham Bell', icon: LightbulbIcon },
    { question: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correctAnswer: 'Nile', icon: RiverIcon },
    { question: 'In which continent is the Sahara Desert located?', options: ['Asia', 'Australia', 'South America', 'Africa'], correctAnswer: 'Africa', icon: DesertIcon },
    { question: 'What is the currency of the United Kingdom?', options: ['Euro', 'Dollar', 'Pound', 'Yen'], correctAnswer: 'Pound', icon: MoneyIcon },
    { question: 'What is the Roman numeral for 100?', options: ['L', 'C', 'D', 'M'], correctAnswer: 'C', icon: RomanIcon },
    { question: 'What process do plants use to make their own food?', options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Pollination'], correctAnswer: 'Photosynthesis', icon: SunIcon },
    { question: 'Which gas is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'], correctAnswer: 'Nitrogen', icon: CloudIcon },
  ],
};

export const COLORS = ['bg-sky-400', 'bg-lime-400', 'bg-yellow-400', 'bg-pink-400'];
export const HOVER_COLORS = ['hover:bg-sky-500', 'hover:bg-lime-500', 'hover:bg-yellow-500', 'hover:bg-pink-500'];

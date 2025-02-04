import './App.css';
import { useState } from 'react';

const App = () => {

  const [cards, setCards] = useState(10);
  const [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardsArray = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the capital of Spain?", answer: "Madrid" },
    { question: "What is the capital of Italy?", answer: "Rome" },
    { question: "What is the capital of Germany?", answer: "Berlin" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is the capital of Canada?", answer: "Ottawa" },
    { question: "What is the capital of Australia?", answer: "Canberra" },
    { question: "What is the capital of Brazil?", answer: "Brasília" },
    { question: "What is the capital of India?", answer: "New Delhi" },
    { question: "What is the capital of Russia?", answer: "Moscow" },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = cardsArray[currentCardIndex];

  //Function to move to next card
  const nextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cards);
  };

  //Function to move to previous card
  const previousCard = () => {
    setCurrentCardIndex((currentCardIndex - 1 + cards) % cards);
  };

  return (
    <div className="App">
      <div className='header'>
        <h2>The Ultimate Geo-Champion</h2>
        <h3>How good are you with places? Test all your knowledge here!</h3>
        <h4>Number of Cards: {cards}</h4>
        <h4>Score: {score}</h4>
      </div>

      <div className='game-container'>
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <h3>{currentCard.question}</h3>
            </div>
            <div className='flip-card-back'>
              <h3>{currentCard.answer}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='directions'>
          <div className='direction-button' onClick={previousCard}>
            <button>←</button>
          </div>
          <div className='direction-button' onClick={nextCard}>
            <button>→</button>
          </div>
      </div>

    </div>
  )
}

export default App
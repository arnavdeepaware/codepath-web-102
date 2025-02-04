import './App.css';
import { useState } from 'react';

/**
 * The App component is the main component of the Geo Flashcards application.
 * It manages the state of the flashcards, including the current score, 
 * whether the card is flipped, and the index of the current card.
 * 
 * @component
 */
const App = () => {

  const [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  /**
   * Array of flashcard objects, each containing a question and an answer.
   * @type {Array<{question: string, answer: string}>}
   */
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

  /**
   * Toggles the flipped state of the current card.
   */
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  /**
   * Advances to the next card in the array. If the current card is the last one,
   * it wraps around to the first card.
   */
  const nextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cardsArray.length);
  };

  //Function to move to previous card
  const previousCard = () => {
    setCurrentCardIndex((currentCardIndex - 1 + cardsArray.length) % cardsArray.length);
    setIsFlipped(false);
  };

  //Function to integrate flip with next button
  const handleNextCardClick = () => {
    handleCardClick();
    nextCard();
  };

  return (
    <div className="App">

      {/* Header */}
      <div className='header'>
        <h2>The Ultimate Geo-Champion</h2>
        <h3>How good are you with places? Test all your knowledge here!</h3>
        <h4>Number of Cards: {cardsArray.length}</h4>
        <h4>Score: {score}</h4>
      </div>

      {/*FlashCard */}
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

      {/* Direction Buttons */}
      <div className='directions'>
          <div className='direction-button' onClick={previousCard}>
            <button>←</button>
          </div>
          <div className='direction-button' onClick={isFlipped ? handleNextCardClick : null}>
            <button>→</button>
          </div>
      </div>
    </div>
  )
}

export default App
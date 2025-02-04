import './App.css';
import { useState } from 'react';

const App = () => {

  const [cards, setCards] = useState(10);
  const [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
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
              <h3>What is the capital of France?</h3>
            </div>
            <div className='flip-card-back'>
              <h3>Paris</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='directions'>
          <div className='direction-button'>
            <button>←</button>
          </div>
          <div className='direction-button'>
            <button>→</button>
          </div>
      </div>

    </div>
  )
}

export default App
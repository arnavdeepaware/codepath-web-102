import './App.css';
import { useState } from 'react';

const App = () => {

  const [cards, setCards] = useState(10);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className='header'>
        <h2>The Ultimate Geo-Champion</h2>
        <h3>How good are you with places? Test all your knowledge here!</h3>
        <h4>Number of Cards: {cards}</h4>

      </div>

    </div>
  )
}

export default App
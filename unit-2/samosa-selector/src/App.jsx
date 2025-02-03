import './App.css';
import { useState } from 'react';

// const [count, setCount] = useState(0);
// const [multiplier, setMultiplier] = useState(1);
// const updateCount = () => setCount(count + multiplier);

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img 
          className='samosa' 
          src="https://wallpapers.com/images/hd/golden-fried-samosa-black-background-2jx66jdwe3w968js-2jx66jdwe3w968js.jpg"  alt='samosa-img'
          onClick={updateCount}
          />
      </div>
    </div>
  )
}

export default App
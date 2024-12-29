import './App.css';
import Calendar from './components/Calendar';


const App = () => {

  return (
    <div className="App">
      <h1>Welcome to 7 Days in Chicago🏙️</h1>
      <h3>
        Welcome to Chiacgo, Natalia! Check out this calendar to get to know the city and see all the sights during your stay.
      </h3>
      <Calendar />
    </div>
  )
}

export default App
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import HomePage from './Homepage';
import TimeButton from "./Timebutton";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <div><NavBar/></div>
              <div><HomePage/></div>
              <div><TimeButton/></div>
          </header>
      </div>
  );
}

export default App;

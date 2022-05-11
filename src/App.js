
import './App.css';
import logo from './assets/logo.png';
import arrow_right from './assets/arrow_right.svg';
import Questions from './components/Questions.js';
function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <a href="#" className="logo">
            <img src={logo} alt="Logotype_of_widget" />
          </a>
          <a href="#" className="next_step">
            <img src={arrow_right} alt="Next Step" />
          </a>
        </div>
      </header>

      <Questions />
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import About from './components/About'
import ContactUs from './components/LoginForm'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" component={LoginForm} />
        <Route path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactUs} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

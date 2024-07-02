import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import About from './components/About'
import ContactUs from './components/LoginForm'
// import logo from './logo.svg';
import './App.css';

function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;

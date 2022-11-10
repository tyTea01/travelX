import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import DMV from './DMV';
import SS from './SS';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DMV" element={<DMV />} />
          <Route path="/SS" element={<SS />} />
        </Routes>
      </Router>

      </header>
    </div>
  );
}

export default App;

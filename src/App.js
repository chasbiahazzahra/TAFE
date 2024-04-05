import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/login';
import Register from './Components/Pages/register';
import Home from './Components/Pages/home';
import About from './Components/Pages/about';
import Intro from './Components/Pages/intro';
import Start from './Components/Pages/start';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/start" element={<Start />} />
          <Route path="/" element={<Intro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

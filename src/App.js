import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/login';
import Register from './Components/Pages/register';
import Home from './Components/Pages/home';
import About from './Components/Pages/about';
import Intro from './Components/Pages/intro';
import Start from './Components/Pages/start';
import Contact from './Components/Pages/contact';
import Product from './Components/Pages/product';
import Profile from './Components/Pages/profile';
import Cart from './Components/Pages/cart';
import History from './Components/Pages/history';
import Topup from './Components/Pages/topup';
import Editprofile from './Components/Pages/editprofile';
import Checkout from './Components/Pages/checkout';
import Berhasil from './Components/Pages/berhasil';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          <Route path="/topup" element={<Topup />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/berhasil" element={<Berhasil />} />
          <Route path="/" element={<Intro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

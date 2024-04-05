// pages/register.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';
import '../Css/Login.css'

const Register = () => {
  const handleRegister = () => {
  };

  return (
    <div className=" container-fluid bg-blue d-flex justify-content-center align-items-center vh-100">
    <div className='Cover-card bg-white px-5 py-5 d-flex flex-column align-items-center'>
      <img src={Logo} alt="Logo" className="logo" width="100"/>
      <h1 className='mb-5 log-title'>SIGN UP</h1>
      <div className="input-group mb-3 mt-3">
          <input type="email" className="form-control p-2" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3 mt-3">
          <input type="text" className="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3 mt-3">
          <input type="password" className="form-control p-2" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
      </div>
      <p className='mt-3'>Have an account? <Link to="/login" className='td-none'>Login</Link> here</p>
      <button className='btn-primary mt-3'><b>SIGN UP</b></button>
    </div>
  </div>
  );
};

export default Register;

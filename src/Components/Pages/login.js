
import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Login.css'
import Logo from '../Assets/Logo.png';

const Login = () => {

  return (
    <div className=" container-fluid bg-blue d-flex justify-content-center align-items-center vh-100">
      <div className='Cover-card bg-white px-5 py-5 d-flex flex-column align-items-center'>
      <img src={Logo} alt="Logo" className="logo mb-2" />
        <h1 className='mb-5 log-title'>LOGIN</h1>
        <div className="input-group mb-3 mt-3">
            <input type="text" className="form-control p-2" placeholder="Username or email" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3 mt-3">
            <input type="password" className="form-control p-2" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
        </div>
        <p className='mt-3'>Dont’t have an account? <Link to="/register" className='td-none'>Sign Up</Link> here</p>
        <Link to="/home"><button className='btn-primary mt-3'><b>LOGIN</b></button></Link>
      </div>
    </div>
  );
};

export default Login;

import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/Login.css'
import Logo from '../Assets/Logo.png';

const Start = () => {
  return (
    <div>
      <div className=" container-fluid bg-blue d-flex justify-content-center align-items-center vh-100">
      <div className='Cover-card bg-white px-5 py-5 d-flex flex-column align-items-center'>
        <img src={Logo} alt="Logo" className="logo" width="80"/>
        <h1 className='log-title'>Bendera Dunia</h1>
        <p className='mt-3 text-center text-blue'>Tidak ada bendera negara yang <br></br> terlewati di Dunia ini<br></br> #AroundTheWorld</p>
        <Link className='w-100' to="/login"><button className='btn-prime mt-3'><b>LOGIN</b></button></Link>
        <Link className='w-100' to="/register"><button className='btn-secondary mt-3'><b>SIGN UP</b></button></Link>
      </div>
    </div>
    </div>
  )
}

export default Start

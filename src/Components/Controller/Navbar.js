import React from 'react'
import Logo from '../Assets/Logo.png';
import '../Css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-linear px-5 py-2">
      <div className="container-fluid">
        <a href="home">
          <img src={Logo} alt="Logo" className="logo me-5" width="50" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <input className='ps-2 pe-5 py-2 searchBar d-none d-lg-block' type="text" placeholder='Kamu lagi cari apa nih?' />
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <a className="nav-link active" aria-current="page" href="about"><span>About</span></a>
            </li>
            <li className="nav-item me-5">

              <a className="nav-link active" aria-current="page" href="product"><span>Product</span></a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" aria-current="page" href="contact"><span>Contact</span></a>

            </li>
            <div className='d-flex'>
              <li className="nav-item">
                <a className="nav-link btn-nav" aria-current="page" href="cart"><i class="fa-solid fa-basket-shopping"></i></a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link btn-nav" aria-current="page" href="profile"><i class="fa-solid fa-user"></i></a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

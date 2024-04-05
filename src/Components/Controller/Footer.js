import React from 'react'
import '../Css/Footer.css'

const Footer = () => {
  return (
    <div className='container-fluid bg-blue text-white px-5 py-3'>
        <div className="row mt-5">
            <div className="col-lg-5">
                <h1>Bendera Dunia</h1>
                <p className='mt-3'>Tidak ada bendera negara yang terlewati <br />di Dunia ini</p>
                <p>#AroundTheWorld</p>
                <h4>Official Store</h4>
                <div className="btn-footer mt-5">
                    <a href="#"><button className='btn-shp me-4'>Shapii</button></a>
                    <a href="#"><button className='btn-tkp'>TokoPerkara</button></a>
                </div>
                <p className='mt-5'>&copy; 2024 TimBenderaDunia</p>
            </div>
            <div className="col-lg-4">
                <h3>Tentang Bendera Dunia</h3>
                <p>Tentang Bendera Dunia</p>
            </div>
            <div className="col-lg-3">
                <h3>Hubungi Kami</h3>
                <p>Malang, Indonesia</p>
                <p>+62 8179109941</p>
                <div className="sosmed d-flex">
                    <a href='#' className="circle">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href='#' className="circle">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href='#' className="circle">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

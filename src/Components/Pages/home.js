// pages/home.js
import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import Wallet from '../Assets/Wallet.png';
import secThree from '../Assets/sec-3.png';
import secFour from '../Assets/sec-4.png';
import secFive from '../Assets/sec-5.png';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <div className='contrainer-fluid bg-linear'>
                <div className='d-flex px-5 justify-content-center align-items-center'>
                    <div className="desc-dashboard text-white">
                        <h1>Beranda</h1>
                        <p>Berisi tentang informasi produk yang kami jual yaitu bendera negara. Disini kami menyediakan fitur transaksi, cart dan detail barang kami agar bisa membantu user. </p>
                    </div>
                    <div className="img-flag">
                        <img src={Flag} alt="Logo" className="logo" width="600"/>
                    </div>
                </div>
                <div className="section-2 d-flex justify-content-center">
                    <div className="wallet bg-white d-flex align-items-center justify-content-between px-4 py-2">
                        <img src={Wallet} alt="Logo" className="logo" width="70"/>
                        <div className="wallet-title">
                            <p><b>Saldomu</b></p>
                            <p>Rp. 1.000.000.000.000,00</p>
                        </div>
                        <div className="btn-wallet d-flex flex-column align-items-center">
                            <i className="bi bi-cart"></i>
                            <p><b>History</b></p>
                        </div>
                        <div className="btn-wallet d-flex flex-column align-items-center">
                            <i className="bi bi-box-arrow-left"></i>
                            <p><b>Log Out</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-3 container d-flex justify-content-center p-5">
                <div className="mt-5">
                    <h1 className='mt-5'><b>Cek yang menarik</b></h1>
                    <img src={secThree} alt="Logo" className="logo" width="900"/>
                </div>
            </div>

            <div className="batas d-flex flex-column align-items-center">
                <p><b>Paling Meriah</b></p>
                <div className="slide d-flex">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>

            <div className="section-4 container d-flex justify-content-center p-5">
                <div>
                    <h1 className='mt-5'><b>Yang lagi panas-panasnya</b></h1>
                    <img src={secFour} alt="Logo" className="logo" width="900"/>
                </div>
            </div>

            <div className="batas d-flex flex-column align-items-center">
                <p><b>Tegang Sekali</b></p>
                <div className="slide d-flex">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>

            <div className="section-5 container d-flex justify-content-center p-5 mt-5">
                <div className='d-flex'>
                    <div className='me-5 pe-5'>
                        <h1 className='mt-5'><b>Love Help Care <br /> Hope</b></h1>
                    <button className='btn-primary mt-3'><b>Telusuri</b></button>
                    </div>
                    <img src={secFive} alt="Logo" className="logo" width="500"/>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Home;

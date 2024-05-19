import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';

const Berhasil = () => {

    return (
        <div>
            <Navbar />

            <div>
                <div className='contrainer-fluid bg-linear'>
                    <div className='d-flex px-5 justify-content-center align-items-center'>
                        <div className="desc-dashboard text-white">
                            <h1>Product</h1>
                            <p>Explore dan telusuri negara dan bagian benua mana yang ingin di beli.</p>
                        </div>
                        <div className="img-flag">
                            <img src={Flag} alt="Logo" className="logo" width="600" />
                        </div>
                    </div>
                </div>

                <div className="section-5 container d-flex flex-column p-5 mt-5" style={{ alignItems: 'flex-start', color: '#62B894' }}>
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-check" style={{ color: '#62B894', fontSize: '24px', marginRight: '10px' }}></i>
                        <h4 className='mt-0'><b>Checkout berhasil dilakukan</b></h4>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default Berhasil;

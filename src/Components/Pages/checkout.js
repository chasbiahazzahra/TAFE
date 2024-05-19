import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import Flagcircle from '../Assets/flag circle.png';

const Checkout = () => {

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

                <div className="section-5 container d-flex flex-column p-5 mt-5" style={{ alignItems: 'flex-start' }}>
                    <h3 className='mt-0'><b>Order Summary</b></h3>
                </div>

                <div className="container" style={{ marginLeft: '150px' }}>
                    <div className='d-flex align-items-center' style={{ marginBottom: '20px' }}>
                        <img
                            src={Flagcircle}
                            alt="Logo"
                            className="logo"
                            width="50"
                            height="50"
                            style={{ marginLeft: '5px' }}
                        />
                        <div className='d-flex' style={{ marginLeft: '150px' }}>
                            <div style={{ marginRight: '150px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Product</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>Indonesia</h6>
                            </div>
                            <div style={{ marginRight: '150px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Harga</h6>
                                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <h6 className='mt-2' style={{ marginRight: '5px', verticalAlign: 'middle' }}>Rp. 100.000</h6>
                                </div>
                            </div>
                            <div style={{ marginRight: '150px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>QTY</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>3 pieces</h6>
                            </div>
                            <div>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Total</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>Rp. 300.000</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-3 justify-content-around'>
                        <a
                            className='btn-primary d-flex align-items-center justify-content-center'
                            aria-current="page"
                            href="berhasil"
                            style={{
                                marginBottom: "50px",
                                fontSize: "12px",
                                textWrap: "nowrap",
                                width: "10px",
                                backgroundColor: "#00659E",
                                borderRadius: "10px",
                                marginLeft: '1300px',
                                textDecoration: "none",
                                color: "white"
                            }}
                        >
                            <b className='ms-0'>Buy Now</b>
                        </a>
                    </div>














            </div>
            <Footer />
        </div>
    );
};

export default Checkout;

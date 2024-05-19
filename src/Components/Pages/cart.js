import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import Bgcart from '../Assets/bg cart.png';
import Flagcircle from '../Assets/flag circle.png';
import Line from '../Assets/Line 2.png';

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='contrainer-fluid bg-linear'>
                    <div className='d-flex px-5 justify-content-center align-items-center'>
                        <div className="desc-dashboard text-white">
                            <h1>Cart</h1>
                            <p>Pantau barang yang sudah kamu simpan, kami menyediakan fitur ini agar customer dapat melihat barang yang akan dibeli sebelum melakukan transaksi.</p>
                        </div>
                        <div className="img-flag">
                            <img src={Flag} alt="Logo" className="logo" width="600" />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', position: 'relative' }}>
                    <img src={Bgcart} alt="Logo" className="logo" width="1500" style={{ margin: '20px', maxWidth: 'calc(100% - 40px)', maxHeight: 'calc(100% - 40px)' }} />
                    <div className='d-flex align-items-center' style={{ marginBottom: '20px', position: 'absolute', top: '20%', left: '150px', transform: 'translateY(-50%)' }}>
                        <i class="fa-regular fa-square" style={{ fontSize: '25px', color: "#00659D", marginRight: '20px' }}></i>
                        <img src={Flagcircle} alt="Logo" className="logo" width="50" height="50" style={{ marginLeft: '80px' }} />
                        <div className='d-flex' style={{ marginLeft: '150px' }}>
                            <div style={{ marginRight: '250px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Name</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>Indonesia</h6>
                            </div>
                            <div style={{ marginRight: '250px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>QTY</h6>
                                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <i class="fa-solid fa-circle-plus" style={{ marginRight: '5px', color: "#00659E", verticalAlign: 'middle' }}></i>
                                    <h6 className='mt-2' style={{ marginRight: '5px', verticalAlign: 'middle' }}>3</h6>
                                    <i class="fa-solid fa-circle-minus" style={{ marginRight: '5px', color: "#00659E", verticalAlign: 'middle' }}></i>
                                </div>
                            </div>
                            <div>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Price</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>Rp. 100.000</h6>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: 'calc(50% + 40px)', width: '110%', maxWidth: '1300px' }}>
                            <img src={Line} alt="Logo" className="logo" width="100%" />
                        </div>
                    </div>

                    <div className='d-flex align-items-center' style={{ marginBottom: '20px', position: 'absolute', top: '50%', left: '150px', transform: 'translateY(-50%)' }}>
                        <i class="fa-solid fa-square-check" style={{ fontSize: '25px', color: "#00659D", marginRight: '20px' }}></i>
                        <img src={Flagcircle} alt="Logo" className="logo" width="50" height="50" style={{ marginLeft: '80px' }} />
                        <div className='d-flex' style={{ marginLeft: '150px' }}>
                            <div style={{ marginRight: '250px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Name</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>Indonesia</h6>
                            </div>
                            <div style={{ marginRight: '250px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>QTY</h6>
                                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <i class="fa-solid fa-circle-plus" style={{ marginRight: '5px', color: "#00659E", verticalAlign: 'middle' }}></i>
                                    <h6 className='mt-2' style={{ marginRight: '5px', verticalAlign: 'middle' }}>3</h6>
                                    <i class="fa-solid fa-circle-minus" style={{ marginRight: '5px', color: "#00659E", verticalAlign: 'middle' }}></i>
                                </div>
                            </div>
                            <div>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Price</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>Rp. 100.000</h6>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: 'calc(50% + 40px)', width: '110%', maxWidth: '1300px' }}>
                            <img src={Line} alt="Logo" className="logo" width="100%" />
                        </div>
                    </div>

                    <div className='d-flex align-items-center' style={{ marginBottom: '20px', position: 'absolute', top: '80%', left: '150px', transform: 'translateY(-50%)' }}>
                        <i class="fa-regular fa-square" style={{ fontSize: '25px', color: "#00659D", marginRight: '20px' }}></i>
                        <img src={Flagcircle} alt="Logo" className="logo" width="50" height="50" style={{ marginLeft: '80px' }} />
                        <div className='d-flex' style={{ marginLeft: '150px' }}>
                            <div style={{ marginRight: '250px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Name</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>Indonesia</h6>
                            </div>
                            <div style={{ marginRight: '250px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>QTY</h6>
                                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <i class="fa-solid fa-circle-plus" style={{ marginRight: '5px', color: "#00659E", verticalAlign: 'middle' }}></i>
                                    <h6 className='mt-2' style={{ marginRight: '5px', verticalAlign: 'middle' }}>3</h6>
                                    <i class="fa-solid fa-circle-minus" style={{ marginRight: '5px', color: "#00659E", verticalAlign: 'middle' }}></i>
                                </div>
                            </div>
                            <div>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Price</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px' }}>Rp. 100.000</h6>
                            </div>
                        </div>
                    </div>
                </div>









                <div className='d-flex align-items-center justify-content-start' style={{ marginBottom: '50px' }}>
                    <h6 className='mt-2' style={{ marginRight: '100px', marginLeft: '60px' }}>Terpilih 1 barang</h6>
                    <div className='d-flex align-items-center'>
                        <i class="fa-solid fa-angle-left" style={{ marginRight: '10px', marginLeft: '400px' }}></i>
                        <h6 className='mt-2' style={{ marginRight: '10px', color: '#00659E' }}><b>1</b></h6>
                        <h6 className='mt-2' style={{ marginRight: '10px' }}>2</h6>
                        <h6 className='mt-2' style={{ marginRight: '10px' }}>3</h6>
                        <h6 className='mt-2' style={{ marginRight: '10px' }}>4</h6>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className='mt-3 justify-content-around'>
                        <a
                            className='btn-primary d-flex align-items-center justify-content-center'
                            aria-current="page"
                            href="checkout"
                            style={{
                                fontSize: "12px",
                                textWrap: "nowrap",
                                width: "10px",
                                backgroundColor: "#00659E",
                                borderRadius: "10px",
                                marginLeft: '570px',
                                textDecoration: "none",
                                color: "white"
                            }}
                        >
                            <b className='ms-0'>Checkout</b>
                        </a>
                    </div>


                </div>

















            </div>
            <Footer />
        </div>
    );
};

export default Cart;

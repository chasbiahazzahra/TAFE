import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import Bgcart from '../Assets/bg cart.png';
import Flagcircle from '../Assets/flag circle.png';
import Line from '../Assets/Line 2.png';

const History = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='contrainer-fluid bg-linear'>
                    <div className='d-flex px-5 justify-content-center align-items-center'>
                        <div className="desc-dashboard text-white">
                            <h1>History</h1>
                            <p>Jejak transaksi yang sudah anda beli di website kami. Kami berkomitmen untuk melayani customer dengan baik.</p>
                        </div>
                        <div className="img-flag">
                            <img src={Flag} alt="Logo" className="logo" width="600" />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', position: 'relative' }}>
                    <img src={Bgcart} alt="Logo" className="logo" width="1500" style={{ margin: '20px', maxWidth: 'calc(100% - 40px)', maxHeight: 'calc(100% - 40px)' }} />
                    <div className='d-flex align-items-center' style={{ marginBottom: '20px', position: 'absolute', top: '20%', left: '150px', transform: 'translateY(-50%)' }}>

                        <img src={Flagcircle} alt="Logo" className="logo" width="50" height="50" style={{ marginLeft: '5px' }} />
                        <div className='d-flex' style={{ marginLeft: '150px' }}>
                            <div style={{ marginRight: '150px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Name</h6>
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
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Status</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#03AA14" }}>Complete</h6>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: 'calc(50% + 40px)', width: '110%', maxWidth: '1300px' }}>
                            <img src={Line} alt="Logo" className="logo" width="100%" />
                        </div>
                    </div>

                    <div className='d-flex align-items-center' style={{ marginBottom: '20px', position: 'absolute', top: '50%', left: '150px', transform: 'translateY(-50%)' }}>

                        <img src={Flagcircle} alt="Logo" className="logo" width="50" height="50" style={{ marginLeft: '5px' }} />
                        <div className='d-flex' style={{ marginLeft: '150px' }}>
                            <div style={{ marginRight: '150px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Name</h6>
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
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Status</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#03AA14" }}>Complete</h6>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: 'calc(50% + 40px)', width: '110%', maxWidth: '1300px' }}>
                            <img src={Line} alt="Logo" className="logo" width="100%" />
                        </div>
                    </div>

                    <div className='d-flex align-items-center' style={{ marginBottom: '20px', position: 'absolute', top: '80%', left: '150px', transform: 'translateY(-50%)' }}>

                        <img src={Flagcircle} alt="Logo" className="logo" width="50" height="50" style={{ marginLeft: '5px' }} />
                        <div className='d-flex' style={{ marginLeft: '150px' }}>
                            <div style={{ marginRight: '150px' }}>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Name</h6>
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
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#9A9A9A" }}>Status</h6>
                                <h6 className='mt-2' style={{ marginRight: '5px', color: "#03AA14" }}>Complete</h6>
                            </div>
                        </div>


                    </div>
                </div>









                <div className='d-flex align-items-center justify-content-start' style={{ marginBottom: '50px' }}>
                    <h6 className='mt-2' style={{ marginRight: '100px', marginLeft: '60px' }}>Showing 01-03 of 12</h6>
                    <div className='d-flex align-items-center'>
                        <i class="fa-solid fa-angle-left" style={{ marginRight: '10px', marginLeft: '1040px' }}></i>
                        <h6 className='mt-2' style={{ marginRight: '10px', color: '#00659E' }}><b>1</b></h6>
                        <h6 className='mt-2' style={{ marginRight: '10px' }}>2</h6>
                        <h6 className='mt-2' style={{ marginRight: '10px' }}>3</h6>
                        <h6 className='mt-2' style={{ marginRight: '10px' }}>4</h6>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>




            </div>
            <Footer />
        </div>
    );
};

export default History;

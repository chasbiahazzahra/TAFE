import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import Topupkecil from '../Assets/topup.png'
import Background from '../Assets/bg produk.png'

const Topup = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='contrainer-fluid bg-linear'>
                    <div className='d-flex px-5 justify-content-center align-items-center'>
                        <div className="desc-dashboard text-white">
                            <h1>Top Up</h1>
                            <p>Tidak bisa membeli barang karena ga ada uang? Top Up dulu nih!!</p>
                        </div>
                        <div className="img-flag">
                            <img src={Flag} alt="Logo" className="logo" width="600" />
                        </div>
                    </div>
                </div>


                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 1</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 2</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 200.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 3</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 300.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>



                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {/* Kotak pertama */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 1</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kotak kedua */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 2</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 200.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kotak ketiga */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 3</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 300.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {/* Kotak pertama */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 1</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kotak kedua */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 2</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 200.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kotak ketiga */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Topupkecil} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Saldo Pack 3</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 300.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <b className='ms-0'>Top Up</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>









            </div>
            <Footer />
        </div>
    );
};

export default Topup;

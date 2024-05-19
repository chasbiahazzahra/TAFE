import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React, { useState } from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import Bendera from '../Assets/bendera produk.png'
import Background from '../Assets/bg produk.png'

const Product = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan pencarian sesuai dengan nilai searchTerm
        console.log('Search term:', searchTerm);
    };

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

                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginBottom: "20px" }}>
                    {/* Tampilan search bar */}
                    <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginRight: '20px' }}>
                        <i className="fa-solid fa-magnifying-glass" style={{ marginTop:'50px', marginLeft: '250px', marginRight: '20px' }}></i>
                        <input
                            type="text"
                            placeholder="Search by name, merk, price..."
                            value={searchTerm}
                            onChange={handleChange}
                            style={{ padding: '8px', marginRight: '5px', background: 'transparent', border: 'none', outline: 'none' }}
                            onFocus={(e) => { e.target.style.border = 'none'; }}
                            onBlur={(e) => { e.target.style.border = 'none'; }}
                        />
                    </form>
                </div>





                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
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
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kotak kedua */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kotak ketiga */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
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
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kotak kedua */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kotak ketiga */}
                    <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px" }}>
                        <img src={Background} alt="Logo" className="logo" style={{ position: "absolute", top: "10px", left: "10px", width: "calc(100% - 20px)", height: "calc(100% - 20px)", objectFit: "cover" }} />
                        <div className="product" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", paddingLeft: "10px", width: "90%" }}>
                            <div style={{ marginLeft: "30px", marginBottom: "10px", width: "80%", maxHeight: "80%", textAlign: 'center' }}>
                                <img src={Bendera} alt="Product" style={{ width: "100%" }} />
                            </div>
                            <div style={{ marginLeft: "30px", display: "inline-block", verticalAlign: "middle" }}>
                                <h4 style={{ position: "relative", zIndex: "1", marginBottom: "5px", marginLeft: "0", fontSize: "16px" }}><b>Indonesia Flag</b></h4>
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <p className='mt-2' style={{ marginBottom: "5px", fontSize: "14px", verticalAlign: "middle" }}>Rp. 100.000</p>
                                <button className='btn btn-primary d-flex align-items-center justify-content-center' style={{ fontSize: "10px", textWrap: "nowrap", width: "105px" }}>
                                    <i className='fa fa-plus'></i>
                                    <b className='ms-2'>Add to Cart</b>
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

export default Product;

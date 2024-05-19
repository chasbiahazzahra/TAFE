import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React, { useState } from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import History from '../Assets/Rectangle Profile.png'
import Circle from '../Assets/profile circle.png'
import Bg from '../Assets/Bg besar profile.png'
import Profbesar from '../Assets/profile besar.png'

const Profile = () => {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        gender: ''
    });

    // Handler perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handler pengiriman formulir
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data formulir, seperti mengirim ke server
        console.log(formData);
        // Atau lakukan pengiriman ke backend di sini
        // Contoh: axios.post('/api/contact', formData)
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className='contrainer-fluid bg-linear'>
                    <div className='d-flex px-5 justify-content-center align-items-center'>
                        <div className="desc-dashboard text-white">
                            <h1>My Profile</h1>
                            <p>Explore dan telusuri negara dan bagian benua mana yang ingin di beli.</p>
                        </div>
                        <div className="img-flag">
                            <img src={Flag} alt="Logo" className="logo" width="600" />
                        </div>
                    </div>
                </div>


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', height: '100vh', position: 'relative' }}>
                    <img src={Bg} alt="Logo" className="logo" width="1300" height="600" style={{ margin: 'auto', maxWidth: 'calc(100% - 40px)', maxHeight: 'calc(100% - 40px)' }} />
                    <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -40%)', display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', position: 'relative' }}>
                            <img src={Profbesar} alt="Logo" className="logo" width="350" height="300" style={{ marginRight: '20px' }} />

                        </div>


                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <a className="nav-link" aria-current="page" href="editprofile"><i class="fa-solid fa-square-pen" style={{ color: "#00659E", fontSize: "30px", marginTop: '20px', marginLeft: '650px' }}></i></a>
                            <form onSubmit={handleSubmit} >
                                <div className="container mb-3">
                                    <label htmlFor="username" className="form-label" style={{ marginTop: '10px', color: "#00659E", fontWeight: "bold" }}>Username</label>
                                    <input type="text" className="form-control d-flex" id="username" name="username" value={formData.username} onChange={handleChange} style={{ border: '1px solid #00659E', padding: '10px', background: 'transparent' }} />
                                </div>
                                <div className="container mb-3" style={{ marginRight: '20px' }}>
                                    <label htmlFor="email" className="form-label" style={{ marginTop: '10px', color: "#00659E", fontWeight: "bold" }}>Email</label>
                                    <input type="text" className="form-control d-flex" id="email" name="email" value={formData.email} onChange={handleChange} style={{ border: '1px solid #00659E', padding: '10px', background: 'transparent' }} />
                                </div>
                                <div className="container mb-3">
                                    <label htmlFor="gender" className="form-label" style={{ marginTop: '10px', color: "#00659E", fontWeight: "bold" }}>Gender</label>
                                    <input type="text" className="form-control" id="gender" name="gender" value={formData.message} onChange={handleChange} style={{ border: '1px solid #00659E', padding: '10px', background: 'transparent' }} />
                                </div>
                            </form>



                        </div>
                    </div>
                </div>














                <div className="section-5 container d-flex flex-column p-5 mt-5" style={{ alignItems: 'flex-start' }}>
                    <h3 className='mt-0'><b>History Transaction</b></h3>

                    <div className="section-3 container d-flex justify-content-center p-5">
                        <div className="mt-50" style={{ position: 'relative', textAlign: 'center' }}>
                            <img src={History} alt="Logo" className="logo" width="1300" height="50" />
                            <div className='d-flex position-absolute top-0 start-50 translate-middle-x justify-content-center'>
                                <h6 className='mt-3' style={{ marginRight: '155px' }}><b>Name</b></h6>
                                <h6 className='mt-3' style={{ margin: '0 75px' }}><b>Product</b></h6>
                                <h6 className='mt-3' style={{ margin: '0 120px' }}><b>QTY</b></h6>
                                <h6 className='mt-3' style={{ margin: '0 110px' }}><b>Price</b></h6>
                                <h6 className='mt-3' style={{ margin: '0 100px' }}><b>Status</b></h6>
                            </div>
                        </div>
                    </div>


                    <div className='d-flex align-items-center justify-content-center' style={{ marginBottom: '20px' }}>
                        <img src={Circle} alt="Logo" className="logo" width="50" height="50" />
                        <div className='d-flex start-70 justify-content-center'>
                            <h6 className='mt-2' style={{ marginLeft: '20px', marginRight: '100px' }}>Skibidi</h6>
                            <h6 className='mt-2' style={{ margin: '0 100px' }}>Indonesia</h6>
                            <h6 className='mt-2' style={{ margin: '0 80px' }}>12 pieces</h6>
                            <h6 className='mt-2' style={{ margin: '0 100px' }}>Rp. 100.000</h6>
                            <div className='d-flex align-items-center'>
                                <i className='fa-solid fa-check' style={{ marginLeft: '60px', color: '#03AA14' }}></i>
                                <h6 className='mt-2' style={{ marginLeft: '10px', color: '#03AA14' }}>Completed</h6>
                            </div>
                        </div>
                    </div>


                    <div className='d-flex align-items-center justify-content-center' style={{ marginBottom: '20px' }}>
                        <img src={Circle} alt="Logo" className="logo" width="50" height="50" />
                        <div className='d-flex start-70 justify-content-center'>
                            <h6 className='mt-2' style={{ marginLeft: '20px', marginRight: '100px' }}>Skibidi</h6>
                            <h6 className='mt-2' style={{ margin: '0 100px' }}>Indonesia</h6>
                            <h6 className='mt-2' style={{ margin: '0 80px' }}>12 pieces</h6>
                            <h6 className='mt-2' style={{ margin: '0 100px' }}>Rp. 100.000</h6>
                            <div className='d-flex align-items-center'>
                                <i className='fa-solid fa-check' style={{ marginLeft: '60px', color: '#03AA14' }}></i>
                                <h6 className='mt-2' style={{ marginLeft: '10px', color: '#03AA14' }}>Completed</h6>
                            </div>
                        </div>
                    </div>


                    <div className='d-flex align-items-center justify-content-center' style={{ marginBottom: '20px' }}>
                        <img src={Circle} alt="Logo" className="logo" width="50" height="50" />
                        <div className='d-flex start-70 justify-content-center'>
                            <h6 className='mt-2' style={{ marginLeft: '20px', marginRight: '100px' }}>Skibidi</h6>
                            <h6 className='mt-2' style={{ margin: '0 100px' }}>Indonesia</h6>
                            <h6 className='mt-2' style={{ margin: '0 80px' }}>12 pieces</h6>
                            <h6 className='mt-2' style={{ margin: '0 100px' }}>Rp. 100.000</h6>
                            <div className='d-flex align-items-center'>
                                <i className='fa-solid fa-check' style={{ marginLeft: '60px', color: '#03AA14' }}></i>
                                <h6 className='mt-2' style={{ marginLeft: '10px', color: '#03AA14' }}>Completed</h6>
                            </div>
                        </div>
                    </div>


                    <div className='d-flex align-items-center justify-content-center' style={{ marginBottom: '20px' }}>
                        <img src={Circle} alt="Logo" className="logo" width="50" height="50" />
                        <div className='d-flex start-70 justify-content-center'>
                            <h6 className='mt-2' style={{ marginLeft: '20px', marginRight: '100px' }}>Skibidi</h6>
                            <h6 className='mt-2' style={{ margin: '0 100px' }}>Indonesia</h6>
                            <h6 className='mt-2' style={{ margin: '0 80px' }}>12 pieces</h6>
                            <h6 className='mt-2' style={{ margin: '0 100px' }}>Rp. 100.000</h6>
                            <div className='d-flex align-items-center'>
                                <i className='fa-solid fa-check' style={{ marginLeft: '60px', color: '#03AA14' }}></i>
                                <h6 className='mt-2' style={{ marginLeft: '10px', color: '#03AA14' }}>Completed</h6>
                            </div>
                        </div>
                    </div>


                </div>






            </div>
            <Footer />
        </div>
    );
};

export default Profile;

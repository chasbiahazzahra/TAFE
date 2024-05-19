import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React, { useState } from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import Bg from '../Assets/Bg besar profile.png'
import Profbesar from '../Assets/profile besar.png'
import camera from '../Assets/circle camera.png'

const Editprofile = () => {

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
                            <div style={{ position: 'absolute', bottom: '0', right: '0', display: 'flex', alignItems: 'center' }}>
                                <img src={camera} alt="Logo" className="logo" width="50" height="50" />
                                <a className="nav-link" aria-current="page" href="editprofile" style={{ position: 'relative', marginLeft: '-1px', zIndex: '1' }}>
                                    <i class="fa-solid fa-camera" style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-130%, -50%)', color: "#00659E", fontSize: "30px" }}></i>
                                </a>
                            </div>
                        </div>


                        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                            <div className='mt-3 d-flex justify-content-around'>
                                <a className='btn btn-primary d-flex align-items-center justify-content-center' aria-current="page" href="profile" style={{ fontSize: "12px", textWrap: "nowrap", width: "105px", backgroundColor: "#00659E", marginLeft: '500px', textDecoration: 'none' }}>
                                    <b className='ms-0'>Save</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', height: '100vh', position: 'relative' }}>
                    <img src={Bg} alt="Logo" className="logo" width="1300" height="600" style={{ margin: 'auto', maxWidth: 'calc(100% - 40px)', maxHeight: 'calc(100% - 40px)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h2 className='mt-2' style={{ color: "#00659D", marginBottom: "20px", marginLeft: '150px' }}><b>Change Your Password</b></h2>
                        <form onSubmit={handleSubmit} style={{ width: '1100px', marginLeft: '150px' }}>
                            <div className="container mb-3">
                                <label htmlFor="username" className="form-label" style={{ marginTop: '10px', color: "#00659E", fontWeight: "bold" }}>Old Password</label>
                                <input type="text" className="form-control d-flex" id="username" name="username" value={formData.username} onChange={handleChange} style={{ border: '1px solid #00659E', padding: '10px', background: 'transparent' }} />
                            </div>
                            <div className="container mb-3" style={{ marginRight: '20px' }}>
                                <label htmlFor="email" className="form-label" style={{ marginTop: '10px', color: "#00659E", fontWeight: "bold" }}>New Password</label>
                                <input type="text" className="form-control d-flex" id="email" name="email" value={formData.email} onChange={handleChange} style={{ border: '1px solid #00659E', padding: '10px', background: 'transparent' }} />
                            </div>
                            <div className="container mb-3">
                                <label htmlFor="gender" className="form-label" style={{ marginTop: '10px', color: "#00659E", fontWeight: "bold" }}>Verify New Password</label>
                                <input type="text" className="form-control" id="gender" name="gender" value={formData.message} onChange={handleChange} style={{ border: '1px solid #00659E', padding: '10px', background: 'transparent' }} />
                            </div>
                            <div className='mt-3 d-flex justify-content-around'>
                                <a className='btn btn-primary d-flex align-items-center justify-content-center' aria-current="page" href="profile" style={{ marginTop: '20px', marginLeft: '1000px', fontSize: "12px", textWrap: "nowrap", width: "105px", backgroundColor: "#00659E", textDecoration: 'none' }}>
                                    <b className='ms-0'>Save</b>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>








            </div>
            <Footer />
        </div>
    );
};

export default Editprofile;

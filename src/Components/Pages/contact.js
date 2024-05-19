import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React, { useState } from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import Kotak from '../Assets/kotak contact.png';
import '../Css/Footer.css'


const Contact = () => {
    // State untuk menyimpan data input formulir
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
                            <h1>Contact</h1>
                            <p>Hubungi kami jika ada masalah atau bug, dan jika ingin mengirim kritik dan saran untuk web kami itu akan sangat membantu. </p>
                        </div>
                        <div className="img-flag">
                            <img src={Flag} alt="Logo" className="logo" width="600" />
                        </div>
                    </div>
                </div>

                <div className="container d-flex my-5 justify-content-around">
                    <div className="img-flag" style={{ position: "relative", width: "50%", height: "450px", overflow: "hidden", marginRight: "50px" }}>
                        <img src={Kotak} alt="Logo" className="logo" width="400" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} />
                        <div className="desc-dashboard text-white" style={{ position: "absolute", top: "10%", left: "0", textAlign: "left", marginLeft: "50px" }}>
                            <h2 className='mt-2' style={{ color: "#00659D", marginBottom: "30px" }}><b>Contact Information</b></h2>
                            <h4 className='mt-2' style={{ color: "#00659D", marginBottom: "5px" }}><b>Address</b></h4>
                            <h6 className='mt-2' style={{ color: "#00659D", marginBottom: "15px" }}>SMK Telkom Malang</h6>
                            <h4 className='mt-2' style={{ color: "#00659D", marginBottom: "5px" }}><b>Email Us</b></h4>
                            <h6 className='mt-2' style={{ color: "#00659D", marginBottom: "15px" }}>BenderaDunia@gmail.com</h6>
                            <h4 className='mt-2' style={{ color: "#00659D", marginBottom: "5px" }}><b>Call Us</b></h4>
                            <h6 className='mt-2' style={{ color: "#00659D", marginBottom: "15px" }}>888 123 321 432</h6>
                            <h4 className='mt-2' style={{ color: "#00659D", marginBottom: "5px" }}><b>Cari Tau Lagi</b></h4>
                            <div className="sosmed d-flex">
                                <a href='#' className="circle" style={{ marginTop: "10px" }}>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href='#' className="circle" style={{ marginTop: "10px" }}>
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href='#' className="circle" style={{ marginTop: "10px" }}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulir kontak */}
                    <div className='container flex'>
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="container mb-3">
                                    <label htmlFor="name" className="form-label" style={{ color: "#00659E", fontWeight: "bold" }}>Name</label>
                                    <input type="text" className="form-control d-flex" id="name" name="name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ color: "#00659E", fontWeight: "bold" }}>Email</label>
                                    <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label" style={{ color: "#00659E", fontWeight: "bold" }}>Message</label>
                                    <input type="text" className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} style={{ height: "50px" }} /> {/* Menambah properti height: "100px" */}
                                </div>
                                <div className='d-flex justify-content-end'>

                                    <button type="submit" className=" btn btn-primary mb-3" style={{ backgroundColor: "#00659E", fontWeight: "bold" }}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;

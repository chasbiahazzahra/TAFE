import Navbar from '../Controller/Navbar';
import Footer from '../Controller/Footer';
import React from 'react';
import '../Css/Dashboard.css';
import Flag from '../Assets/Flag-dash.png';
import About1 from '../Assets/About 1.png'
import Check from '../Assets/check_circle.png'
import Bendera from '../Assets/bendera produk.png'
import Background from '../Assets/bg produk.png'

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className='contrainer-fluid bg-linear'>
          <div className='d-flex px-5 justify-content-center align-items-center'>
            <div className="desc-dashboard text-white">
              <h1>About</h1>
              <p>Berisi tentang informasi terkait tim kami yang mengembangkan website ini untuk tugas akhir. </p>
            </div>
            <div className="img-flag">
              <img src={Flag} alt="Logo" className="logo" width="600" />
            </div>
          </div>
        </div>

        <div className="section-5 container d-flex justify-content-center p-5 mt-5">
          <div className='d-flex'>
            <div className='me-5 pe-5' >
              <h5 className='mt-5' style={{ color: "#00659D" }}>FLEXIBLE COMMERCE AT SCALE</h5>
              <h1 className='mt-3'><b>We’re the flag company, Around the world</b></h1>
              <p>Kami memulai membuat website ini sejak kami memulai mengerjakan tugas akhir kami pada tanggal 4 Januari 2024. Kami pada saat itu memulai tugas kami dengan hanya beranggotakan 3 orang saja.</p>
            </div>
            <img src={About1} alt="Logo" className="logo" width="500" />
          </div>
        </div>

        <div className="section-5 container d-flex justify-content-center p-5 mt-5">
          <div className='d-flex'>
            <div className='me-5 pe-5'>
              <h1 className='mt-3'><b>Massive flag commerce?</b></h1>
              <h1 className='mt-2' style={{ color: "#00659D" }}><b>We're your platform</b></h1>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ marginBottom: '20px' }}>
                  <p>Website E-Commerce yang menjual produk berupa bendera negara.
                    <br />Kami menyediakan beberapa fitur yang dapat mempermudah dan
                    <br /> membantu customer saat menggunakan website ini.</p>
                </div>

                <div style={{ width: '50%', marginLeft: 'auto' }}> {/* Set width to 50% */}

                  <div className='container' style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={Check} alt="Logo" className="logo" width="40" style={{ marginRight: '10px' }} />
                    <p style={{ marginLeft: '10px' }}>24/7 priority technical support for all your platform questions</p>
                    <br />
                  </div>

                  <div className='container' style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={Check} alt="Logo" className="logo" width="40" style={{ marginRight: '10px' }} />
                    <p style={{ marginLeft: '10px' }}>Ongoing strategy and guidance from a team of merchant success ecommerce experts</p>
                    <br />
                  </div>

                  <div className='container' style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={Check} alt="Logo" className="logo" width="40" style={{ marginRight: '10px' }} />
                    <p style={{ marginLeft: '10px' }}>Providing multiple payment methods accommodates different customer preferences</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-5 container d-flex justify-content-start p-5 mt-5"> {/* Mengubah justify-content menjadi start */}
          <div className='d-flex' style={{ justifyContent: 'start' }}> {/* Menambah properti justifyContent: 'start' */}
            <div className='me-5 pe-5'>
              <h1 className='mt-3'><b>Sell faster, Sell better, Sell more</b></h1>
              <div className='d-flex'>
                <h6 className='mt-2' style={{ marginRight: '5px' }}>Sell out in seconds, </h6>
                <h6 className='mt-2' style={{ color: "#00659D" }}>Get your flag now!</h6>
              </div>
            </div>
          </div>
        </div>

        <div className='offset-sm-1' style={{ display: "flex", justifyContent: "start", alignItems: "center" }}> {/* Mengubah justify-content menjadi start */}
          {/* Kotak pertama */}
          <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px", marginLeft: "20px", marginTop: "-30px" }}> {/* Menambah margin-left: "20px" dan marginTop: "-30px" */}
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
          <div className="img-flag" style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px", marginLeft: "20px", marginTop: "-30px" }}> {/* Menambah margin-left: "20px" dan marginTop: "-30px" */}
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
          <div className="img-flag " style={{ position: "relative", width: "350px", height: "350px", overflow: "hidden", margin: "10px", marginLeft: "20px", marginTop: "-30px" }}> {/* Menambah margin-left: "20px" dan marginTop: "-30px" */}
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

        <div className='mt-3 justify-content-around'>
          <a className='btn btn-primary offset-sm-1 d-flex align-items-center justify-content-center' aria-current="page" href="product" style={{ fontSize: "10px", textWrap: "nowrap", width: "140px", background: "none", border: "1px solid #00659E", borderRadius: "20px", display: "flex", alignItems: "center", marginTop: "15px", marginLeft: "165px", marginBottom: "50px" }}>
            <b className='ms-0' style={{ color: "#00659E" }}>View all products</b>
          </a>
        </div>








      </div>
      <Footer />
    </div>
  );
};

export default About;

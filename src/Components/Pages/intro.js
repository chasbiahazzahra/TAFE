import React from 'react';
import { Link } from 'react-router-dom';
import intro from '../Assets/intro.png';
import Logo from '../Assets/Logo.png';
import '../Css/Intro.css';

const Intro = () => {
  return (
    <div className='d-flex justify-content-between'>
        <div className='d-flex align-items-center justify-content-center'>
            <div className='w-50 cover-intro'>
                <div className='judul d-flex mb-3'>
                    <img src={Logo} alt="Logo" className="logo me-3" width="100"/>
                    <h1><b>Bendera <br></br> Dunia</b></h1>
                </div>
                <p>Bendera Dunia merupakan website yang kami kembangkan saat sedang mengerjakan tugas akhir. Website ini merupakan website commercial yang menjual produk berupa bendera negara. Semoga pengalamanmu menyenangkan!</p>
                <Link to="/start"><button className='btn-primary mt-3'><b>LANJUT</b></button></Link>
            </div>
        </div>
      <img src={intro} alt="Logo" className="logo mb-2 vh-100" />
    </div>
  )
}

export default Intro

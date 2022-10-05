import React from 'react';
import Logo from "../../assets/FooterImg/Logo.png";
import "./Signin.css"
const Signin = () => {
  return (
    <div className="signin-wrapper">
        <div className="row">
            <div className="col-lg-4 text-center m-auto">
                <img src={Logo} alt="" height="100px"/>
                <h4 className="mt-5 text-light">Penyedia Spare Part Mobil Terlengkap dan Terjamin Asli untuk kebutuhan Bisnis Anda</h4>
            </div>
            <div className="col-lg-4 offset-1 m-auto">
                <div className="login">
                    <h3>Log in</h3>
                    <div className="form-input" >
                        <input type="text"  placeholder="Username/Email"/>                    
                    </div>
                    <div className="form-input" >
                        <input type="password"  placeholder="Password"/>                    
                    </div>
                    <button type="button" className="btn-login">LOG IN</button>
                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none"><small>Lupa Password</small></a>
                    </div>
                    <div className="text-center mt-3">
                    <p className="text-muted">Belum punya akun ? <a href="/signup" className="text-decoration-none fw-bold" style={{color:"#F75623"}}>Daftar</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin
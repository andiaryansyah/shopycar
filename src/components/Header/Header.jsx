import React from "react";
import "./Header.css";
import HeaderImg from "../../assets/HeaderImg/Header.png";

const Header = () => {
  return (
    <>
      <div className=" header">
        <img className="banner-style" src={HeaderImg} alt="..." />
      <div className="content">
        <p>
        Penyedia Spare Part Mobil Terlengkap dan Terjamin Asli untuk kebutuhan Bisnis Anda
        </p>
        <button>Cek Produk</button>
      </div>
      </div>
     
    </>
  );
};

export default Header;

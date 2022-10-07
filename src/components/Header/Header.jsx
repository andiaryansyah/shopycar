import React from "react";
import "./Header.css";
import HeaderImg from "../../assets/HeaderImg/Header.png";
import { Link} from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className=" header">
        <img className="banner-style" src={HeaderImg} alt="..." />
      <div className="content">
        <p>
        Penyedia Spare Part Mobil Terlengkap dan Terjamin Asli untuk kebutuhan Bisnis Anda
        </p>
        <Link to="/products">
            <button>Cek Produk</button>
        </Link>
      </div>
      </div>
     
    </>
  );
};

export default Header;

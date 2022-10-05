import React from "react";
import "./Aboutpage.css";
import AboutImg from "../../assets/AboutImg/aboutImg.png";

const Aboutpage = () => {
  return (
    <div className="container about-wrapper">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 mt-4">
          <h5>About Us</h5>
          <h1 className="fw-bold">Shopycar</h1>
          <div className="d-flex mb-4">
            <div className="line-style"></div>
            <span className="line-style2"></span>
          </div>
          <p>
            Memulai operasinya dengan membangun pabrik pertamanya di Greenland
            International Industrial Center di Cikarang, Kabupaten Bekasi,
            Provinsi Jawa Barat pada tanggal 20 Agustus 2015. Dibangun di atas
            lahan seluas 600.000 m2 termasuk Supplier Park, pabrik ini dibangun
            untuk produksi dan manufaktur mobil di Indonesia dan untuk
            mendirikan basis ekspor untuk Asia Tenggara. Pada 11 Juli 2017,
            pabrik resmi mulai beroperasi untuk produksi massal.{" "}
          </p>
        </div>
        <div className="col-lg-6">
          <img src={AboutImg} alt="..." width="650px" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;

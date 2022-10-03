import React from "react";
import "./About.css";
import AboutImg from "../../assets/AboutImg/aboutImg.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div>
              <img src={AboutImg} className="card-img-top img-fluid" alt="..." />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 about-content">
            <h5 className="card-title">Shopycar.com</h5>
            <ul>
              <li className="mb-3">
                <p className="card-text">
                Mengimpor dan mengekspor suku cadang tuning baru dan bekas untuk kendaraan anda.
                </p>
              </li>
              <li className="mb-3">
                <p className="card-text">
                 Membantu memasangkan suku cadang baru untuk mobil anda.
                 Kami bertanggung jawab mengklaim sebagai pilihan sempurna bagi penggemar dan profesional mobil.
                </p>
              </li>
              <li className="mb-3">
                <p className="card-text">
                kami di sini untuk menawarkan penggantian terbaik yang tidak hanya akan membuat mobil Anda berkinerja lebih baik, 
                tetapi juga akan membuat Anda merasa aman dalam berkendara.
                </p>
              </li>
            </ul>
              <a className="about-link" href="/">Lihat Selengkapnya</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

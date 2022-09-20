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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet velit lacus vitae platea viverra eu cum egestas.
                </p>
              </li>
              <li className="mb-3">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet velit lacus vitae platea viverra eu cum egestas.
                </p>
              </li>
              <li className="mb-3">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet velit lacus vitae platea viverra eu cum egestas.
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

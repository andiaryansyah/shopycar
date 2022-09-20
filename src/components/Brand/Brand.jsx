import React from "react";
import "./Brand.css";
import Brand1 from "../../assets/BrandImg/brand1.png";
import Brand2 from "../../assets/BrandImg/brand2.png";
import Brand3 from "../../assets/BrandImg/brand3.png";
import Brand4 from "../../assets/BrandImg/brand4.png";
import Brand5 from "../../assets/BrandImg/brand5.png";
import Brand6 from "../../assets/BrandImg/brand6.png";
import Brand7 from "../../assets/BrandImg/brand7.png";
import Brand8 from "../../assets/BrandImg/brand8.png";

const Brand = () => {
  return (
    <>
      <div className="container brand">
        <h1 className="text-center fw-bold">PILIHAN BRAND ANDA</h1>
        <div className="row brand-row">
          <div className="col-md-3">
            <img className="img img-fluid" src={Brand8} alt="..."/>
          </div>
          <div className="col-md-3">
            <img className="img img-fluid" src={Brand4} alt="..." />
          </div>
          <div className="col-md-3">
            <img className="img img-fluid" src={Brand5} alt="..." />
          </div>
          <div className="col-md-3">
            <img className="img img-fluid" src={Brand7} alt="..." />
          </div>
          <div className="col-md-3">
            <img className="img img-fluid" src={Brand6} alt="..." />
          </div>
          <div className="col-md-3">
            <img className="img img-fluid" src={Brand2} alt="..." />
          </div>
          <div className="col-md-3">
            <img className="img img-fluid" src={Brand1} alt="..." />
          </div>
          <div className="col-md-3">
            <img className="img img-fluid" src={Brand3} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;

import React from "react";
import "./About.css";
import { BiTime } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPresent } from "react-icons/gi";
import { RiAccountPinCircleLine } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div className="text-center pt-5">
        <h1 className="fw-bold ">ABOUT US</h1>
      </div>
      <div class="text-light card-custom">
        <div class="row">
          <div className="col-md-6 pb-4">
            <h5 class="card-title">VISI :</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              velit lacus vitae platea viverra eu cum egestas. Enim, a pharetra,
              purus tortor neque pretium, tempor ullamcorper enim. Diam sed
              mattis sed risus nisl, arcu gravida ac. Turpis dignissim posuere
              elementum volutpat aliquet neque iaculis orci netus.
            </p>
          </div>
          <div className="col-md-6">
            <h5 class="card-title">MISI :</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              velit lacus vitae platea viverra eu cum egestas.
            </p>
          </div>
        </div>
      </div>
      <div class="row c-gap">
        <div class="col-lg-2 col-md-5 col-sm-3">
          <div class="card-content">
            <div class="row">
              <div class="col-2">
                <span>
                  <BiTime size={30} style={{color:"#F75623"}}/>
                </span>
              </div>
              <div class="col-10 mt-1">
                <h5 class="fw-bold">Pelayanan 24 Jam</h5>
                <p>Dapatkan pelayanan 24 jam dari admin kami</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-5 col-sm-3">
          <div class="card-content">
            <div class="row">
              <div class="col-2">
                <span>
                  <TbTruckDelivery size={30} style={{color:"#F75623"}}/>
                </span>
              </div>
              <div class="col-10 mt-1">
                <h5 class="fw-bold">Gratis Pengiriman</h5>
                <p>Gratis Ongkir ke seluruh wilayah indonesia</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-5 col-sm-3">
          <div class="card-content">
            <div class="row">
              <div class="col-2">
                <span>
                  <GiPresent size={30} style={{color:"#F75623"}}/>
                </span>
              </div>
              <div class="col-10 mt-1">
                <h5 class="fw-bold">Dapatkan Promo</h5>
                <p>Cashback 20% hingga 25.000 Point</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-5 col-sm-3">
          <div class="card-content">
            <div class="row">
              <div class="col-2">
                <span>
                  <RiAccountPinCircleLine size={30} style={{color:"#F75623"}}/>
                </span>
              </div>
              <div class="col-10 mt-1">
                <h5 class="fw-bold">Kualitas Terjamin</h5>
                <p>Semua produk terjamin keaslian & kualitasnya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-5">
        <button class="btn-custom">View Details</button>
      </div>
    </>
  );
};

export default About;

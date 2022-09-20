import React from "react";
import "./Promo.css";
import { BiTime } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPresent } from "react-icons/gi";
import { RiAccountPinCircleLine } from "react-icons/ri";

const Promo = () => {
  return (
    <>
      <div className="promo">
        <h2 className="text-center text-light fw-bold promo-header">KEUNTUNGAN BELANJA DI SHOPYCAR.COM</h2>
        <div className="row c-gap">
          <div className="col-lg-2 col-md-5 col-sm-3">
            <div className="card-content">
              <div className="row">
                <div className="col-2">
                  <span>
                    <BiTime size={30} style={{ color: "#F75623" }} />
                  </span>
                </div>
                <div className="col-10 mt-1">
                  <h5 className="fw-bold">Pelayanan 24 Jam</h5>
                  <p>Dapatkan pelayanan 24 jam dari admin kami</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 col-sm-3">
            <div className="card-content">
              <div className="row">
                <div className="col-2">
                  <span>
                    <TbTruckDelivery size={30} style={{ color: "#F75623" }} />
                  </span>
                </div>
                <div className="col-10 mt-1">
                  <h5 className="fw-bold">Gratis Pengiriman</h5>
                  <p>Gratis Ongkir ke seluruh indonesia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 col-sm-3">
            <div className="card-content">
              <div className="row">
                <div className="col-2">
                  <span>
                    <GiPresent size={30} style={{ color: "#F75623" }} />
                  </span>
                </div>
                <div className="col-10 mt-1">
                  <h5 className="fw-bold">Dapatkan Promo</h5>
                  <p>Cashback 20% hingga 25.000 Point</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 col-sm-3">
            <div className="card-content">
              <div className="row">
                <div className="col-2">
                  <span>
                    <RiAccountPinCircleLine
                      size={30}
                      style={{ color: "#F75623" }}
                    />
                  </span>
                </div>
                <div className="col-10 mt-1">
                  <h5 className="fw-bold">Kualitas Terjamin</h5>
                  <p>Semua produk terjamin keaslian & kualitasnya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;

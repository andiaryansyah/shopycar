import React from "react";
import card1 from "../../assets/NewsImg/card-1.png";
import card2 from "../../assets/NewsImg/card-2.png";
import card3 from "../../assets/NewsImg/card-3.png";
import { MdSupervisorAccount, MdCalendarToday } from "react-icons/md";
import "./Newspage.css";
import { Link } from "react-router-dom";

const Newspage = () => {
  return (
    <div className="container news-wrapper">
      <div className="row">
        <div className="col-lg-4">
          <Link to="#" className="text-decoration-none">
            <div className="card border-1" style={{ padding: "25px" }}>
              <img src={card1} alt="" height="200px" />
              <h4 className="card-title mt-3 text-dark ">
                Apakah Mobil Matic Lebih Boros Dibandingkan Mobil Manual? Yuk
                Simak Penjelasannya..!!
              </h4>
              <p className="card-text mt-3">
                <small className="text-muted">
                  <MdSupervisorAccount className="mb-1" size={20} /> Admin
                </small>
              </p>
              <p className="card-text" style={{ lineHeight: "0px" }}>
                <small className="text-muted">
                  <MdCalendarToday
                    className="mb-1"
                    size={17}
                    style={{ marginRight: "7px" }}
                  />
                  03 Oktober 2022
                </small>
              </p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4">
          <Link to="#" className="text-decoration-none">
            <div className="card" style={{ padding: "25px" }}>
              <img src={card2} alt="" height="200px" />
              <h4 className="card-title mt-3 text-dark">
                Periksa Kondisi Mobil Sebelum Mudik. Cek Disini..!!
              </h4>
              <p className="card-text mt-3">
                <small className="text-muted">
                  <MdSupervisorAccount className="mb-1" size={20} /> Admin
                </small>
              </p>
              <p className="card-text" style={{ lineHeight: "0px" }}>
                <small className="text-muted">
                  <MdCalendarToday
                    className="mb-1"
                    size={17}
                    style={{ marginRight: "7px" }}
                  />
                  03 Oktober 2022
                </small>
              </p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4">
          <Link to="#" className="text-decoration-none">
            <div className="card border-1" style={{ padding: "25px" }}>
              <img src={card3} alt="" height="200px" />
              <h4 className="card-title mt-3 text-dark">
                Karakteristik dari Ban AT, MT dan HT. Cek Selengkapnya..!!
              </h4>
              <p className="card-text mt-3">
                <small className="text-muted">
                  <MdSupervisorAccount className="mb-1" size={20} /> Admin
                </small>
              </p>
              <p className="card-text" style={{ lineHeight: "0px" }}>
                <small className="text-muted">
                  <MdCalendarToday
                    className="mb-1"
                    size={17}
                    style={{ marginRight: "7px" }}
                  />
                  03 Oktober 2022
                </small>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newspage;

import React from "react";
import "./News.css";
import card1 from "../../assets/NewsImg/card-1.png"
import card2 from "../../assets/NewsImg/card-2.png"
import card3 from "../../assets/NewsImg/card-3.png"

const News = () => {
  return (
    <>
      <div className="container news">
        <div className="d-flex justify-content-between mb-3 pt-5">
          <h2 className="fw-bold"> BERITA POPULER</h2>
          <a className="fw-bold text-link" href="/">Lihat Lainnya</a>
        </div>
        <div className="row m-0">
          <div className="col-md-6">
            <div className="card text-light mb-3 border-0" id="card-news">
              <img
            src={card1}
                className="card-img card-left"
                alt="..."
              />
              <div className="card-img-overlay">
                <a href="/" className="card-text1 position-absolute">
                  Apakah Mobil Matic Lebih Boros Dibandingkan Mobil Manual?
                </a>
              </div>
            </div>      
          </div>
          <div className="col-md-6">
            <div className="card text-bg-dark mb-3 border-0" id="card-news">
              <img
                src={card2}
                className="card-img card-right"
                alt="..."
              />
              <div className="card-img-overlay">
                <a href="/" className="card-text2 position-absolute">Periksa Kondisi Mobil Sebelum Mudik</a>
              </div>
            </div>

            <div className="card text-bg-dark mb-5 border-0" id="card-news">
              <img
                src={card3}
                className="card-img card-right"
                alt="..."
              />
              <div className="card-img-overlay">
                <a href="/" className="card-text2 position-absolute">Karakteristik dari Ban AT, MT dan HT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

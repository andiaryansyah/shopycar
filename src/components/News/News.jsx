import React from "react";
import "./News.css";
import card1 from "../../assets/HeaderImg/card-1.jpg"
import card2 from "../../assets/HeaderImg/card-2.jpg"
import card3 from "../../assets/HeaderImg/card-3.jpg"

const News = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="fw-bold"> NEWS POPULAR</h2>
          <a className="fw-bold text-link" href="/">Learn More</a>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div class="card text-bg-dark mb-3 border-0" id="card-news">
              <img
            src={card1}
                class="card-img card-left"
                alt="..."
              />
              <div class="card-img-overlay">
                <h5 class="card-text position-absolute">
                  Apakah Mobil Matic Lebih Boros Dibandingkan Mobil Manual?
                </h5>
              </div>
            </div>      
          </div>
          <div className="col-md-6">
            <div class="card text-bg-dark mb-3 border-0" id="card-news">
              <img
                src={card2}
                class="card-img card-right"
                alt="..."
              />
              <div class="card-img-overlay">
                <p class="card-text position-absolute">Periksa Kondisi Mobil Sebelum Mudik</p>
              </div>
            </div>

            <div class="card text-bg-dark mb-5 border-0" id="card-news">
              <img
                src={card3}
                class="card-img card-right"
                alt="..."
              />
              <div class="card-img-overlay">
                <p class="card-text position-absolute">Karakteristik dari Ban AT, MT dan HT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

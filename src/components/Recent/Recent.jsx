import React from "react";
import card1 from "../../assets/HeaderImg/card-1.jpg";

const Recent = () => {
  return (
    <div class="container">
      <div className="d-flex justify-content-between mb-3">
        <h2 className="fw-bold"> RECENT TOP DEALS</h2>
        <a className="fw-bold text-link" href="/">
          Learn More
        </a>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={card1} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Name</p>
          <p>Category</p>
          <p>Harga</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Recent;

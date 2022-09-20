import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {CgShoppingCart } from "react-icons/cg";

import "./BestSeller.css";
import { getBestSeller } from "../../store/action";

const BestSeller = () => {
  const dispatch = useDispatch();
  const { bestSeller } = useSelector((state) => state.products);
  // eslint-disable-next-line
  const [limit, setLimit] = useState(4);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  }

useEffect(() => {
  dispatch(getBestSeller())
  // eslint-disable-next-line
},[])

  return (
    <div className="best-seller">
      <div className="container d-flex justify-content-between mb-3">
        <h2 className="fw-bold"> PRODUK TERLARIS</h2>
        <a className="fw-bold text-link" href="/">
          Lihat lainnya
        </a>
      </div>
      <div className="container">
        <div className="row">
      {bestSeller
        ? bestSeller.slice(0, limit ? limit : bestSeller.length).map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card border-0" style={{ width: "16rem" }} >
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text fw-bold">{product.name}</p>
                <p className="best-category">{product.category}</p>
                <p className="best-price">{rupiah(product.price)}</p>
              </div>
              <button><CgShoppingCart size={25}/><span className="btn-text">Add to Cart</span></button>
            </div>
            </div>
          ))
          : null}
          </div>
          </div>
    </div>
  );
};

export default BestSeller;

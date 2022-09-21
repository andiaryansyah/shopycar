import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../store/action";
import { CgShoppingCart } from "react-icons/cg";
import {BiChat} from "react-icons/bi"
import {BsShare} from "react-icons/bs"
import "./Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { detailProduct } = useSelector((state) => state.products);
  const { id } = useParams();

  const diskon = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const real = () => {
    const price = detailProduct.price;
    const disc = price * 0.18 ;
    const result = price + disc;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(result);
  }

  useEffect(() => {
    dispatch(getDetailProduct(id));
      // eslint-disable-next-line
  }, []);

  return (
    <div className="detail-product">
      <div className="container">
        <nav className="divider" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="breadcrumb-link" href="/products">
                PRODUK
              </a>
            </li>
            <li
              className="breadcrumb-item active fw-bold text-dark"
              aria-current="page"
            >
              Detail Produk
            </li>
          </ol>
        </nav>
        <div className="detail-body">
          <div className="row">
            <div className="col-md-6">
              <img src={detailProduct.image} className="img-fluid detail-img" alt="..." />
              <h5 className="fw-bold">Deskripsi</h5>
              <p>
                {detailProduct.description}
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">{detailProduct.name}</h2>
              <h5 className="category">{detailProduct.category}</h5>
              <p>Rating</p>
              <div className="line"></div>
              <p className="fw-bold">Harga</p>
              <p className="price">{diskon(detailProduct.price)}</p>
              <p className="real">{real()}</p>
              <div className="d-flex align-items-center">
                <button >-</button> <span className="count">1</span>
                <button>+</button> <span className="stock" >12</span>
                <span  className="stock">Stok</span>
              </div>
              <button className="btn-cart"><CgShoppingCart size={25} style={{marginRight:"10px"}}/>Add to Cart</button>
              <div className="d-flex share">
                <a href="/"><BiChat size={25} style={{marginRight:"5px", paddingBottom:"5px"}}/>Chat Penjual</a>
                <a href="/"><BsShare size={25} style={{marginRight:"5px", paddingBottom:"5px"}}/>Bagikan</a>
              </div>
              <div className="line"></div>
              <h5 className="fw-bold">Detail Produk</h5>
                {detailProduct.detail && detailProduct.detail.map((detail, index) => (
              <ul key={index}>
                  <li>{detail}</li>
              </ul>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDetailProduct,
  addCart,
  getCartItems,
  getUpdateCart,
} from "../../store/ProductAction";
import { CgShoppingCart } from "react-icons/cg";
import { BiChat } from "react-icons/bi";
import { BsShare, BsStarFill, BsStarHalf } from "react-icons/bs";
import { toast } from "react-toastify";
import "./Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  // eslint-disable-next-line
  const [userId, setUserId] = useState(1);
  const { detailProduct, cartItems } = useSelector((state) => state.products);
  const { id } = useParams();

  const BeforeDiscount = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const afterDiscount = () => {
    const price = detailProduct.price;
    const disc = detailProduct.disc_price;
    const tempPrice = price * disc;
    const result = price - tempPrice;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(result);
  };

  const discountMark = (discPrice) => {
    const percentage = discPrice * 100;
    return percentage;
  };

  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  const onAdd = (product_id, price, disc_price) => {
    const user_id = parseInt(userId)
    const tempCart = cartItems.find((cart) => product_id === cart.productId);
    if (userId === null) {
      navigate("/signin")
    } else
    if (tempCart === undefined) {
      dispatch(addCart(user_id, product_id, counter, price, disc_price));
      toast.success("Successfully add to cart", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const cartId = tempCart.id;
      let newQty = tempCart.qty + counter;
      if (newQty > tempCart.product.stock) {
        toast.error("Stok melebihi batas", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(
          getUpdateCart(cartId, user_id, product_id, newQty, price, disc_price)
        );
        toast.success("Successfully add to cart", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }

    dispatch(getCartItems(userId));
  };

  useEffect(() => {
    setUserId(localStorage.getItem("id"))
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
            <div className="col-md-6 d-grid m-auto">
              <div className="m-auto">
                {detailProduct.disc_price !== 0 ? (
                  <div className="disc-mark">
                    <p className="text-center text-wrap m-auto">
                      {discountMark(detailProduct.disc_price)}% OFF
                    </p>
                  </div>
                ) : null}
                <img
                  src={detailProduct.image}
                  className="img-fluid detail-img"
                  alt="..."
                />
              </div>
              <h5 className="fw-bold mt-5">Deskripsi :</h5>
              <p style={{ width: "450px" }}>{detailProduct.description}</p>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">{detailProduct.name}</h2>
              <h5 className="category">{detailProduct.category}</h5>
              <small>
                Rating :{" "}
                <span style={{ color: "tomato", marginLeft: "5px" }}>
                  <BsStarFill size={14} style={{ marginBottom: "3px" }} />{" "}
                  <BsStarFill size={14} style={{ marginBottom: "3px" }} />{" "}
                  <BsStarFill size={14} style={{ marginBottom: "3px" }} />{" "}
                  <BsStarFill size={14} style={{ marginBottom: "3px" }} />{" "}
                  <BsStarHalf size={14} style={{ marginBottom: "3px" }} />
                </span>
                <small className="mx-2">{detailProduct.rate}</small>
              </small>
              <div className="line"></div>
              <p className="fw-bold">Harga</p>
              <p className="price">{afterDiscount()}</p>
              <p className="real">
                {detailProduct.disc_price !== 0
                  ? BeforeDiscount(detailProduct.price)
                  : null}
              </p>
              <div className="d-flex align-items-center mt-2">
                <button
                  onClick={decrementCounter}
                  disabled={counter <= 1}
                  className={counter <= 1 ? "disabled-btn" : "count-btn"}
                >
                  -
                </button>{" "}
                <span className="count">{counter}</span>
                <button
                  onClick={incrementCounter}
                  disabled={counter === detailProduct.stock}
                  className={
                    counter === detailProduct.stock
                      ? "disabled-btn"
                      : "count-btn"
                  }
                >
                  +
                </button>{" "}
                <span className="stock">{detailProduct.stock}</span>
                <span className="stock">Stok</span>
              </div>
              <button
                className="btn-cart"
                onClick={() =>
                  onAdd(
                    detailProduct.id,
                    detailProduct.price,
                    detailProduct.disc_price
                  )
                }
              >
                <CgShoppingCart size={25} style={{ marginRight: "10px" }} />
                Add to Cart
              </button>
              <div className="d-flex share">
                <a href="/">
                  <BiChat
                    size={25}
                    style={{ marginRight: "5px", paddingBottom: "5px" }}
                  />
                  Chat Penjual
                </a>
                <a href="/">
                  <BsShare
                    size={25}
                    style={{ marginRight: "5px", paddingBottom: "5px" }}
                  />
                  Bagikan
                </a>
              </div>
              <div className="line"></div>
              <h5 className="fw-bold mb-4">Detail Produk</h5>
              {detailProduct.detail &&
                detailProduct.detail.map((detail, index) => (
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

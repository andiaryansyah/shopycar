import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartItems,
  getUpdateCart,
  getRemoveCart,
} from "../../store/ProductAction";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.products);
  let newQty;

  const toggleCartItemQuantity = async (
    id,
    user_id,
    product_id,
    qty,
    price,
    disc_price,
    value
  ) => {
    if (value === "inc") {
      newQty = qty + 1;
    } else if (value === "dec") {
      newQty = qty - 1;
    }
    dispatch(getUpdateCart(id, user_id, product_id, newQty, price, disc_price));
    dispatch(getCartItems());
  };

  const onRemove = (id) => {
    dispatch(getRemoveCart(id));
    dispatch(getCartItems());
  };

  let totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.qty * (item.price - (item.price * item.disc_price))), 0
);

  const formatIDR = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const afterDiscount = (productPrice, productDisc) => {
    const price = productPrice;
    const disc = productDisc;
    const tempPrice = price * disc;
    const result = price - tempPrice;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(result);
  };

  const subTotal = (productPrice, qty, productDisc) => {
    const price = productPrice;
    const disc = productDisc;
    const tempPrice = price * disc;
    const tempResult = price - tempPrice;
    const result = tempResult * qty;

    return result;
  };

  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {}, [cartItems]);

  return (
    <div className="cart-styles">
      <div className="bg-white mt-3 mb-2 py-1 px-4 justify-content-center align-items-center">
        <p className="mt-2">
          Pilih voucher Gratis Ongkir untuk menikmati Gratis Ongkir
        </p>
      </div>
      <div className="header-cart">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
        />
        <p>Produk</p>
        <p className="field">Harga Satuan</p>
        <p className="field">Kuantitas</p>
        <p className="field">Total Harga</p>
        <p className="field">Aksi</p>
      </div>
      <div className="product-cart">
        <div className="row d-flex flex-column">
          {cartItems.map((item,index) => (
            <>
              <div
                className="col d-flex align-items-center pt-4"
                key={index}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
                <img
                  src={item.product.image}
                  alt="..."
                  width="80px"
                  height="80px"
                  style={{ marginLeft: "10px" }}
                />
                <p className="product-name">{item.product.name}</p>
                <span className="product-disc">
                  {item.product.disc_price !== 0
                    ? formatIDR(item.product.price)
                    : null}
                </span>
                <p className="product-list">
                  {afterDiscount(item.product.price, item.product.disc_price)}
                </p>
                <div
                  className="d-flex align-items-center mt-2"
                  style={{ marginRight: "75px" }}
                >
                  <button
                    onClick={() =>
                      toggleCartItemQuantity(
                        item.id,
                        item.userId,
                        item.productId,
                        item.qty,
                        item.price,
                        item.disc_price,
                        "dec"
                      )
                    }
                    disabled={item.qty <= 1}
                    className={item.qty <= 1 ? "disabled-btn" : "btn-count"}
                  >
                    -
                  </button>{" "}
                  <span className="count">{item.qty}</span>
                  <button
                    onClick={() =>
                      toggleCartItemQuantity(
                        item.id,
                        item.userId,
                        item.productId,
                        item.qty,
                        item.price,
                        item.disc_price,
                        "inc"
                      )
                    }
                    disabled={item.qty === item.product.stock}
                    className={
                      item.qty === item.product.stock
                        ? "disabled-btn"
                        : "btn-count"
                    }
                  >
                    +
                  </button>{" "}
                </div>
                <p className="product-list">
                  {item.product.disc_price !== 0
                    ? formatIDR(subTotal(item.price, item.qty, item.disc_price))
                    : formatIDR(item.price * item.qty)}
                </p>
                <Link className="remove" to="#" onClick={() => onRemove(item.id)}>
                  Hapus
                </Link>
              </div>
              <div className="block"></div>
            </>
          ))}
        </div>
      </div>
      <div className="checkout">
        <div className=" d-flex justify-content-end align-items-center">
          <span>Total ({cartItems.length} Produk):</span>
          <span className="total-price">{formatIDR(totalPrice)}</span>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

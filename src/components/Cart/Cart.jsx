import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, getUpdateCart, getRemoveCart } from "../../store/ProductAction";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.products);
  const [total, setTotal] = useState(0);
  let newQty;

  const toggleCartItemQuantity = async (id, user_id,product_id, qty, price, disc_price ,value) => {
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
  }

  const formatIDR = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    
  }, [cartItems]);

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
          {cartItems.map((item) => (
            <>
              <div
                className="col d-flex align-items-center pt-4"
                key={item.product.id}
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
                  style={{marginLeft:"10px"}}
                />
                <p className="product-name">{item.product.name}</p>
                <p className="product-list">{formatIDR(item.product.price)}</p>
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
                  {formatIDR(item.product.price * item.qty)}
                </p>
                  <a className="remove" onClick={() => onRemove(item.id)}>Hapus</a>
              </div>
              <div className="block"></div>
            </>
          ))}
        </div>
      </div>
      <div className="checkout">
        <div className=" d-flex justify-content-end align-items-center">
          <span>Total ({cartItems.length} Produk):</span>
          <span className="total-price">Rp.200.000</span>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

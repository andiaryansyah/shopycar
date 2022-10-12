import React, { useEffect, useState } from "react";
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
  let user_id = parseInt(localStorage.getItem("id"));
  const [checkedState, setCheckedState] = useState(
    new Array(cartItems.length).fill(false)
  );
  const [total, setTotal] = useState(0);
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
    await dispatch(
      getUpdateCart(id, user_id, product_id, newQty, price, disc_price)
    );
    dispatch(getCartItems(user_id));
  };

  const onRemove = (id) => {
    dispatch(getRemoveCart(id));
    dispatch(getCartItems(user_id));
  };

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

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return (
            sum +
            (cartItems[index].price -
              cartItems[index].price * cartItems[index].disc_price) *
              cartItems[index].qty
          );
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
    console.log(updatedCheckedState, "UPDATECHECKEDDDDD");
    console.log(checkedState, "CHECKEDDDD");
  };

  useEffect(() => {
    dispatch(getCartItems(user_id));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleOnChange();
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <div className="cart-styles">
      <div className="cart-promo">
        <p className="mt-2">
          Pilih voucher Gratis Ongkir untuk menikmati Gratis Ongkir
        </p>
      </div>
      <div className="header-cart">
        <input
          className="form-check-input"
          type="checkbox"
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
          {cartItems.map((item, index) => (
            <>
              <div className="col product-column" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={item.product.name}
                  value={item.product.name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                  aria-label="Checkbox for following text input"
                />
                <div className="resize">
                <img src={item.product.image} alt="..." />
                <p className="product-name">{item.product.name}</p>
                <span className="product-disc">
                  {item.product.disc_price !== 0
                    ? formatIDR(item.product.price)
                    : null}
                </span>
                <p className="product-list">
                  {afterDiscount(item.product.price, item.product.disc_price)}
                </p>
                <div className="counter">
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
                <p className="subtotal">
                  {formatIDR(subTotal(item.price, item.qty, item.disc_price))}
                </p>
                <Link
                  className="remove"
                  to="#"
                  onClick={() => onRemove(item.id)}
                >
                  Hapus
                </Link>
                </div>
              </div>
              <div className="block"></div>
              
            </>
          ))}
        </div>
      </div>
      <div className="checkout">
          <span>Total ({cartItems.length} Produk):</span>
          <span className="total-price">{formatIDR(total)}</span>
          <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;

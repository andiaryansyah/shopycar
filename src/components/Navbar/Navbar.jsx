import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/HeaderImg/logo.png";
import { FaUser } from "react-icons/fa";
// import { GoSearch } from "react-icons/go";
import { CgShoppingCart } from "react-icons/cg";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../store/ProductAction";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.products)
  const [activeMenu, setActiveMenu] = useState("beranda");
  
useEffect(() => {
  dispatch(getCartItems());
    // eslint-disable-next-line
},[])

useEffect(() => {
    // eslint-disable-next-line
},[cartItems])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light py-4 px-md-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="img-style img-fluid" src={logo} alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-custom"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  id="beranda"
                  className={
                    activeMenu === 'beranda'
                      ? 'nav-link active px-lg-3'
                      : 'nav-link px-lg-3'
                  }
                  to="/"
                  onClick={() => {
                    setActiveMenu('beranda');
                  }}
                >
                  BERANDA
                </Link>
              </li>
              <li className="nav-item">
                <Link  id="tentang"
                  className={
                    activeMenu === 'tentang'
                      ? 'nav-link active px-lg-3'
                      : 'nav-link px-lg-3'
                  }
                  to="/about"
                  onClick={() => {
                    setActiveMenu('tentang');
                  }}>
                  TENTANG KAMI
                </Link>
              </li>
              <li className="nav-item">
              <Link  id="berita"
                  className={
                    activeMenu === 'berita'
                      ? 'nav-link active px-lg-3'
                      : 'nav-link px-lg-3'
                  }
                  to="/news"
                  onClick={() => {
                    setActiveMenu('berita');
                  }}>
                  BERITA
                </Link>
              </li>
              <li className="nav-item">
              <Link  id="products"
                  className={
                    activeMenu === 'products'
                      ? 'nav-link active px-lg-3'
                      : 'nav-link px-lg-3'
                  }
                  to="/products"
                  onClick={() => {
                    setActiveMenu('products');
                  }}>
                  PRODUK
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              {/* <span className="px-2">
                <GoSearch className="cursor-icons" size={20} />
              </span> */}
              <span className="px-3">
                <Link to="/cart">
                { cartItems.length === 0 ? <span className="cart-count">0</span> : <span className="cart-count">{cartItems.length}</span>}
                    <CgShoppingCart className="cursor-icons" size={25} />
                </Link>
              </span>
              <button className="btns d-flex align-items-center" type="submit">
                <FaUser style={{ marginRight: "10px" }} /> Masuk / Daftar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/HeaderImg/logo.png";
import { FaUser } from "react-icons/fa";
// import { GoSearch } from "react-icons/go";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../store/ProductAction";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.products);
  const [activeMenu, setActiveMenu] = useState("home");

  const isLogin = localStorage.getItem("name");
  let getUserId =  (parseInt(localStorage.getItem("id")));

  const isLogout = () => {
    localStorage.clear();
  };

  const handleActiveMenu = () => {
    if(window.location.pathname === "/") {
      setActiveMenu("home")
    } else if(window.location.pathname === "/products") {
      setActiveMenu("products")
    }else if(window.location.pathname === "/news") {
      setActiveMenu("news")
    }else if(window.location.pathname === "/about") {
      setActiveMenu("about")
    }
  }

  useEffect(() => {
    dispatch(getCartItems(getUserId));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleActiveMenu()
    // eslint-disable-next-line
  }, [cartItems]);

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
                  id="home"
                  className={
                    activeMenu === "home"
                      ? "nav-link active px-lg-3"
                      : "nav-link px-lg-3"
                  }
                  to="/"
                  onClick={() => {
                    setActiveMenu("home");
                  }}
                >
                  BERANDA
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="about"
                  className={
                    activeMenu === "about"
                      ? "nav-link active px-lg-3"
                      : "nav-link px-lg-3"
                  }
                  to="/about"
                  onClick={() => {
                    setActiveMenu("about");
                  }}
                >
                  TENTANG KAMI
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="news"
                  className={
                    activeMenu === "news"
                      ? "nav-link active px-lg-3"
                      : "nav-link px-lg-3"
                  }
                  to="/news"
                  onClick={() => {
                    setActiveMenu("news");
                  }}
                >
                  BERITA
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="products"
                  className={
                    activeMenu === "products"
                      ? "nav-link active px-lg-3"
                      : "nav-link px-lg-3"
                  }
                  to="/products"
                  onClick={() => {
                    setActiveMenu("products");
                  }}
                >
                  PRODUK
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              {/* <span className="px-2">
                <GoSearch className="cursor-icons" size={20} />
              </span> */}
              {!isLogin ? (
                <>
                  <span className="px-3">
                    <Link to="/signin">
                      <CgShoppingCart className="cursor-icons" size={30} />
                    </Link>
                  </span>
                  <Link to="/signin" className="text-decoration-none">
                    <button
                      className="btns d-flex align-items-center "
                      type="submit"
                    >
                      <FaUser style={{ marginRight: "10px" }} /> Masuk / Daftar
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <span className="px-3">
                    <Link to="/cart">
                      <span className="cart-count">{cartItems.length}</span>
                      <CgShoppingCart className="cursor-icons" size={30} />
                    </Link>
                  </span>
                  <div className="dropdown">
                    <h5
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      {isLogin}
                    </h5>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#Action1">
                          Akun Saya
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/"
                          onClick={() => isLogout()}
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import logo from "../../assets/HeaderImg/logo.png";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light py-4 px-md-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img class="img-style img-fluid" src={logo} alt="..." />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav-custom"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active px-lg-4" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-lg-4" href="/">
                  ABOUT US
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  px-lg-4" href="/">
                  NEWS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  px-lg-4" href="/">
                  PRODUCTS
                </a>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <span class="px-2">
                <FaSearch class="cursor-icons" size={20} />
              </span>
              <span class="px-3">
                <FaShoppingCart class="cursor-icons" size={20} />
              </span>
              <button
                class="btns d-flex align-items-center"
                type="submit"
              >
                <FaUser style={{marginRight:"10px"}}/> Masuk / Daftar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

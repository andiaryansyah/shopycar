import React from "react";
import "./Footer.css";
import Logo from "../../assets/FooterImg/Logo.png";
import { BsPhone, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Footer = () => {
const {pathname} = useLocation();
if (pathname === "/signin" || pathname === "/signup") return null;

  return (
    <>
      <div className="footer">
        <div className="row d-flex justify-content-end">
          <div className="col-md-5">
            <img src={Logo} alt="" className="img" />
            <p className="footer-text">
              Shopycar adalah toko online yang telah menjual berbagai
              Sparepart mobil sejak tahun 2015, Sekarang ini kami telah
              mengembangkan sayap bukan hanya di kota sekitaran provinsi jawa
              barat saja tetapi telah sampai hampir seluruh indonesia.
            </p>
            <p className="copyright">
              Copyright © 2022 www.shopycar.com | All Rights Reserved
            </p>
          </div>
          <div className="col-md-3 text-light footer-menu">
            <a href="/">BERANDA</a>
            <a href="/">TENTANG KAMI</a>
            <a href="/">BERITA</a>
            <a href="/products">PRODUK</a>
          </div>
          <div className="col-md-4 text-light contact">
            <h5 className="fw-bold mb-4">Kontak Kami</h5>
            <p>
              <span>
                <BsPhone />
              </span>
              +62 81543043925
            </p>
            <p>
              <span>
                <SiGmail />
              </span>
              customerservice@shopycar.com
            </p>
            <p className="mb-5">
              <span>
                <GoLocation />
              </span>
              Tebet, Jakarta Selatan
            </p>
            <h5 className="fw-bold mb-3">Social Media</h5>
            <div>
              <span>
                <AiFillFacebook size={30} className="icon" />
              </span>
              <span>
                <AiFillInstagram size={30} className="icon" />
              </span>
              <span>
                <BsTwitter size={30} className="icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

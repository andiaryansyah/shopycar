import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { CgShoppingCart } from "react-icons/cg";
import "./Recent.css";
import { getRecentProducts } from "../../store/ProductAction";

const Recent = () => {
  const dispatch = useDispatch();
  const { recentProducts } = useSelector((state) => state.products);
  // eslint-disable-next-line
  const [limit, setLimit] = useState(4);

  const BeforeDiscount = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const afterDiscount = (a,b) => {
    const price = a;
    const disc = b;
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

  useEffect(() => {
    dispatch(getRecentProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="recent">
      <div className="container d-flex justify-content-between mb-3">
        <h2 className="fw-bold"> PRODUK TERBARU</h2>
        <a className="fw-bold text-link" href="/products">
          Lihat lainnya
        </a>
      </div>
      <div className="container">
        <div className="row">
          {recentProducts
            ? recentProducts
                .slice(0, limit ? limit : recentProducts.length)
                .map((product) => (
                  <div className="col-lg-3 col-md-5" key={product.id}>
                    <div className="card border-0 m-auto" >
                      {product.disc_price !== 0 ? (
                        <div className="disc-mark">
                          <p className="text-center text-wrap m-auto">
                            {discountMark(product.disc_price)}% OFF
                          </p>
                        </div>
                      ) : null}
                      <Link to="#" onClick={() => window.location.href=`/detailproduct/${product.id}`} className="m-auto">
                        <img
                          src={product.image}
                          className="card-img-top img-fluid"
                          alt="..."
                        />
                      </Link>
                      <div className="card-body text-center">
                        <p className="card-text fw-bold">{product.name}</p>
                        <p className="recent-category">{product.category}</p>
                        <p className="recent-price">{afterDiscount(product.price, product.disc_price)}</p>
                        <p className="recent-real">
                          {product.disc_price !== 0
                            ? BeforeDiscount(product.price)
                            : <br/> }
                        </p>
                      </div>
                      {/* <button>
                        <CgShoppingCart size={25} />
                        <span className="btn-text">Add to Cart</span>
                      </button> */}
                    </div>
                  </div>
                ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Recent;

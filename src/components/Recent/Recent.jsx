import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CgShoppingCart } from "react-icons/cg";
import "./Recent.css";
import { getRecentProducts } from "../../store/action";
import { Link } from "react-router-dom";

const Recent = () => {
  const dispatch = useDispatch();
  const { recentProducts } = useSelector((state) => state.products);
  // eslint-disable-next-line
  const [limit, setLimit] = useState(4);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  useEffect(() => {
    dispatch(getRecentProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="recent">
      <div className="container d-flex justify-content-between mb-3">
        <h2 className="fw-bold"> PRODUK TERBARU</h2>
        <a className="fw-bold text-link" href="/">
          Lihat lainnya
        </a>
      </div>
      <div className="container">
        <div className="row">
          {recentProducts
            ? recentProducts
                .slice(0, limit ? limit : recentProducts.length)
                .map((product) => (
                  <div className="col-md-3" key={product.id}>
                    <div className="card border-0" style={{ width: "16rem" }}>
                      <Link to="/">
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                        />
                      </Link>
                      <div className="card-body text-center">
                        <p className="card-text fw-bold">{product.name}</p>
                        <p className="recent-category">{product.category}</p>
                        <p className="recent-price">{rupiah(product.price)}</p>
                      </div>
                      <button>
                        <CgShoppingCart size={25} />
                        <span className="btn-text">Add to Cart</span>
                      </button>
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

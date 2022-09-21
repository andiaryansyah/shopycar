import React from "react";
import "./Products.css";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setSearchProduct } from "../../store/action";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { searchProduct } = useSelector((state) => state.products);
  // eslint-disable-next-line

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setSearchProduct(products));
    // eslint-disable-next-line
  }, [products]);

  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row">
            {searchProduct
              ? searchProduct.map((product) => (
                  <div className="col-md-3" key={product.id}>
                    <div className="card border-0" style={{ width: "16rem" }}>
                      <Link to={`/detailproduct/${product.id}`}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                        />
                      </Link>
                      <div className="card-body text-center">
                        <p className="card-text fw-bold">{product.name}</p>
                        <p className="product-category">{product.category}</p>
                        <p className="product-price">{rupiah(product.price)}</p>
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
    </>
  );
};

export default Products;

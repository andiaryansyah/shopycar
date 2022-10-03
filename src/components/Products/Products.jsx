import React from "react";
import "./Products.css";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setPageProduct, setSearchProduct, addCart, getCartItems, getUpdateCart} from "../../store/ProductAction";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { toast } from 'react-toastify';

const Products = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [ userId , setUserId ] = useState(1);
  // eslint-disable-next-line
  const [qty, setQty ] = useState(1);
  const { products } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.products);
  const { pages } = useSelector((state) => state.products);
  const { limit } = useSelector((state) => state.products);
  const { searchProduct } = useSelector((state) => state.products);
  // eslint-disable-next-line

  const productPerPage = limit;

  const numberOfRecordsVistited = pages * productPerPage;

  const totalPages = Math.ceil(searchProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    // dispatch(setPageProduct(selected));
    
  };

  const BeforeDiscount = (number) => {
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
  
  const discountMark = (discPrice) => {
    const percentage = discPrice * 100;
    return percentage;
  };

  const onAdd = (product_id, price, disc_price) => {
    const tempCart = cartItems.find((item) =>  item.productId === product_id);

    const cartId = tempCart.id

    if (tempCart === null) {
      dispatch(addCart(userId, product_id, qty, price, disc_price));
    } else {
      let newQty = tempCart.qty + 1
      dispatch(getUpdateCart(cartId, userId, product_id, newQty, price, disc_price))
    }

    dispatch(getCartItems());
    toast.success("Successfully add to cart", {
      position: toast.POSITION.TOP_CENTER
  })
  }

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setSearchProduct(products));
    // eslint-disable-next-line
  }, [products]);

  const displayProducts = searchProduct.slice(
    numberOfRecordsVistited,
    numberOfRecordsVistited + productPerPage
  );
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row">
            {searchProduct.length === 0 ? (
              <img
                className="m-auto"
                src="https://cdn2.iconfinder.com/data/icons/documents-and-files-v-2/100/doc-03-512.png"
                style={{ width: "12rem" }}
                alt="..."
              />
            ) : (
              displayProducts.map((product) => (
                <div className="col-md-3" key={product.id}>
                  <div className="card border-0" style={{ width: "16rem" }}>
                    {product.disc_price !== 0 ? (
                      <div className="disc-mark">
                        <p className="text-center text-wrap m-auto">
                          {discountMark(product.disc_price)}% OFF
                        </p>
                      </div>
                    ) : null}
                    <Link
                      to={`/detailproduct/${product.id}`}
                      className="m-auto"
                    >
                      <img
                        src={product.image}
                        className="card-img-top img-fluid"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body text-center">
                      <p className="card-text fw-bold">{product.name}</p>
                      <p className="product-category">{product.category}</p>
                      <p className="product-price">
                        {afterDiscount(product.price, product.disc_price)}
                      </p>
                      <p className="product-real">
                        {product.disc_price !== 0 ? (
                          BeforeDiscount(product.price)
                        ) : (
                          <br />
                        )}
                      </p>
                    </div>
                    <button onClick={() => onAdd(product.id, product.price, product.disc_price)}>
                      <CgShoppingCart size={25} />
                      <span className="btn-text" >Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={totalPages}
            onPageChange={changePage}
            containerClassName={"navigationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"navigationDisabled"}
            activeClassName={"navigationActive"}
          />
        </div>
      </div>
    </>
  );
};

export default Products;

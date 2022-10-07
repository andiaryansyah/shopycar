import React, { useState, useEffect } from "react";
import "./Search.css";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProduct, getProducts, setLimitProduct } from "../../store/ProductAction";

const Search = () => {
  const dispatch = useDispatch();
  const {pages} = useSelector((state) => state.products);
  const {limit} = useSelector((state) => state.products);
  const [keyword, setKeyword] = useState("");
  // eslint-disable-next-line
  // const [page, setPage] = useState(0);
  // const [limit, setLimit] = useState(8);

  const handleLimit = (e) => {
    const number = e.target.value;
    dispatch(setLimitProduct(number));
  };

  useEffect(() => {
    dispatch(getProducts(pages, limit));
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    if(keyword) {
      dispatch(getSearchProduct(keyword))
    } else {
      dispatch(getProducts(pages, limit));
    }
    // eslint-disable-next-line
  }, [pages, limit, keyword]);



  return (
    <>
      <div className="search">
        <div className="container">
          <h4 className="fw-bold mb-3">PRODUK</h4>
          <div className="search-content">
            <div className="input-group">
              <span className="input-group-text">
                <GoSearch size={25} />
              </span>
              <input
                className="input-produk"
                type="text"
                placeholder="Masukkan nama produk"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center">
              <span className="show">Show:</span>
              <select
                className="form-select form-select-md count"
                aria-label=".form-select-md example"
                defaultValue="8"
                onChange={handleLimit}
              >
                <option value="4">4</option>
                <option value="8" >
                  8
                </option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="d-flex align-items-center">
              <span className="sort">Sort by:</span>
              <select
                className="form-select form-select-md sortby"
                aria-label=".form-select-lg example"
                defaultValue="default"
              >
                <option value="default">
                  Default
                </option>
                <option value="high">High Price</option>
                <option value="low">Low Price</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

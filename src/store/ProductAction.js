import axios from "axios";

export const setProducts = (payload) => {
  return { type: "PRODUCTS/GETALLPRODUCTS", payload };
};

export const setRecentProducts = (payload) => {
  return { type: "PRODUCTS/RECENTPRODUCTS", payload };
};

export const setBestSeller = (payload) => {
  return { type: "PRODUCTS/BESTSELLER", payload };
};

export const setSearchProduct = (payload) => {
  return { type: "PRODUCTS/SEARCHPRODUCT", payload };
};

export const setDetailProduct = (payload) => {
  return { type: "PRODUCTS/DETAILPRODUCT", payload };
};

export const setPage = (payload) => {
  return { type: "PRODUCTS/SETPAGES", payload };
};

export const setLimit = (payload) => {
  return { type: "PRODUCTS/SETLIMIT", payload };
};

export const setAddCart = (payload) => {
  return { type: "PRODUCTS/ADDCART", payload };
};

export const setRemoveCart = (payload) => {
  return { type: "PRODUCTS/REMOVECART", payload };
};

export const setUpdateCart = (payload) => {
  return { type: "PRODUCTS/UPDATECART", payload };
};

export const setCartItems = (payload) => {
    return { type: "PRODUCTS/CARTITEMS", payload };
  };

export const setLoading = (payload) => {
  return { type: "PRODUCTS/LOADING", payload };
};

export const addCart = (user_id, product_id, qty, price, disc_price ) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios
        .post(`http://localhost:3000/carts`, {
          userId:user_id,
          productId:product_id,
          qty:qty,
          price:price,
          disc_price:disc_price,
        })
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setAddCart(res.data));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

export const getRemoveCart = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios
        .delete(`http://localhost:3000/carts/${id}`)
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setRemoveCart(res.data));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

export const getUpdateCart = (id, user_id, product_id, qty, price, disc_price) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios
        .put(`http://localhost:3000/carts/${id}`, {
          userId:user_id,
          productId:product_id,
          qty:qty,
          price:price,
          disc_price:disc_price,
        })
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setUpdateCart(res.data));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

export const getCartItems = (id) => {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true));
        await axios
          .get(`http://localhost:3000/users/${id}/carts?_expand=product`)
          .then((res) => {
            dispatch(setLoading(false));
            dispatch(setCartItems(res.data));
          })
          .catch((err) => {
            dispatch(setLoading(false));
            console.log(err);
          });
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
  };

export const setPageProduct = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setPage(payload));
    } catch (err) {
      dispatch(setLoading(false));
      console.log(err);
    }
  };
};

export const setLimitProduct = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setLimit(payload));
    } catch (err) {
      dispatch(setLoading(false));
      console.log(err);
    }
  };
};

export const getProducts = (page, limit) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios
        .get(`http://localhost:3000/products?_page=${page}&_limit=${limit}`)
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setProducts(res.data));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

export const getSearchProduct = (name) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios
        .get(`http://localhost:3000/products/?name_like=${name}`)
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setSearchProduct(res.data));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

export const getDetailProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setDetailProduct(res.data));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

export const getRecentProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios
        .get("http://localhost:3000/products")
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setRecentProducts(res.data.reverse()));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

export const getBestSeller = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios
        .get("http://localhost:3000/products")
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setBestSeller(res.data.sort((a, b) => b.sell - a.sell)));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

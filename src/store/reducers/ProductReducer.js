const initialState = {
  products: [],
  bestSeller: [],
  recentProducts: [],
  searchProduct: [],
  detailProduct: [],
  pages: 0,
  limit: 8,
  loading: false,
  addCart: [],
  updateCart:[],
  cartItems: [],
  removeCart:[]
};

export default function reducers(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCTS/GETALLPRODUCTS":
      return { ...state, products: payload };
    case "PRODUCTS/BESTSELLER":
      return { ...state, bestSeller: payload };
    case "PRODUCTS/RECENTPRODUCTS":
      return { ...state, recentProducts: payload };
    case "PRODUCTS/SEARCHPRODUCT":
      return { ...state, searchProduct: payload };
    case "PRODUCTS/DETAILPRODUCT":
      return { ...state, detailProduct: payload };
    case "PRODUCTS/SETPAGES":
      return { ...state, pages: payload };
    case "PRODUCTS/SETLIMIT":
      return { ...state, limit: payload };
    case "PRODUCTS/ADDCART":
      return { ...state, addCart: payload };
    case "PRODUCTS/REMOVECART":
      return { ...state, removeCart: payload };
    case "PRODUCTS/UPDATECART":
      return { ...state, updateCart: payload };
    case "PRODUCTS/CARTITEMS":
      return { ...state, cartItems: payload };
    case "PRODUCTS/LOADING":
      return { ...state, loading: payload };
    default:
      return state;
  }
}

const initialState = {
  products: [],
  bestSeller:[],
  recentProducts:[],
  searchProduct:[],
  detailProduct:[],
  loading: false,
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
      case "PRODUCTS/LOADING":
      return { ...state, loading: payload };
    default:
      return state;
  }
}

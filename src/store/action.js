import axios from 'axios';

export const setProducts = (payload) => {
    return {type:"PRODUCTS/GETALLPRODUCTS", payload};
}

export const setRecentProducts = (payload) => {
    return {type:"PRODUCTS/RECENTPRODUCTS", payload};
}

export const setBestSeller = (payload) => {
    return {type:"PRODUCTS/BESTSELLER", payload};
}

export const setSearchProduct = (payload) => {
    return {type:"PRODUCTS/SEARCHPRODUCT", payload};
}

export const setDetailProduct = (payload) => {
    return {type:"PRODUCTS/DETAILPRODUCT", payload};
}

export const setLoading = (payload) => {
    return {type:"PRODUCTS/LOADING", payload};
}

export const getProducts = (page, limit) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get(`http://localhost:3000/products?_page=${page}&_limit=${limit}`)
            .then((res) => {
                dispatch(setLoading(false));
                dispatch(setProducts(res.data));
            })
            .catch((err) => {
                dispatch(setLoading(false));    
                console.log(err);
            })
        } catch(error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}

export const getSearchProduct = (name) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get(`http://localhost:3000/products/?name_like=${name}`)
            .then((res) => {
                dispatch(setLoading(false));
                dispatch(setSearchProduct(res.data));
            })
            .catch((err) => {
                dispatch(setLoading(false));    
                console.log(err);
            })
        } catch(error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}

export const getDetailProduct = (id) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => {
                dispatch(setLoading(false));
                dispatch(setDetailProduct(res.data));
            })
            .catch((err) => {
                dispatch(setLoading(false));    
                console.log(err);
            })
        } catch(error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}

export const getRecentProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get('http://localhost:3000/products')
            .then((res) => {
                dispatch(setLoading(false));
                dispatch(setRecentProducts(res.data.reverse()));
            })
            .catch((err) => {
                dispatch(setLoading(false));    
                console.log(err);
            })
        } catch(error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}

export const getBestSeller = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get('http://localhost:3000/products')
            .then((res) => {
                dispatch(setLoading(false));
                dispatch(setBestSeller(res.data.sort((a, b) => b.sell - a.sell)));
            })
            .catch((err) => {
                dispatch(setLoading(false));    
                console.log(err);
            })
        } catch(error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}


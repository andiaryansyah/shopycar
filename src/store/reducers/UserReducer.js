const initialState = {
   users:[],
   addUser:[],
   loading: false,
}

export default function reducers(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "USERS/GETUSERS":
        return { ...state, users: payload };
        case "USERS/ADDUSER":
        return { ...state, addUser: payload };
        case "USERS/LOADING":
        return { ...state, loading: payload };
        default:
      return state;
  }
}
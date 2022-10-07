import axios from "axios";

export const setUsers = (payload) => {
    return { type: "USERS/GETUSERS", payload };
};

export const setCreateUser = (payload) => {
    return { type: "USERS/ADDUSER", payload };
};

export const setLoading = (payload) => {
    return { type: "USERS/LOADING", payload };
};

  export const getUsers = () => {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true));
        await axios
          .get(`http://localhost:3000/users`)
          .then((res) => {
            dispatch(setLoading(false));
            dispatch(setUsers(res.data));
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

  export const createUser = (username, email, password ) => {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true));
        await axios
          .post(`http://localhost:3000/users`, {
            username:username,
            email:email,
            password:password,
          })
          .then((res) => {
            dispatch(setLoading(false));
            dispatch(setCreateUser(res.data));
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
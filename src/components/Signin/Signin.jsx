import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/FooterImg/Logo.png";
import { getCartItems } from "../../store/ProductAction";
import { getUsers } from "../../store/UserAction";
import "./Signin.css";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  const login = () => {
    const isLogin = users.find(
      (user) => (user.username === username || user.email === username ) && user.password === password);

    if (isLogin === undefined) {
      setMsg("Username atau Password Salah");
    } else {
      localStorage.setItem('id', isLogin.id)
      localStorage.setItem('name',isLogin.username)
      localStorage.setItem('email', isLogin.email)
      setMsg("");
      dispatch(getCartItems(isLogin.id))
      navigate("/")
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="row">
        <div className="col-lg-4 text-center m-auto">
          <img src={Logo} alt="" height="100px" />
          <h4 className="mt-5 text-light">
            Penyedia Spare Part Mobil Terlengkap dan Terjamin Asli untuk
            kebutuhan Bisnis Anda
          </h4>
        </div>
        <div className="col-lg-4 offset-1 m-auto">
          <div className="login">
            <h3>Log in</h3>
            {msg === "" ? null : (
              <div className="alert alert-danger" role="alert">
                {msg}
              </div>
            )}

            <div className="form-input">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="button" className="btn-login" onClick={() => login()}>
              LOG IN
            </button>
            <div className="text-center mt-3">
              <a href="#action1" className="text-decoration-none">
                <small>Lupa Password</small>
              </a>
            </div>
            <div className="text-center mt-3">
              <p className="text-muted">
                Belum punya akun ?{" "}
                <Link
                  to="/signup"
                  className="text-decoration-none fw-bold"
                  style={{ color: "#F75623" }}
                >
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

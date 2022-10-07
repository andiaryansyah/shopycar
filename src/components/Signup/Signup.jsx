import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/FooterImg/Logo.png";
import { createUser, getUsers } from "../../store/UserAction";
import { toast } from "react-toastify";
import "./Signup.css";

const Signup = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  // function isValidEmail(valid) {
  //   return /\S+@\S+\.\S+/.test(valid);
  // }

  // const handleChange = (e) => {
  //   if (!isValidEmail(e.target.value)) {
  //     setMsg("Email tidak valid");
  //   } else {
  //     setMsg("");
  //   }
  //   setEmail(e.target.value);
  // };
  useEffect(() => {
dispatch(getUsers())
  },[])

useEffect(() => {

},[users])

  const onAddUser = (e) => {
    e.preventDefault();
     const  validUser =  users.find((user) => user.username === username)
    const validEmail = users.find((user) => user.email === email)
    let isValid = true
    if (validUser !== undefined) {
      setMsg("Username sudah digunakan");
      isValid = false;
    }  
    if (validEmail !== undefined) {
      setMsg("Email sudah digunakan");
      isValid = false;
    }  
    if (password !== confPassword) {
      setMsg("Password dan konfirmasi password tidak cocok");
      isValid = false;
    } 
    if (isValid){
        dispatch(createUser(username, email.toLowerCase(), password));
        toast.success("Sign Up successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/signin")
    } 
  };

  return (
    <div className="signup-wrapper">
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
            <h3>Daftar</h3>
            {msg === "" ? null : (
              <div className="alert alert-danger" role="alert">
                {msg}
              </div>
            )}
            <form onSubmit={onAddUser}>
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
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="form-input">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-login"
              // onClick={() => onAddUser()}
            >
              DAFTAR
            </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-muted">
                Punya akun ?{" "}
                <Link
                  to="/signin"
                  className="text-decoration-none fw-bold"
                  style={{ color: "#F75623" }}
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

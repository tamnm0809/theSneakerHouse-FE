import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Giả sử đăng nhập thành công và trả về thông tin user
    const userData = {
      username,
      isAdmin: username === "ADMIN", // Đơn giản hóa logic xác định admin
    };

    login(userData);
    navigate(
      userData.isAdmin
        ? "/the-sneaker-house/management/overview"
        : "/the-sneaker-house/home"
    );
  };

  return (
    <>
      <div className="container mt-5">
        <form className="mx-auto w-50 border p-4 shadow-sm bg-light rounded">
          <h5 className="text-center fw-bold p-3 mb-4">Login</h5>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username.."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password.."
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" />
              <label className="form-check-label">Remember me</label>
            </div>
            <Link className="text-body">Forgot password?</Link>
          </div>
          <div className="text-center pt-2 mt-3">
            <button type="submit" className="btn btn-primary w-50">
              Login
            </button>
          </div>
          <div className="text-center mb-3 mt-3">
            <p>Sign in with</p>
            <Link className="mx-3 fs-5">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="mx-3 fs-5">
              <i className="fab fa-google text-lg"></i>
            </Link>
          </div>
          <div className="text-center mt-4 pt-2">
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link className="link-danger mx-1">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

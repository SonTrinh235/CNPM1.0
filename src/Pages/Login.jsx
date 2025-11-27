import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "./css/Login.css";
import Logo from "../Assets/BK_logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanUsername = username.trim();
    const cleanPassword = password.trim();
    const result = login(cleanUsername, cleanPassword);

    if (result.success) {
      console.log("Đăng nhập thành công:", result);
      if (result.role === 'tutor') {
        navigate("/my-classes", { replace: true }); 
      } else {
        navigate("/tutors", { replace: true }); 
      }
    } else {
      alert(result.message || "Sai tên đăng nhập hoặc mật khẩu!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Logo} alt="BK Logo" className="login-logo" />
        <h2 className="login-title">HCMUT Tutor/Mentor · e-Learning</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên tài khoản:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên tài khoản (student1 / tutor1)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu (123)"
              required
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Ghi nhớ đăng nhập
            </label>

            <Link to="/forgot-password" className="forgot-password">
              Quên mật khẩu
            </Link>
          </div>

          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  // đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>HCMUT Tutor/Mentor · e-Learning</h2>
      </div>

      <div className="navbar-right">
        <input type="text" placeholder="Search..." />
        <div className="user-menu" ref={menuRef}>
          <button className="btn" onClick={handleToggleMenu}>
            Sinh viên ▾
          </button>

          {menuOpen && (
            <div className="dropdown-menu">
              <button onClick={() => handleNavigate("/profile")}>Thông tin</button>
              <button onClick={() => handleNavigate("/settings")}>Cài đặt</button>
              <hr />
              <button onClick={handleLogout}>Đăng xuất</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>HCMUT Tutor/Mentor · e-Learning</h2>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." />
        <button className="btn">Sinh viên</button>
      </div>
    </nav>
  );
};

export default Navbar;

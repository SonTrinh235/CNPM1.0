import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to HCMUT Tutor/Mentor e-Learning</h1>
          <p>
            Nền tảng giúp sinh viên Bách Khoa kết nối với tutor, xem lịch học và
            đặt buổi hướng dẫn dễ dàng.
          </p>
          <div className="home-buttons">
            <Link to="/login" className="btn-primary">
              Đăng nhập
            </Link>
            <Link to="/tutors" className="btn-secondary">
              Xem danh sách Tutor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

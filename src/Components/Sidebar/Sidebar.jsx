import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { user } = useAuth();
  const role = user?.role;

  return (
    <div className="sidebar">
      <ul>
        {/* --- MENU DÀNH RIÊNG CHO TUTOR --- */}
        {role === "tutor" ? (
          <>
            <li>
              <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active" : "")}>
                Lịch dạy
              </NavLink>
            </li>

            <li>
              <NavLink to="/my-classes" className={({ isActive }) => (isActive ? "active" : "")}>
                Lớp phụ trách
              </NavLink>
            </li>

            <li>
              <NavLink to="/tutor/create-class" className={({ isActive }) => (isActive ? "active" : "")}>
                Tạo lớp mới
              </NavLink>
            </li>
          </>
        ) : (
          /* --- MENU DÀNH RIÊNG CHO SINH VIÊN --- */
          <>
            <li>
              <NavLink to="/tutors" className={({ isActive }) => (isActive ? "active" : "")}>
                Tìm gia sư
              </NavLink>
            </li>

            {/* Đã thêm mục này cho Sinh viên */}
            <li>
              <NavLink to="/my-classes" className={({ isActive }) => (isActive ? "active" : "")}>
                Lớp của tôi
              </NavLink>
            </li>

            <li>
              <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active" : "")}>
                Thời khóa biểu
              </NavLink>
            </li>

            <li>
              <NavLink to="/library" className={({ isActive }) => (isActive ? "active" : "")}>
                Thư viện tài liệu
              </NavLink>
            </li>
          </>
        )}

        {/* --- MỤC CHUNG CHO CẢ 2 ROLE --- */}
        <hr style={{ margin: "10px 15px", border: "0", borderTop: "1px solid #eee" }} />
        
        <li>
          <NavLink to="/notifications" className={({ isActive }) => (isActive ? "active" : "")}>
            Thông báo
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
            Hồ sơ cá nhân
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
            Cài đặt
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
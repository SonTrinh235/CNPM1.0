import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/schedule" activeclassname="active">
            Thời khóa biểu
          </NavLink>
        </li>
        <li>
          <NavLink to="/tutors" activeclassname="active">
            Danh sách Tutor
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-classes" activeclassname="active">
            Lớp học của tôi
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" activeclassname="active">
            Thư viện tài liệu
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" activeclassname="active">
            Thông báo
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeclassname="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeclassname="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

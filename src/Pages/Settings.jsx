import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./css/Settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotify, setEmailNotify] = useState(true);
  const [fontSize, setFontSize] = useState("normal");

  // Lấy lại cài đặt khi load trang
  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode") === "true";
    const savedEmail = localStorage.getItem("emailNotify") === "true";
    const savedFont = localStorage.getItem("fontSize") || "normal";

    setDarkMode(savedDark);
    setEmailNotify(savedEmail);
    setFontSize(savedFont);
  }, []);

  // Lưu vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("emailNotify", emailNotify);
    localStorage.setItem("fontSize", fontSize);
  }, [darkMode, emailNotify, fontSize]);

  return (
    <div className={`settings-container ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <div className="settings-main">
        <Sidebar />
        <div className="settings-content">
          <h3>Cài đặt</h3>

          <div className="settings-card">
            <h4>Giao diện</h4>
            <label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              &nbsp;Chế độ tối
            </label>
          </div>

          <div className="settings-card">
            <h4>Thông báo</h4>
            <label>
              <input
                type="checkbox"
                checked={emailNotify}
                onChange={() => setEmailNotify(!emailNotify)}
              />
              &nbsp;Nhận thông báo qua email
            </label>
          </div>

          <div className="settings-card">
            <h4>Font chữ</h4>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              <option value="small">Nhỏ</option>
              <option value="normal">Bình thường</option>
              <option value="large">Lớn</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

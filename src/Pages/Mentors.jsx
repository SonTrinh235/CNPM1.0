import React, { useContext } from "react";
import MentorCard from "../Components/MentorCard/MentorCard";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { SettingsContext } from "../Context/SettingsContext";
import "./css/Mentors.css";

const Mentors = () => {
  const { darkMode, fontSize } = useContext(SettingsContext);

  const mentors = [
    { name: "Nguyễn Văn A", subject: "Toán", rating: 4.9 },
    { name: "Trần Thị B", subject: "Tiếng Anh", rating: 4.8 },
    { name: "Lê Văn C", subject: "Vật lý", rating: 4.7 },
  ];

  return (
    <div className={`mentors-container ${darkMode ? "dark" : ""} font-${fontSize}`}>
      <Navbar />
      <div className="mentors-layout">
        <Sidebar />

        <div className="mentors-content">
          <h2>Danh sách Tutor hiện có</h2>
          <div className="mentor-list">
            {mentors.map((m, i) => (
              <MentorCard key={i} mentor={m} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;

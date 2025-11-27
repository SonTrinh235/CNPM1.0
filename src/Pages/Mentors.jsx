import React, { useContext } from "react";
import MentorCard from "../Components/MentorCard/MentorCard";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { SettingsContext } from "../Context/SettingsContext";
import "./css/Mentors.css";

import { MOCK_USERS } from "../data/users";

const Mentors = () => {
  const { darkMode, fontSize } = useContext(SettingsContext);

  const tutorsList = MOCK_USERS.filter((user) => user.role === "tutor");

  return (
    <div className={`mentors-container ${darkMode ? "dark" : ""} font-${fontSize}`}>
      <Navbar />
      <div className="mentors-layout">
        <Sidebar />

        <div className="mentors-content">
          <h2>Danh sách Tutor hiện có</h2>
          <div className="mentor-list">
            {tutorsList.length > 0 ? (
              tutorsList.map((tutor) => (
                <MentorCard 
                  key={tutor.id} 
                  mentor={{
                    id: tutor.id,
                    username: tutor.username,
                    name: tutor.fullName, 
                    subject: tutor.expertise ? tutor.expertise.join(", ") : tutor.faculty, 
                    rating: tutor.rating,
                    avatar: tutor.avatar
                  }} 
                />
              ))
            ) : (
              <p>Hiện chưa có Tutor nào trong hệ thống.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
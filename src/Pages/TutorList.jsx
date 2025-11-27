import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/TutorList.css";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

import { MOCK_USERS } from "../data/users";

const TutorList = () => {
  const navigate = useNavigate();

  const tutors = MOCK_USERS.filter((user) => user.role === "tutor");

  const handleViewProfile = (id) => {
    navigate(`/tutor/${id}`); 
  };

  return (
    <div className="tutorlist-container">
      <Navbar />
      <div className="tutorlist-main">
        <Sidebar />

        <div className="tutorlist-content">
          <h3>Discover Tutors</h3>

          <div className="tutor-grid">
            {tutors.map((tutor) => (
              <div className="tutor-card" key={tutor.id}>
                <div 
                  className="tutor-photo"
                  style={{ 
                    backgroundImage: `url(${tutor.avatar || 'https://via.placeholder.com/150'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>

                <h4>{tutor.fullName}</h4>
                
                <p>
                  {tutor.faculty} · {tutor.rating || "5.0"}★
                </p>
                
                <p>
                  <strong>Chuyên môn:</strong>{" "}
                  {tutor.expertise ? tutor.expertise.join(", ") : "Đang cập nhật"}
                </p>

                <div className="tags">
                  {tutor.expertise && tutor.expertise.map((s, i) => (
                    <span key={i} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="tutor-actions">
                  <button
                    className="view-btn"
                    onClick={() => handleViewProfile(tutor.id)}
                  >
                    Xem hồ sơ
                  </button>
                  <button 
                    className="schedule-btn"
                    onClick={() => alert("Tính năng đặt lịch đang phát triển!")}
                  >
                    Đặt lịch
                  </button>
                </div>
              </div>
            ))}

            {tutors.length === 0 && (
              <p>Hiện chưa có Tutor nào trong hệ thống.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorList;
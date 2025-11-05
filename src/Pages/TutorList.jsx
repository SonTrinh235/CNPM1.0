import React from "react";
import "./css/TutorList.css";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import tutors from "../data/tutors";
import { useNavigate } from "react-router-dom";

const TutorList = () => {
  const navigate = useNavigate();

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
                <div className="tutor-photo"></div>

                <h4>{tutor.name}</h4>
                <p>
                  {tutor.faculty} · {tutor.rating || "4.8★"} · {tutor.sessions}
                </p>
                <p>
                  <strong>Chuyên môn:</strong> {tutor.specialties.join(", ")}
                </p>

                <div className="tags">
                  {tutor.specialties.map((s, i) => (
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
                  <button className="schedule-btn">Đặt lịch</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorList;

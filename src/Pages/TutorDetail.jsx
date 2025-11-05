import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import tutors from "../data/tutors";
import classes from "../data/classes";
import bkLogo from "../Assets/BK_logo.png";
import "./css/TutorDetail.css";

const TutorDetail = () => {
  const { id } = useParams();
  const tutor = tutors.find((t) => t.id === Number(id));

  if (!tutor) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Không tìm thấy thông tin Tutor</h2>
      </div>
    );
  }

  return (
    <div className="tutor-detail-container">
      <Navbar />

      <div className="tutor-detail-content">
        {/* Header */}
        <div className="tutor-header">
          <div className="tutor-avatar"></div>
          <div className="tutor-info">
            <h2>{tutor.name}</h2>
            <p>
              {tutor.faculty} • {tutor.sessions}
            </p>
            <p>Chuyên môn: {tutor.specialties.join(", ")}.</p>
          </div>
          <img src={bkLogo} alt="BK Logo" className="bk-logo" />
        </div>

        <h3 className="class-title">Lớp hiện tại</h3>

        <div className="class-grid">
          {classes.map((c, i) => (
            <div className="class-card" key={i}>
              <div className="class-info">
                <h4>
                  {c.code}: {c.title}
                </h4>
                <p>Thời gian: {c.time}</p>
                <p>{c.days}</p>
              </div>
              <button>Đăng ký lớp học</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TutorDetail;

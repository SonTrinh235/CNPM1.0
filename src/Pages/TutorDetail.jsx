import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // 1. Import useNavigate
import Navbar from "../Components/Navbar/Navbar";
import "./css/TutorDetail.css";
import bkLogo from "../Assets/BK_logo.png";

import { MOCK_USERS } from "../data/users"; 
import { ALL_CLASSES } from "../data/classes";

const TutorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // 2. Khởi tạo navigate

  const tutor = MOCK_USERS.find((t) => t.id === id && t.role === 'tutor');

  if (!tutor) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <Navbar />
        <h2>Không tìm thấy thông tin Tutor</h2>
        <p>ID "{id}" không tồn tại trong hệ thống.</p>
        <button 
            onClick={() => navigate(-1)} 
            style={{marginTop: "20px", padding: "10px 20px", cursor: "pointer"}}
        >
            Quay lại
        </button>
      </div>
    );
  }

  const tutorClasses = ALL_CLASSES.filter(
    (c) => c.tutorUsername === tutor.username
  );

  return (
    <div className="tutor-detail-container">
      <Navbar />

      <div className="tutor-detail-content">
        <button className="btn-back" onClick={() => navigate(-1)}>
          ← Quay lại danh sách
        </button>

        {/* Header */}
        <div className="tutor-header">
          <div
            className="tutor-avatar"
            style={{ backgroundImage: `url(${tutor.avatar || 'https://via.placeholder.com/150'})` }}
          />
          <div className="tutor-info">
            <h2>{tutor.fullName}</h2>
            <p className="faculty">{tutor.faculty}</p>
            <p className="rating">⭐ {tutor.rating || "4.5"} / 5.0</p>
            <p className="specialties">
              <strong>Chuyên môn:</strong> {tutor.expertise ? tutor.expertise.join(", ") : "Đa dạng"}
            </p>
            {tutor.bio && <p className="bio">"{tutor.bio}"</p>}
          </div>
          <img src={bkLogo} alt="BK Logo" className="bk-logo" />
        </div>

        {/* Danh sách lớp */}
        <h3 className="class-title">Các lớp đang mở ({tutorClasses.length})</h3>
        <div className="class-grid">
          {tutorClasses.length > 0 ? (
            tutorClasses.map((c) => (
              <div className="class-card" key={c.id}>
                <div className="class-info">
                  <h4>{c.code}: {c.name}</h4>
                  <div className="class-meta">
                    <p>📅 {c.schedule}</p>
                    <p>📍 {c.room}</p>
                    <p>💰 {c.fee}</p>
                  </div>
                  <p className="desc">{c.description}</p>
                </div>
                <button
                  className="btn-register"
                  onClick={() => alert(`Đã gửi yêu cầu đăng ký lớp ${c.code}!`)}
                >
                  Đăng ký lớp học
                </button>
              </div>
            ))
          ) : (
            <p style={{ fontStyle: 'italic', color: '#666', width: '100%' }}>
              Hiện tại giảng viên này chưa mở lớp học nào.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorDetail;
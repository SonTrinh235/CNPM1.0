import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import student from "../data/student";
import "./css/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <Navbar />

      <div className="profile-main">
        <Sidebar />

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-top">
              <div className="profile-avatar">
                {student.avatar ? (
                  <img src={student.avatar} alt="Avatar" />
                ) : (
                  <div className="avatar-placeholder" />
                )}
              </div>

              <div className="profile-info">
                <div className="info-row">
                  <p><strong>Mã số sinh viên:</strong> {student.id}</p>
                  <p><strong>Họ tên:</strong> {student.firstName} {student.lastName}</p>
                </div>
                <div className="info-row">
                  <p><strong>Giới tính:</strong> {student.gender}</p>
                  <p><strong>Ngày sinh:</strong> {student.dob}</p>
                </div>
                <div className="info-row">
                  <p><strong>Số căn cước:</strong> {student.citizenId}</p>
                  <p><strong>Khoa:</strong> {student.faculty}</p>
                </div>
              </div>
            </div>

            <div className="profile-contact">
              <h4>Thông tin liên lạc:</h4>
              <div className="info-row">
                <p><strong>Số điện thoại:</strong> {student.phone}</p>
                <p><strong>Email:</strong> {student.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

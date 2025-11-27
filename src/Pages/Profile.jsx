import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./css/Profile.css";
import { useAuth } from "../Context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="profile-container">
        <Navbar />
        <div className="profile-main">
          <Sidebar />
          <div className="profile-content">
            <p style={{ padding: "20px" }}>Vui lòng đăng nhập để xem thông tin.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <Navbar />

      <div className="profile-main">
        <Sidebar />

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-top">
              <div className="profile-avatar">
                {user.avatar ? (
                  <img src={user.avatar} alt="Avatar" />
                ) : (
                  <div className="avatar-placeholder" style={{backgroundColor: '#ccc', width: '100%', height: '100%'}} />
                )}
              </div>

              <div className="profile-info">
                <div className="info-row">
                  <p><strong>Mã số {user.role === 'tutor' ? 'giảng viên' : 'sinh viên'}:</strong> {user.id}</p>
                  <p><strong>Họ tên:</strong> {user.fullName || `${user.firstName} ${user.lastName}`}</p>
                </div>
                <div className="info-row">
                  <p><strong>Giới tính:</strong> {user.gender}</p>
                  <p><strong>Ngày sinh:</strong> {user.dob}</p>
                </div>
                <div className="info-row">
                  <p><strong>Số căn cước:</strong> {user.citizenId || "Chưa cập nhật"}</p>
                  <p><strong>Khoa:</strong> {user.faculty}</p>
                </div>
                
                {user.role === 'tutor' && (
                   <div className="info-row">
                      <p style={{gridColumn: "1 / -1"}}>
                        <strong>Chuyên môn:</strong> {user.expertise ? user.expertise.join(", ") : "Đang cập nhật"}
                      </p>
                   </div>
                )}
              </div>
            </div>

            <div className="profile-contact">
              <h4>Thông tin liên lạc:</h4>
              <div className="info-row">
                <p><strong>Số điện thoại:</strong> {user.phone}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            </div>

            {user.bio && (
              <div className="profile-contact" style={{marginTop: '20px'}}>
                <h4>Giới thiệu:</h4>
                <p style={{fontStyle: 'italic', color: '#555'}}>{user.bio}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
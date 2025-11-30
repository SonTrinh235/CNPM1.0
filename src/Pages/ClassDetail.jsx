import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./css/ClassDetail.css";
import { FileText, Bell, Info, Clock, MapPin, Video, Download, User, ArrowLeft } from "lucide-react";

import { ALL_CLASSES } from "../data/classes";
import materialsData from "../data/materials"; 
import notificationsData from "../data/notifications"; 

const ClassDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("info");

  const classInfo = ALL_CLASSES.find((c) => c.id.toString() === id);

  if (!classInfo) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>Không tìm thấy lớp học!</h2>
        <button onClick={() => navigate("/my-classes")}>Quay lại</button>
      </div>
    );
  } 

  const classMaterialIDs = classInfo.materialIds || [];
  const classMaterials = materialsData.filter(m => classMaterialIDs.includes(m.id));
  const classNotificationIDs = classInfo.notificationIds || [];
  const classNotifications = notificationsData.filter(n => classNotificationIDs.includes(n.id));

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <div className="tab-content info-tab">
            <div className="info-card">
              <h3>Thông tin chung</h3>
              <div className="info-row">
                <User size={18} />
                <span><strong>Giảng viên:</strong> {classInfo.tutorUsername || "Chưa cập nhật"}</span>
              </div>
              <div className="info-row">
                <Clock size={18} />
                <span><strong>Lịch học:</strong> {classInfo.schedule || "Chưa cập nhật"}</span>
              </div>
              <div className="info-row">
                <MapPin size={18} />
                <span><strong>Phòng học:</strong> {classInfo.room || "Online"}</span>
              </div>
              <div className="info-row link-row">
                <Video size={18} />
                <span><strong>Link lớp học:</strong> 
                  <a href={classInfo.link || "#"} target="_blank" rel="noreferrer">
                    {classInfo.link || "Chưa có link"}
                  </a>
                </span>
              </div>
            </div>
            <div className="info-card description">
              <h3>Mô tả lớp học</h3>
              <p>{classInfo.description || "Chưa có mô tả chi tiết."}</p>
            </div>
          </div>
        );

      case "materials":
        return (
          <div className="tab-content materials-tab">
            <div className="section-header">
              <h3>Tài liệu học tập ({classMaterials.length})</h3>
              <button className="btn-upload">Tải lên tài liệu</button>
            </div>

            {classMaterials.length > 0 ? (
              <div className="material-list-detail">
                {classMaterials.map((item) => (
                  <div key={item.id} className="material-item-row">
                    <div className="file-icon">DOC</div>
                    <div className="file-info">
                      <h4>{item.title}</h4>
                      <p>{item.author} • {item.code}</p>
                    </div>
                    <a href={item.link} target="_blank" rel="noreferrer" className="btn-download">
                      <Download size={18} />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
               <p style={{color: "#888", fontStyle: "italic"}}>Lớp này chưa có tài liệu nào.</p>
            )}
          </div>
        );

      case "notifications":
        return (
          <div className="tab-content notifications-tab">
            <h3>Thông báo lớp học ({classNotifications.length})</h3>
            
            {classNotifications.length > 0 ? (
              <div className="notify-list-detail">
                {classNotifications.map((item) => (
                  <div key={item.id} className="notify-item-detail">
                    <div className="notify-header">
                      <h4>{item.title}</h4>
                      <span className="date">{item.date}</span>
                    </div>
                    <p className="sender">Từ: {item.sender}</p>
                    <p className="content">{item.content}</p>
                  </div>
                ))}
              </div>
            ) : (
               <p style={{color: "#888", fontStyle: "italic"}}>Chưa có thông báo nào.</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="class-detail-container">
      <Navbar />
      <div className="class-detail-main">
        <Sidebar />
        <div className="class-detail-content">
          
          <button className="cd-back-btn" onClick={() => navigate("/my-classes")}>
            <ArrowLeft size={20} />
            Quay lại danh sách lớp
          </button>

          <div className="class-header-banner">
            <div className="banner-overlay"></div>
            <div className="banner-info">
              <h1>{classInfo.name || classInfo.className}</h1>
              <p className="class-code">Mã lớp: {classInfo.code || classInfo.id}</p>
            </div>
          </div>

          <div className="class-tabs">
            <button 
              className={`tab-btn ${activeTab === "info" ? "active" : ""}`} 
              onClick={() => setActiveTab("info")}
            >
              <Info size={18} /> Thông tin
            </button>
            <button 
              className={`tab-btn ${activeTab === "materials" ? "active" : ""}`} 
              onClick={() => setActiveTab("materials")}
            >
              <FileText size={18} /> Tài liệu
            </button>
            <button 
              className={`tab-btn ${activeTab === "notifications" ? "active" : ""}`} 
              onClick={() => setActiveTab("notifications")}
            >
              <Bell size={18} /> Thông báo
            </button>
          </div>

          <div className="class-body">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
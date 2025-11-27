import React, { useState } from "react";
import "./css/Notifications.css";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import notificationsData from "../data/notifications";
import { Star } from "lucide-react";
import { useAuth } from "../Context/AuthContext";

const MOCK_TEACHING_CLASSES = [
  { id: 1, name: "Luyện thi Toán 12 - Lớp A" },
  { id: 2, name: "Tiếng Anh Giao Tiếp - K15" },
  { id: 3, name: "Lập trình Web ReactJS" },
];

const Notifications = () => {
  const { user } = useAuth();
  const [data, setData] = useState(notificationsData);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedClassId, setSelectedClassId] = useState("");
  const [content, setContent] = useState("");

  const toggleImportant = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!selectedClassId || !content) return;

    const targetClass = MOCK_TEACHING_CLASSES.find(c => c.id === selectedClassId);

    const newNotify = {
      id: Date.now(),
      title: `Thông báo lớp: ${targetClass?.name}`,
      content: content,
      date: "Vừa xong",
      important: false,
      sender: user?.fullName || "Giảng viên",
    };

    setData([newNotify, ...data]);
    
    setContent("");
    alert("Đã gửi thông báo thành công!");
  };

  const filtered = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="notifications-container">
      <Navbar />
      <div className="notifications-main">
        <Sidebar />

        <div className="notifications-content">
          
          {user?.role === 'tutor' && (
            <div className="create-notify-box">
              <h3> Gửi thông báo cho lớp</h3>
              <form onSubmit={handleSend}>
                <div className="form-row">
                  <select 
                    value={selectedClassId}
                    onChange={(e) => setSelectedClassId(e.target.value)}
                    required
                  >
                    <option value="">-- Chọn lớp --</option>
                    {MOCK_TEACHING_CLASSES.map((cls) => (
                      <option key={cls.id} value={cls.id}>{cls.name}</option>
                    ))}
                  </select>
                  <button type="submit" className="btn-send">Gửi</button>
                </div>
                <textarea 
                  placeholder="Nhập nội dung thông báo..." 
                  rows="2"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </form>
            </div>
          )}
          <div className="toolbar">
            <button className="filter-btn">All ▼</button>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="sort-btn">Sort by name ▼</button>
            <button className="view-btn">List ▼</button>
          </div>

          <div className="notification-list">
            {filtered.map((item) => (
              <div key={item.id} className="notification-card">
                <div className="notification-info">
                  <h4>{item.title}</h4>
                  <p className="content">{item.content}</p>
                  <p className="detail">
                    {item.date || "20/11/2024"} • (Ấn để xem chi tiết)
                  </p>
                </div>
                <button
                  className={`star-btn ${item.important ? "active" : ""}`}
                  onClick={() => toggleImportant(item.id)}
                >
                  <Star fill={item.important ? "gold" : "none"} size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
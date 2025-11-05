import React, { useState } from "react";
import "./css/Notifications.css";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import notifications from "../data/notifications";
import { Star } from "lucide-react";

const Notifications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(notifications);

  const toggleImportant = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
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
          <div className="toolbar">
            <button className="filter-btn">All ▼</button>
            <input
              type="text"
              placeholder="Tìm kiếm"
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
                  <p className="detail">(Ấn để xem thông báo chi tiết)</p>
                </div>
                <button
                  className={`star-btn ${item.important ? "active" : ""}`}
                  onClick={() => toggleImportant(item.id)}
                >
                  <Star fill={item.important ? "gold" : "none"} />
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

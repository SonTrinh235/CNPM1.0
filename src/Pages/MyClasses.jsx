import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; 
import "./css/MyClasses.css";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

import { ALL_CLASSES } from "../data/classes"; 

const MyClasses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();
  const [myList, setMyList] = useState([]);
  useEffect(() => {
    if (!user) return;

    let filteredByRole = [];

    if (user.role === 'tutor') {
      filteredByRole = ALL_CLASSES.filter(c => c.tutorUsername === user.username);
    } else {
      filteredByRole = ALL_CLASSES.filter(c => c.students.includes(user.username));
    }

    setMyList(filteredByRole);
  }, [user]);

  const finalDisplay = myList.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="myclasses-container">
      <Navbar />
      <div className="myclasses-main">
        <Sidebar />

        <div className="myclasses-content">
          <div className="myclasses-toolbar">
            {user && user.role === 'tutor' && (
              <Link to="/tutor/create-class" className="create-btn">
                + Tạo lớp mới
              </Link>
            )}

            <button className="filter-btn">All ▼</button>
            <input
              type="text"
              placeholder="Tìm kiếm lớp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="sort-btn">Sort by name ▼</button>
            <button className="view-btn">List ▼</button>
          </div>

          <div className="myclass-list">
            {finalDisplay.map((item) => (
              <div key={item.id} className="myclass-card">
                <div 
                  className="myclass-img" 
                  style={{ 
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                <div className="myclass-info">
                  <h4>| {item.code}</h4>
                  <p className="title">{item.name}</p>
                  
                  <p className="meta-info" style={{fontSize: '0.9rem', color: '#666', marginBottom: '5px'}}>
                    <span style={{marginRight: '10px'}}>📅 {item.schedule}</span>
                    <span>📍 {item.room}</span>
                  </p>

                  {user?.role === 'student' ? (
                     <p className="author">GV: {item.tutorUsername}</p>
                  ) : (
                     <p className="author" style={{color: '#0066cc', fontWeight: 'bold'}}>
                        Sĩ số: {item.students.length} học viên
                     </p>
                  )}
                </div>
              </div>
            ))}

            {finalDisplay.length === 0 && (
              <div className="empty-state" style={{width: '100%', textAlign: 'center', padding: '20px'}}>
                <p style={{ color: "#888" }}>
                  {searchTerm ? "Không tìm thấy kết quả phù hợp." : "Bạn chưa có lớp học nào."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
import React, { useState } from "react";
import "./css/MyClasses.css";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import myClasses from "../data/myClasses";

const MyClasses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = myClasses.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="myclasses-container">
      <Navbar />
      <div className="myclasses-main">
        <Sidebar />

        <div className="myclasses-content">
          <div className="myclasses-toolbar">
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

          <div className="myclass-list">
            {filtered.map((item) => (
              <div key={item.id} className="myclass-card">
                <div className="myclass-img"></div>
                <div className="myclass-info">
                  <h4>| {item.code}</h4>
                  <p className="title">
                    {item.title} — {item.teacher} ({item.semester}) [
                    {item.groups.join(", ")}]
                  </p>
                  <p className="author">{item.faculty}</p>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <p style={{ color: "#888", marginTop: "10px" }}>
                Không tìm thấy lớp học.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;

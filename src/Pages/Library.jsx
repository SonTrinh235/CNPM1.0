import React, { useState } from "react";
import "./css/Library.css";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import materials from "../data/materials";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = materials.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-container">
      <Navbar />
      <div className="library-main">
        <Sidebar />

        <div className="library-content">
          <div className="library-toolbar">
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

          <div className="material-list">
            {filtered.map((item) => (
              <div key={item.id} className="material-card">
                <div className="material-img"></div>
                <div className="material-info">
                  <h4>| {item.code}</h4>
                  <p className="title">{item.title}</p>
                  <p className="author">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;

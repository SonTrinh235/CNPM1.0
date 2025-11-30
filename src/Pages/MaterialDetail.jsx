import React from "react";
import "./css/MaterialDetail.css";

const MaterialDetail = ({ material, onBack }) => {
  if (!material) return null;

  return (
    <div className="material-detail-container">
      <button onClick={onBack} className="md-back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Quay lại thư viện
      </button>

      <div className="md-content-wrapper">
        <div className="md-left-column">
          <div className="md-image-placeholder">
            <div className="md-book-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
          </div>
          
          <div className="md-action-buttons">
            <button className="md-btn-outline">
              <span> Lưu </span> 
            </button>
            <button className="md-btn-outline">
              <span> Chia sẻ </span> 
            </button>
          </div>
        </div>

        <div className="md-right-column">
          <div className="md-header">
            <span className="md-badge">{material.code}</span>
            <div className="md-rating">⭐⭐⭐⭐⭐ <span className="md-rating-text">(4.8/5)</span></div>
          </div>

          <h1 className="md-title">{material.title}</h1>
          <p className="md-author">Tác giả: <strong>{material.author}</strong></p>

          <div className="md-description-box">
            <h3>Mô tả tài liệu</h3>
            <p>
              Đây là tài liệu học tập chính thức cho học phần <strong>{material.code}</strong>. 
              Tài liệu cung cấp kiến thức nền tảng và nâng cao, phù hợp cho sinh viên đại học Bách Khoa 
              trong quá trình nghiên cứu và ôn tập.
            </p>
            <ul className="md-meta-list">
              <li>📄 Định dạng: PDF / Digital</li>
              <li>🌏 Ngôn ngữ: Tiếng Anh / Tiếng Việt</li>
              <li>📅 Cập nhật: 2024</li>
            </ul>
          </div>

          <div className="md-main-actions">
            <a 
              href={material.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="md-btn-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Tải tài liệu
            </a>
            <button className="md-btn-secondary">Xem trước</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetail;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"; 
import "./CreateClass.css";

const CreateClass = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [classData, setClassData] = useState({
    className: "",
    subject: "",
    schedule: "",
    link: "",
    description: "",
    fee: "",
  });

  const handleChange = (e) => {
    setClassData({ ...classData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClass = {
      id: Date.now(),
      tutorName: user?.fullName || "Tutor",
      tutorId: user?.id,
      ...classData,
    };

    console.log("Lớp mới đã được tạo:", newClass);
    alert("Tạo lớp thành công!");
    navigate("/my-classes");
  };

  return (
    <div className="create-class-container">
      <h2>Tạo Lớp Học Mới</h2>
      <p>Giảng viên: <strong>{user?.fullName}</strong></p>

      <form onSubmit={handleSubmit} className="create-class-form">
        <div className="form-group">
          <label>Tên lớp học</label>
          <input
            type="text"
            name="className"
            placeholder="Ví dụ: Luyện thi Đại học Toán 12"
            value={classData.className}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Môn học</label>
            <select name="subject" value={classData.subject} onChange={handleChange} required>
              <option value="">Chọn môn...</option>
              <option value="Tiếng Anh">Tiếng Anh </option>
              <option value="Đại cương">Đại cương </option>
              <option value="Cơ sở ngành">Cơ sở ngành</option>
              <option value="Chuyên ngành">Chuyên ngành</option>
              <option value="Tự chọn">Tự chọn</option>
              <option value="Hướng dẫn đồ án">Hướng dẫn đồ án</option>
            </select>
          </div>

          <div className="form-group">
            <label>Học phí (VND/buổi)</label>
            <input
              type="number"
              name="fee"
              placeholder="200000"
              value={classData.fee}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Lịch học (Thứ - Giờ)</label>
          <input
            type="text"
            name="schedule"
            placeholder="Ví dụ: Thứ 2-4-6 (19:00 - 21:00)"
            value={classData.schedule}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Link lớp học (Zoom/Meet/Teams)</label>
          <input
            type="text"
            name="link"
            placeholder="https://meet.google.com/..."
            value={classData.link}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Mô tả chi tiết</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Nội dung khóa học, yêu cầu đầu vào..."
            value={classData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="button-group">
          <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>
            Hủy
          </button>
          <button type="submit" className="btn-submit">
            Tạo Lớp
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateClass;
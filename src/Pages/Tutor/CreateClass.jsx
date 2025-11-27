import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./CreateClass.css";

const DAYS = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

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


  const [scheduleMap, setScheduleMap] = useState({});
  const [activeDay, setActiveDay] = useState(null); 
  const [tempTime, setTempTime] = useState({ start: "", end: "" });

  const handleDayClick = (day) => {
    setActiveDay(day);
    if (scheduleMap[day]) {
      setTempTime(scheduleMap[day]);
    } else {
      setTempTime({ start: "", end: "" });
    }
  };

  const saveTimeForDay = () => {
    if (!tempTime.start || !tempTime.end) {
      alert("Vui lòng nhập đủ giờ bắt đầu và kết thúc!");
      return;
    }
    setScheduleMap({
      ...scheduleMap,
      [activeDay]: tempTime
    });
    setActiveDay(null);
  };
  const removeTimeForDay = () => {
    const newSchedule = { ...scheduleMap };
    delete newSchedule[activeDay];
    setScheduleMap(newSchedule);
    setActiveDay(null);
  };

  useEffect(() => {
    const entries = Object.entries(scheduleMap);
    if (entries.length === 0) {
      setClassData((prev) => ({ ...prev, schedule: "" }));
      return;
    }

    entries.sort((a, b) => DAYS.indexOf(a[0]) - DAYS.indexOf(b[0]));

    const scheduleString = entries
      .map(([day, time]) => `${day} (${time.start} - ${time.end})`)
      .join(", ");

    setClassData((prev) => ({ ...prev, schedule: scheduleString }));
  }, [scheduleMap]);

  const handleChange = (e) => {
    setClassData({ ...classData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!classData.schedule) {
      alert("Vui lòng chọn ít nhất một buổi học!");
      return;
    }

    const newClass = {
      id: Date.now(),
      tutorName: user?.fullName || "Tutor Demo",
      tutorId: user?.id,
      ...classData,
    };

    console.log("Lớp mới:", newClass);
    alert(`Tạo thành công!\nLịch: ${newClass.schedule}`);
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
            placeholder="Ví dụ: Nhập môn nghệ thuật hắc ám"
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
              <option value="Tiếng Anh">Tiếng Anh</option>
              <option value="Đại cương">Đại cương</option>
              <option value="Cơ sở ngành">Cơ sở ngành</option>
              <option value="Chuyên ngành">Chuyên ngành</option>
              <option value="Tự chọn">Tự chọn</option>
            </select>
          </div>
          <div className="form-group">
            <label>Học phí (VND/buổi)</label>
            <input
              type="number"
              name="fee"
              value={classData.fee}
              onChange={handleChange}
              placeholder="200000"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Ngày học</label>
          
          <div className="week-grid">
            {DAYS.map((day) => {
              const hasTime = scheduleMap[day];
              return (
                <div
                  key={day}
                  className={`day-box ${hasTime ? "selected" : ""} ${activeDay === day ? "active" : ""}`}
                  onClick={() => handleDayClick(day)}
                >
                  <span className="day-name">{day}</span>
                  {hasTime && (
                    <span className="day-time">
                      {hasTime.start} - {hasTime.end}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {activeDay && (
            <div className="time-editor">
              <p>Giờ học <strong>{activeDay}</strong></p>
              <div className="time-inputs">
                <input 
                  type="time" 
                  value={tempTime.start} 
                  onChange={(e) => setTempTime({...tempTime, start: e.target.value})}
                />
                <span>đến</span>
                <input 
                  type="time" 
                  value={tempTime.end} 
                  onChange={(e) => setTempTime({...tempTime, end: e.target.value})}
                />
              </div>
              <div className="editor-actions">
                <button type="button" className="btn-save-time" onClick={saveTimeForDay}>Lưu giờ</button>
                {scheduleMap[activeDay] && (
                  <button type="button" className="btn-remove-time" onClick={removeTimeForDay}>Xóa ngày này</button>
                )}
                <button type="button" className="btn-close-time" onClick={() => setActiveDay(null)}>Hủy</button>
              </div>
            </div>
          )}
        </div>
        {/* ------------------------- */}

        <div className="form-group">
          <label>Link lớp học</label>
          <input
            type="text"
            name="link"
            value={classData.link}
            onChange={handleChange}
            placeholder="Link Zoom/Meet..."
          />
        </div>

        <div className="form-group">
          <label>Mô tả</label>
          <textarea
            name="description"
            rows="3"
            value={classData.description}
            onChange={handleChange}
            placeholder="Mô tả..."
          ></textarea>
        </div>

        <div className="button-group">
          <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>Hủy</button>
          <button type="submit" className="btn-submit">Tạo Lớp</button>
        </div>
      </form>
    </div>
  );
};

export default CreateClass;
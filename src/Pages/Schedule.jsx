import React, { useMemo } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import vi from "date-fns/locale/vi";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./css/Schedule.css";

// 1. Import Auth và Data
import { useAuth } from "../Context/AuthContext";
import { ALL_CLASSES } from "../data/classes";

const locales = {
  vi: vi,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
};

const Schedule = () => {
  const { user } = useAuth();

  const events = useMemo(() => {
    if (!user) return [];

    let myClasses = [];
    if (user.role === 'tutor') {
      myClasses = ALL_CLASSES.filter(c => c.tutorUsername === user.username);
    } else {
      myClasses = ALL_CLASSES.filter(c => c.students.includes(user.username));
    }

    const generatedEvents = [];
    const now = new Date();
    const startOfCurrentWeek = startOfWeek(now, { weekStartsOn: 1 });
    myClasses.forEach((cls) => {
      const regex = /Thứ\s+([\d-]+)\s+\((\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})\)/i;
      const match = cls.schedule.match(regex);

      if (match) {
        const daysStr = match[1]; 
        const startTimeStr = match[2];
        const endTimeStr = match[3];

        const days = daysStr.split('-').map(Number);

        days.forEach(dayNumber => {
          let dayIndex = dayNumber === 8 ? 0 : dayNumber - 1; 

          const offset = dayIndex === 0 ? 6 : dayIndex - 1;
          const eventDate = new Date(startOfCurrentWeek);
          eventDate.setDate(startOfCurrentWeek.getDate() + offset);
          const [startH, startM] = startTimeStr.split(':').map(Number);
          const start = new Date(eventDate);
          start.setHours(startH, startM, 0);

          const [endH, endM] = endTimeStr.split(':').map(Number);
          const end = new Date(eventDate);
          end.setHours(endH, endM, 0);

          generatedEvents.push({
            id: `${cls.id}-${dayNumber}`,
            title: `${cls.code} - ${cls.name} (${cls.room})`,
            start,
            end,
            color: stringToColor(cls.code), 
          });
        });
      }
    });

    return generatedEvents;
  }, [user]);

  return (
    <div className="schedule-container">
      <Navbar />
      <div className="schedule-main">
        <Sidebar />
        <div className="schedule-content">
          <div className="schedule-header">
            <h3>Thời khóa biểu tuần này</h3>
            {user && <p>Xin chào, {user.fullName}</p>}
          </div>

          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="week"
            views={["day", "week", "month"]}
            culture="vi"
            step={30}
            timeslots={2}
            style={{
              height: "75vh",
              background: "#fff",
              borderRadius: "12px",
              padding: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.color,
                borderRadius: "6px",
                opacity: 0.9,
                color: "white",
                border: "none",
                display: "block",
                fontSize: "0.85rem",
              },
            })}
            messages={{
              week: "Tuần",
              day: "Ngày",
              month: "Tháng",
              previous: "Trước",
              next: "Sau",
              today: "Hôm nay",
              date: "Ngày",
              time: "Thời gian",
              event: "Sự kiện",
              noEventsInRange: "Không có lớp học nào trong khoảng thời gian này.",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
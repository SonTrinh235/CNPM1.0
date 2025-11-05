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
import scheduleData from "../data/schedule";

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

const Schedule = () => {
  const events = useMemo(() => {
    const now = new Date();
    const startOfThisWeek = startOfWeek(now, { weekStartsOn: 1 });
    return scheduleData.map((item) => {
      const start = new Date(startOfThisWeek);
      const end = new Date(startOfThisWeek);
      start.setDate(start.getDate() + item.day);
      end.setDate(start.getDate());
      start.setHours(item.startHour, 0, 0);
      end.setHours(item.endHour, 0, 0);
      return {
        id: item.id,
        title: `${item.title} (${item.room})`,
        start,
        end,
        color: item.color,
      };
    });
  }, []);

  return (
    <div className="schedule-container">
      <Navbar />
      <div className="schedule-main">
        <Sidebar />
        <div className="schedule-content">
          <h3>Thời khóa biểu</h3>

          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="week"
            views={["day", "week", "month"]}
            culture="vi"
            step={60}
            timeslots={2}
            style={{
              height: "80vh",
              background: "#fff",
              borderRadius: "12px",
              padding: "10px",
            }}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.color,
                borderRadius: "8px",
                opacity: 0.9,
                color: "white",
                border: "none",
                display: "block",
              },
            })}
            messages={{
              week: "Tuần",
              day: "Ngày",
              month: "Tháng",
              previous: "←",
              next: "→",
              today: "Hôm nay",
              showMore: (total) => `+${total} thêm`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;

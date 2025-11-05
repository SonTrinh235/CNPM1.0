import React from "react";
import "./MentorCard.css";

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <h3>{mentor.name}</h3>
      <p>Subject: {mentor.subject}</p>
      <p>⭐ {mentor.rating}</p>
      <button>View Profile</button>
    </div>
  );
};

export default MentorCard;

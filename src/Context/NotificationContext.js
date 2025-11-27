import React, { createContext, useContext, useState, useEffect } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const savedNotify = localStorage.getItem("notifications_data");
    if (savedNotify) {
      setNotifications(JSON.parse(savedNotify));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notifications_data", JSON.stringify(notifications));
  }, [notifications]);

  const sendNotification = (newNotify) => {
    setNotifications((prev) => [newNotify, ...prev]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, sendNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
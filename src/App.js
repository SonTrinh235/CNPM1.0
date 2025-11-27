import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SettingsProvider } from "./Context/SettingsContext";
import { AuthProvider } from "./Context/AuthContext";
import { NotificationProvider } from "./Context/NotificationContext";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import TutorList from "./Pages/TutorList";
import TutorDetail from "./Pages/TutorDetail";
import Library from "./Pages/Library";
import Schedule from "./Pages/Schedule";
import MyClasses from "./Pages/MyClasses";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";
import CreateClass from "./Pages/Tutor/CreateClass";
import Settings from "./Pages/Settings";

function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <NotificationProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/tutors" element={<TutorList />} />
              <Route path="/tutor/:id" element={<TutorDetail />} />
              <Route path="/library" element={<Library />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/my-classes" element={<MyClasses />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/tutor/create-class" element={<CreateClass />} />
              <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
          </Router>
        </NotificationProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;
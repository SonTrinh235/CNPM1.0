import React, { createContext, useState, useEffect } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("normal");
  const [emailNotify, setEmailNotify] = useState(true);

  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode") === "true";
    const savedFont = localStorage.getItem("fontSize") || "normal";
    const savedEmail = localStorage.getItem("emailNotify") === "true";

    setDarkMode(savedDark);
    setFontSize(savedFont);
    setEmailNotify(savedEmail);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("emailNotify", emailNotify);
  }, [darkMode, fontSize, emailNotify]);

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode,
        fontSize,
        setFontSize,
        emailNotify,
        setEmailNotify,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

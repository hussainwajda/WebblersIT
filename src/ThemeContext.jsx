import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme on initial load
  useEffect(() => {
    document.body.classList.add("theme-fade");

    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }

    const timeout = setTimeout(() => {
      document.body.classList.remove("theme-fade");
    }, 300);

    return () => clearTimeout(timeout);
  }, [darkMode]);

  // Toggle function with smooth fade
  const toggleTheme = () => {
    document.body.classList.add("theme-fade");

    setDarkMode((prev) => {
      const newMode = !prev;

      if (newMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }

      return newMode;
    });

    setTimeout(() => {
      document.body.classList.remove("theme-fade");
    }, 300);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

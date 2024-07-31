import React from "react";
import { useState, useEffect } from "react";

const DarkModeContext = React.createContext({
  darkMode: false,
  toggleDisplayMode: () => {},
});

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  //check if local state has been previously saved. If not, defaults to light
  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark" ? true : false);
  });

  //toggle function
  const toggleDisplayMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("displayMode", newMode ? "dark" : "light");
  };

  //wrapper
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDisplayMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider, DarkModeContext };

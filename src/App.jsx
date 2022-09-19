import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import Home from "./pages/Home";

// Define the App component, initialize state and pass down the theme state and setState function as props
function App() {
  // Initialized dark mode state and set default theme to dark mode
  const [darkMode, setDarkMode] = useState(true);
  darkMode && document.documentElement.classList.add("dark");

  // Toggle dark mode
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }

  // Loader timeout
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="dark:bg-bg_dark h-screen w-full bg-white">
          <Loader theme={darkMode} />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home theme={darkMode} toggleTheme={toggleDarkMode} />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;

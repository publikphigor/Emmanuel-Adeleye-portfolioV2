import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import Home from "./pages/Home";

// Define the App component, initialize state and pass down the theme state and setState function as a prop

function App() {
  // Dark Mode Props
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
    }, 1000);
  }, []);

  return (
    <div className="dark:bg-bg_dark h-screen w-full bg-white">
      {loading ? (
        <Loader theme={darkMode} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home theme={darkMode} toggleTheme={toggleDarkMode} />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import Home from "./pages/Home";

function App() {
  // Dark Mode Props
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }

  // Loader timeout
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
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

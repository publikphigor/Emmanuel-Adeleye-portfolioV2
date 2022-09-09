import { useState } from "react";
import { Header, Hero } from "../components";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div>
      <Header theme={darkMode} toggleTheme={toggleDarkMode} />
      <Hero theme={darkMode} />
    </div>
  );
};

export default Home;

import { useState } from "react";
import { Header, Hero, Projects, Footer, Contributions } from "../components";

const Home = ({ theme, toggleTheme }) => {
  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Projects />
      <Contributions />
      <Footer />
    </div>
  );
};

export default Home;

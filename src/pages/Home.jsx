import { useState } from "react";
import {
  Header,
  Hero,
  Cursor,
  Projects,
  Footer,
  Contributions,
  Articles,
  Contact,
} from "../components";

// Define the Home component and pass down the theme state and setState function as a prop
const Home = ({ theme, toggleTheme }) => {
  let [nextSection, setNextSection] = useState(null);
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} nextSection={nextSection} />
      <Projects nextSection={nextSection} setNextSection={setNextSection} />
      <Contributions />
      <Articles />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </>
  );
};

export default Home;

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
  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Projects />
      <Contributions />
      <Articles />
      <Contact />
      <Footer theme={theme} />
    </div>
  );
};

export default Home;

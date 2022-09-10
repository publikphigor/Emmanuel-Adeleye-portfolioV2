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

import { Header, Hero, Projects, Footer, Contributions, Articles } from "../components";

const Home = ({ theme, toggleTheme }) => {
  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Projects />
      <Contributions />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;

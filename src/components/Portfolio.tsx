import "../css/main.css"
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
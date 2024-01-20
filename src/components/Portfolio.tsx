import { Route, Routes } from "react-router-dom";
import "../css/main.css";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}
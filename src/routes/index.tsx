import { lazy } from "react";
import PathConstants from "./pathConstants";
import { Navigate } from "react-router-dom";

function getHome() {
  const Home = lazy(() => import("../pages/Home"));
  return <Home />
}

function getAboutMe() {
  const AboutMe = lazy(() => import("../pages/AboutMe"));
  return <AboutMe />;
}

function getSkills() {
  const Skills = lazy(() => import("../pages/Skills"));
  return <Skills />;
}

function getProjects() {
  const Projects = lazy(() => import("../pages/Projects"));
  return <Projects />;
}

function getBlog() {
  const Blog = lazy(() => import("../pages/Blog"));
  return <Blog />;
}

function getContact() {
  const Contact = lazy(() => import("../pages/Contact"));
  return <Contact />;
}

const routes = [
  {
    path: PathConstants.HOME,
    element: getHome(),
  },
  {
    path: PathConstants.ABOUT,
    element: getAboutMe(),
  },
  {
    path: PathConstants.SKILLS,
    element: getSkills(),
  },
  {
    path: PathConstants.PROJECTS,
    element: getProjects(),
  },
  {
    path: PathConstants.BLOG,
    element: getBlog(),
  },
  {
    path: PathConstants.CONTACT,
    element: getContact(),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
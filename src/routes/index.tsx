import { lazy } from "react";
import PathConstants from "./pathConstants";
import { Navigate } from "react-router-dom";
import SplitLayout from "../components/Main/Split/SplitLayout";
import SingleLayout from "../components/Main/Single/SingleLayout";

function getHome() {
  const Home = lazy(() => import("../pages/Home/Home"));
  return <Home />;
}

function getAboutMe() {
  const AboutMe = lazy(() => import("../pages/About/AboutMe"));
  return <AboutMe />;
}

function getSkills() {
  const Skills = lazy(() => import("../pages/Skills/Skills"));
  return <Skills />;
}

function getProjects() {
  const Projects = lazy(() => import("../pages/Project/Projects"));
  return <Projects />;
}

function getBlog() {
  const Blog = lazy(() => import("../pages/Blog/Blog"));
  return <Blog />;
}

function getBlogArticle() {
  const BlogArticle = lazy(() => import("../pages/Blog/BlogArticle/BlogArticle"));
  return <BlogArticle />;
}

function getContact() {
  const Contact = lazy(() => import("../pages/Contact/Contact"));
  return <Contact />;
}

function getError() {
  const ErrorPage = lazy(() => import("../pages/ErrorPage"));
  return <ErrorPage />;
}

const routes = [
  {
    element: <SplitLayout />,
    children: [
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
        path: PathConstants.CONTACT,
        element: getContact(),
      },
      {
        path: PathConstants.DEFAULT,
        element: <Navigate to={PathConstants.HOME} replace />,
      },
    ],
  },
  {
    element: <SingleLayout />,
    children: [
      {
        path: PathConstants.PROJECTS,
        element: getProjects(),
      },
      {
        path: PathConstants.BLOG,
        element: getBlog(),
      },
      {
        path: PathConstants.BLOG_ARTICLE,
        element: getBlogArticle(),
      },
      {
        path: PathConstants.ERROR,
        element: getError(),
        loader: () => {
          throw new Error("Self-initiated Failure.");
        },
      },
    ],
  },
];

export default routes;

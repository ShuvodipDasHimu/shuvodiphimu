import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/layout/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        path: "",
        Component: Home
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "projects",
        Component: Projects
      },
      {
        path: "skills",
        Component: Skills
      },
      {
        path: "contact",
        Component: Contact
      }
    ]
  }
])

export default router;
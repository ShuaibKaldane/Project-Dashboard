import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/user/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ContactUsPage from "./components/contactus/ContactUs";
import About from "./components/issues/About";
import AddIssue from "./components/issues/AddIssue";
import ViewIssues from "./components/issues/ViewIssues";
import CodeTab from "./components/CodeDashboard/CodeTab";
import Home from "./components/user/Home";
import { useAuth } from "./authContext"; // Ensure authContext is properly set up
import Homescreen from "./Homescreen";
import AboutIssues from "./components/issues/AboutIssues";
import PmDashboard from "./components/pmDashboard/pmDashboard";
import EmpDashboard from "./components/empDashboard/EmpDashboard";


const ProjectRoutes = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem('userId');

    if (userIdFromStorage && !currentUser) {
      setCurrentUser(userIdFromStorage);
    }

    // If no userId in localStorage, redirect to login page
    if (!userIdFromStorage && !["/auth", "/signup"].includes(window.location.pathname)) {
      navigate("/auth");
    }

    // If user is already logged in and on /auth, redirect to home
    if (userIdFromStorage && window.location.pathname === "/auth") {
      navigate("/home");
    }
  }, [currentUser, navigate, setCurrentUser]);

  let element = useRoutes([
    {
      path: "/about",
      element:  <About />
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/contact-us",
      element: <ContactUsPage />,
    },
   
    {
      path: "/add-issue",
      element: <AddIssue />,
    },
    {
      path: "/view-issues",
      element: <ViewIssues />,
    },
    {
      path: "/aboutIssues",
      element: <AboutIssues />,
    },
    {
      path: "/codetab",
      element: <CodeTab />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/home",
      element: <Dashboard />,
    },
    {
      path: "/pmDashboard",
      element: <PmDashboard />,
    },
    {
      path: "/empDashboard",
      element: <EmpDashboard />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

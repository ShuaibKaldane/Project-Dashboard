import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';
import ProjectRoutes from './Routes';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEmp, setIsEmp] = useState(false);
  const [isPm, setIsPm] = useState(false);

  // Check authentication and role on page load
  useEffect(() => {
    const userIdFromStorage = localStorage.getItem('userId');
    if (userIdFromStorage) {
      setIsAuthenticated(true);
      
      if (userIdFromStorage === 'admin') {
        setIsAdmin(true); // Set admin state if user is admin
      } else if (userIdFromStorage === 'pm') {
        setIsPm(true); // Set pm state if user is pm
      } else if (userIdFromStorage === 'emp') {
        setIsEmp(true); // Set employee state if user is employee
      }
    }
  }, []); // Empty dependency array to run only once when the component mounts
  
  // Timer to hide the welcome screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App">
      {showWelcome ? (
        <WelcomeScreen />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} isAdmin={isAdmin} isPm={isPm} isEmp={isEmp} />
          <ProjectRoutes />
          <Footer />
        </>
      )}
    </div>
  );
};

const WelcomeScreen = () => (
  <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary text-white">
    <h1>Welcome to DevPlatform!</h1>
  </div>
);

const Header = ({ isAuthenticated, isAdmin, isPm, isEmp }) => {
  const [showSignUpOptions, setShowSignUpOptions] = useState(false);

  const toggleSignUpOptions = () => {
    setShowSignUpOptions(!showSignUpOptions);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>DevPlatform</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'white' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: 'white' }}>About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us" style={{ color: 'white' }}>Contact us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ color: 'white' }}>Log Out</Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn btn-outline-primary dropdown-toggle"
                onClick={toggleSignUpOptions} style={{ color: 'white' }}
              >
                Sign Up
              </button>
              {showSignUpOptions && (
                <div className="dropdown-menu show">
                  <Link className="dropdown-item" to="/signup">Admin</Link>
                  <Link className="dropdown-item" to="/signup">Employee</Link>
                  <Link className="dropdown-item" to="/signup">Corporate</Link>
                </div>
              )}
            </li>
            {/* Conditional rendering based on roles */}
            <li className="nav-item">
              {isAdmin ? (
                <Link className="nav-link" to="/home" style={{ color: 'white' }}>Admin Dashboard</Link>
              ) : isPm ? (
                <Link className="nav-link" to="/pmDashboard" style={{ color: 'white' }}>PM Dashboard</Link>
              ) : isEmp ? (
                <Link className="nav-link" to="/empDashboard" style={{ color: 'white' }}>Employee Dashboard</Link>
              ) : (
                <Link className="nav-link" to="/auth" style={{ color: 'white' }}>Sign In</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section className="hero text-center bg-light py-5">
    <div className="container">
      <h1 className="display-4">Build. Collaborate. Deliver.</h1>
      <p className="lead">Your one-stop platform for seamless software development.</p>
      <button className="btn btn-primary btn-lg">Get Started</button>
    </div>
  </section>
);

const Features = () => (
  <section className="py-5">
    <div className="container text-center">
      <h2 className="mb-4">Our Features</h2>
      <div className="row">
        <Feature
          title="Collaborative Workspace"
          description="Work together with your team in real-time."
        />
        <Feature
          title="Integrated Tools"
          description="Access version control, testing, and deployment tools all in one place."
        />
        <Feature
          title="Friendly User Interface"
          description="Collaborative Interface for users for a great experience."
        />
      </div>
    </div>
  </section>
);

const Feature = ({ title, description }) => (
  <div className="col-md-4 mb-3">
    <div className="card h-100">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <section className="text-center bg-primary text-white py-5">
    <div className="container">
      <h2 className="mb-4">Ready to Get Started?</h2>
      <button className="btn btn-light btn-lg">Join Now</button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <p>© 2024 DevPlatform.</p>
  </footer>
);

export default App;

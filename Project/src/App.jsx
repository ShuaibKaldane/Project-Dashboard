import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProjectRoutes from './Routes';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const authState = localStorage.getItem('authenticated') === 'true';
    console.log(authState)
    const role = localStorage.getItem('role');
    setIsAuthenticated(authState);
    setUserRole(role);

    if (authState && role) {
      if (role === 'admin') {
        navigate('/home');
      } else if (role === 'product-manager') {
        navigate('/pmDashboard');
      } else if (role === 'employee') {
        navigate('/empDashboard');
      }
    }
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/auth');
  };

  return (
    <div className="App">
      {showWelcome ? (
        <WelcomeScreen />
      ) : (
        <>
          <Header
            isAuthenticated={isAuthenticated}
            userRole={userRole}
            onLogout={handleLogout}
          />
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

const Header = ({ isAuthenticated, userRole, onLogout }) => {
  const [showSignUpOptions, setShowSignUpOptions] = useState(false);

  const toggleSignUpOptions = () => {
    setShowSignUpOptions(!showSignUpOptions);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>
          DevPlatform
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: 'white' }}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us" style={{ color: 'white' }}>
                Contact us
              </Link>
            </li>

                <li className="nav-item">
                  <button
                    className="btn nav-link"
                    onClick={onLogout}
                    style={{ color: 'white' }}
                  >
                    Log Out
                  </button>
                </li>
          
          
             
                <li className="nav-item">
                  <Link className="nav-link" to="/auth" style={{ color: 'white' }}>
                    Sign In
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-outline-primary dropdown-toggle"
                    onClick={toggleSignUpOptions}
                    aria-expanded={showSignUpOptions}
                    style={{ color: 'white' }}
                  >
                    Sign Up
                  </button>
                  {showSignUpOptions && (
                    <div className="dropdown-menu show">
                      <Link className="dropdown-item" to="/signup?role=admin">
                        Admin
                      </Link>
                      <Link className="dropdown-item" to="/signup?role=employee">
                        Employee
                      </Link>
                      <Link className="dropdown-item" to="/signup?role=corporate">
                        Corporate
                      </Link>
                    </div>
                  )}
                </li>
          
           
          </ul>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <p>© 2024 DevPlatform.</p>
  </footer>
);

export default App;

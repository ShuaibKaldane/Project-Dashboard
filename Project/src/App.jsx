import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProjectRoutes from './Routes';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEmp, setIsEmp] = useState(false);
  const [isPm, setIsPm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
  
    if (token && role) {
      setIsAuthenticated(true);
  
      if (role === 'admin') {
        setIsAdmin(true);
        navigate('/home'); 
      } else if (role === 'product-manager') {
        setIsPm(true);
        navigate('/pmDashboard'); 
      } else if (role === 'employee') {
        setIsEmp(true);
        navigate('/empDashboard');
      }
    }
  }, []);  


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
          <Header
            isAuthenticated={isAuthenticated}
            isAdmin={isAdmin}
            isPm={isPm}
            isEmp={isEmp}
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

const Header = ({ isAuthenticated }) => {
  const [showSignUpOptions, setShowSignUpOptions] = useState(false);
  const navigate = useNavigate();

  const toggleSignUpOptions = () => {
    setShowSignUpOptions(!showSignUpOptions);
  };

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    navigate('/auth'); 
  };

  console.log(isAuthenticated)

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
            {isAuthenticated ? (
              <li className="nav-item">
                <button
                  className="btn nav-link"
                  onClick={handleLogout}
                  style={{ color: 'white' }}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <>
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
              </>
            )}
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

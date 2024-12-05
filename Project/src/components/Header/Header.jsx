import React from "react";
 
const Header = ({ isAuthenticated }) => { // Accept isAuthenticated as prop
    const [showSignUpOptions, setShowSignUpOptions] = useState(false);
  
    const toggleSignUpOptions = () => {
      setShowSignUpOptions(!showSignUpOptions);
    };
  
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DevPlatform</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Log in</Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-outline-primary dropdown-toggle"
                  onClick={toggleSignUpOptions}
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
              {/* If authenticated, show "Dashboard" link; otherwise, show "Sign In" link */}
              <li className="nav-item">
                {isAuthenticated ? (
                  <Link className="nav-link" to="/home">Dashboard</Link> // Redirect to dashboard if signed in
                ) : (
                  <Link className="nav-link" to="/auth">Sign In</Link> // Redirect to sign-in page if not signed in
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  };
export default Header;

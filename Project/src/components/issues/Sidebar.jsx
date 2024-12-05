import React from 'react';
import { NavLink } from 'react-router-dom'; // For navigation links
import 'bootstrap/dist/css/bootstrap.min.css'; // For styling

const Sidebar = () => {
  return (
    // Navbar at the top of the page
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <div className="container-fluid">
        {/* Brand name linked to the home page */}
        <NavLink to="/" className="navbar-brand text-white">
          Issue Dashboard
        </NavLink>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Link to the About Issues page */}
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-white" activeClassName="active">
                About Issues
              </NavLink>
            </li>
            {/* Link to the Add Issue page */}
            <li className="nav-item">
              <NavLink to="/add" className="nav-link text-white" activeClassName="active">
                Add Issue
              </NavLink>
            </li>
            {/* Link to the View Issues page */}
            <li className="nav-item">
              <NavLink to="/view" className="nav-link text-white" activeClassName="active">
                View Issues
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
};

export default Sidebar;

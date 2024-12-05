import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import { BsPeopleFill, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { MdStorage } from 'react-icons/md';
import '../../App.css';

function Sidebar({ openSidebarToggle, OpenSidebar, setShowWelcome }) {
  const handleNavigation = () => {
    setShowWelcome(false); // Hide the welcome screen when navigating
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsPeopleFill className="icon_header" /> Dev
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/home" >
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/aboutIssues" >
            <BsFillArchiveFill className="icon" /> Issues
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" >
            <BsFillGrid3X3GapFill className="icon" /> Projects
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" >
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" >
            <MdStorage className="icon" /> Disk Space
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" >
            <BsMenuButtonWideFill className="icon" /> Access Level
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="#" onClick={handleNavigation}>
            <BsFillGearFill className="icon" /> Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

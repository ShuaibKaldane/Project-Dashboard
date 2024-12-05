import React, { useState } from 'react';
import Header from '../user/Header';
import Sidebar from '../user/Sidebar';
import './issues.css'

const AboutIssues = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      {/* Header with Sidebar Toggle */}
      <Header OpenSidebar={OpenSidebar} />

      {/* Sidebar */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      {/* Main Content Area */}
      <div className="content">
        <div className="container my-5">
          {/* Header section with a title and brief description */}
          <div className="text-center mb-5">
            <h1 className="text-primary">Welcome to the Issues Dashboard</h1>
            <p className="text-muted">Your one-stop solution for managing project issues effectively.</p>
          </div>

          {/* Card section for detailed information */}
          <div className="card shadow border-0">
            <div className="card-body p-5">
              {/* Section title */}
              <h4 className="card-title text-secondary mb-4">Efficient Issue Management</h4>

              {/* Description about the platform */}
              <p className="card-text">
                This platform is designed to help you track and manage project issues seamlessly. Whether you're handling a small project or a large-scale application, our dashboard ensures smooth workflows and efficient issue resolution.
              </p>

              {/* Key features of the platform */}
              <h5 className="text-primary mt-4">Key Features:</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  {/* Feature 1: Adding new issues */}
                  <i className="bi bi-plus-circle text-success me-2"></i>
                  <strong>Add new issues:</strong> Assign them to relevant team members effortlessly.
                </li>

                {/* Navigation links side by side */}
                <div className="d-flex justify-content-start mb-3">
                  <ul className="list-unstyled d-flex">
                    <li className="me-4">
                      <a href="/add-issue" className="btn btn-primary">Add Issue</a>
                    </li>
                    <li>
                      <a href="/view-issue" className="btn btn-secondary">View Issue</a>
                    </li>
                  </ul>
                </div>

                <li className="mb-3">
                  {/* Feature 2: Viewing issues */}
                  <i className="bi bi-eye text-info me-2"></i>
                  <strong>View all issues:</strong> Gain detailed insights into their progress.
                </li>
                <li className="mb-3">
                  {/* Feature 3: Tracking issue status and priority */}
                  <i className="bi bi-arrow-repeat text-warning me-2"></i>
                  <strong>Track status and priority:</strong> Keep issues organized for faster resolution.
                </li>
              </ul>

              {/* Closing note */}
              <p>
                Stay organized, improve communication, and ensure timely resolution of project issues with our intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIssues;

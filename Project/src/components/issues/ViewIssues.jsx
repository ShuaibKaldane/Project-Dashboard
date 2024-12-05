import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewIssues = () => {
  // Sample issues data
  const sampleIssues = [
    {
      id: 1,
      title: 'Bug in Login Page',
      projectName: 'Website Redesign',
      assignee: 'Vibhav',
      status: 'Open',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Add Dark Mode',
      projectName: 'UI Improvements',
      assignee: 'Suyash',
      status: 'Closed',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Database Optimization',
      projectName: 'Backend Upgrade',
      assignee: 'Nikhil',
      status: 'Open',
      priority: 'Low',
    },
  ];

  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="text-center mb-4">
        <h1 className="text-primary">View Issues</h1>
        <p className="text-muted">
          A comprehensive overview of all issues in the project. Track the progress and priorities at a glance.
        </p>
      </div>

      {/* Table Layout to display issues */}
      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          {/* Table Header */}
          <thead className="table-primary">
            <tr>
              <th scope="col" className="px-4 py-3">#</th>
              <th scope="col" className="px-4 py-3">Title</th>
              <th scope="col" className="px-4 py-3">Project</th>
              <th scope="col" className="px-4 py-3">Assignee</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">Priority</th>
            </tr>
          </thead>
          <tbody>
            {/* Iterate through the issues and display each one */}
            {sampleIssues.map((issue) => (
              <tr key={issue.id} className="align-middle">
                <th scope="row" className="px-4 py-3">{issue.id}</th>
                <td className="px-4 py-3">{issue.title}</td>
                <td className="px-4 py-3">{issue.projectName}</td>
                <td className="px-4 py-3">{issue.assignee}</td>
                <td className="px-4 py-3">
                  {/* Badge for the issue status (Open or Closed) */}
                  <span
                    className={`badge ${issue.status === 'Open' ? 'bg-success' : 'bg-danger'}`}
                  >
                    {issue.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {/* Badge for the issue priority (High, Medium, Low) */}
                  <span
                    className={`badge ${
                      issue.priority === 'High'
                        ? 'bg-danger'
                        : issue.priority === 'Medium'
                        ? 'bg-warning'
                        : 'bg-success'
                    }`}
                  >
                    {issue.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewIssues;

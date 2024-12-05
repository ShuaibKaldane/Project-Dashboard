import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddIssue = () => {
  // State to store the issue details
  const [issue, setIssue] = useState({
    name: '',
    projectName: '',
    assignee: '',
    status: 'Open',
    priority: 'Low',
    description: '',
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssue({ ...issue, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Issue Added:', issue); // Log the issue details to the console
    alert('Issue added successfully!'); // Show success message
    setIssue({ // Reset the form fields after submission
      name: '',
      projectName: '',
      assignee: '',
      status: 'Open',
      priority: 'Low',
      description: '',
    });
  };

  return (
    <div className="container my-5">
      {/* Welcome message */}
      <div className="text-center mb-4">
        <h1 className="text-primary">Add New Issue</h1>
        <p className="text-muted">Log an issue for your project by providing the details below.</p>
      </div>

      {/* Form to add issue */}
      <form onSubmit={handleSubmit} className="row g-3 p-4 shadow-lg rounded bg-white">
        {/* Issue name field */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label fw-bold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control border-primary"
            value={issue.name}
            onChange={handleChange}
            placeholder="Enter the issue name"
            required
          />
        </div>

        {/* Project name field */}
        <div className="col-md-6">
          <label htmlFor="projectName" className="form-label fw-bold">Project Name</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="form-control border-primary"
            value={issue.projectName}
            onChange={handleChange}
            placeholder="Enter the project name"
            required
          />
        </div>

        {/* Assignee field */}
        <div className="col-md-6">
          <label htmlFor="assignee" className="form-label fw-bold">Assignee</label>
          <input
            type="text"
            id="assignee"
            name="assignee"
            className="form-control border-primary"
            value={issue.assignee}
            onChange={handleChange}
            placeholder="Who is responsible?"
            required
          />
        </div>

        {/* Status dropdown */}
        <div className="col-md-6">
          <label htmlFor="status" className="form-label fw-bold">Status</label>
          <select
            id="status"
            name="status"
            className="form-select border-primary"
            value={issue.status}
            onChange={handleChange}
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Priority dropdown */}
        <div className="col-md-6">
          <label htmlFor="priority" className="form-label fw-bold">Priority</label>
          <select
            id="priority"
            name="priority"
            className="form-select border-primary"
            value={issue.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Description field */}
        <div className="col-12">
          <label htmlFor="description" className="form-label fw-bold">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control border-primary"
            rows="4"
            value={issue.description}
            onChange={handleChange}
            placeholder="Provide a detailed description of the issue"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5 py-2">
            Submit Issue
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddIssue;

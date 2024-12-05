import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Use Link for navigation

import "./PmDashboard.css";

function PmDashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [newTask, setNewTask] = useState({ name: "", category: "", date: "" });
  const [expandedProject, setExpandedProject] = useState(null); // State to track expanded project
  const [expandedCode, setExpandedCode] = useState(null); // State to track expanded code

  const addTask = () => {
    if (newTask.name && newTask.category && newTask.date) {
      const newTaskObj = {
        id: tasks.length + 1,
        name: newTask.name,
        category: newTask.category,
        date: newTask.date,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask({ name: "", category: "", date: "" });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setNewTask(taskToEdit);
      deleteTask(id);
    }
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.category === filter);

  const handleProjectClick = (project) => {
    setExpandedProject(expandedProject === project ? null : project); // Toggle project expansion
  };

  const handleCodeClick = (code) => {
    setExpandedCode(expandedCode === code ? null : code); // Toggle code expansion
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Project Manager</h2>
        <ul>
          <li onClick={() => setFilter("All")}>View All Tasks</li>
          <li onClick={() => setFilter("Development")}>Development Tasks</li>
          <li onClick={() => setFilter("Design")}>Design Tasks</li>
          
          <li onClick={() => handleProjectClick("Project1")}>Cdac SpringBoot Project</li>
          {expandedProject === "Project1" && (
            <ul>
              <li onClick={() => handleCodeClick("Code1")}>Code 1</li>
              {expandedCode === "Code1" && <ul><li>Details about Code 1</li></ul>}
              <li onClick={() => handleCodeClick("Code2")}>Code 2</li>
              {expandedCode === "Code2" && <ul><li>Details about Code 2</li></ul>}
              
            </ul>
          )}

          <li onClick={() => handleProjectClick("Project2")}>Cdac .Net Project</li>
          {expandedProject === "Project2" && (
            <ul>
              <li onClick={() => handleCodeClick("Code1")}>Code 1</li>
              {expandedCode === "Code1" && <ul><li>Details about Code 1</li></ul>}
              <li onClick={() => handleCodeClick("Code2")}>Code 2</li>
              {expandedCode === "Code2" && <ul><li><Link to="/codetab" > ...Code
          </Link>
          </li>
          <li><Link to="/aboutIssues" > ...Issues
          </Link>
          </li>
          </ul>}
          <li onClick={() => handleCodeClick("Code3")}>Code 3</li>
              {expandedCode === "Code3" && <ul><li><Link to="/aboutIssues" > ...Issues
          </Link>
          </li>
          </ul>}
            </ul>
          )}

        </ul>
      </div>

      <div className="main-content">
        <h1>Task Dashboard</h1>

        <div className="filter-buttons">
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Development")}>Development</button>
          <button onClick={() => setFilter("Design")}>Design</button>
        </div>

        <div className="task-input">
          <input
            type="text"
            placeholder="Task Name"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Category"
            value={newTask.category}
            onChange={(e) =>
              setNewTask({ ...newTask, category: e.target.value })
            }
            className="input-field"
          />
          <input
            type="date"
            placeholder="Date"
            value={newTask.date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
            className="input-field"
          />
          <button onClick={addTask} className="add-button">
            Add Task
          </button>
        </div>

        <div className="task-container">
          {filteredTasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>
                <strong>Category:</strong> {task.category}
              </p>
              <p>
                <strong>Date:</strong> {task.date}
              </p>
              <button
                onClick={() => editTask(task.id)}
                className="edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PmDashboard;

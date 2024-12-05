import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>Contributors</li>
        <li>Community</li>
        <li>Commits</li>
        <li>Dependency Graph</li>
        <li>Network</li>
        <li>Forks</li>
        <li>Actions Performance Metrics</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

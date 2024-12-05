import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation between routes

const Sidebar = () => {
  return (
    <div
      style={{
        // Styling for the sidebar container
        width: '250px', // Set sidebar width
        height: '100vh', // Set height to fill the entire viewport
        backgroundColor: '#007bff', // Background color (blue in this case)
        color: 'white', // Text color
        paddingTop: '20px', // Padding from the top for proper spacing
      }}
    >
      {/* Header for the sidebar */}
      <h3 className="text-center text-white">Code Together</h3>

      {/* Navigation list */}
      <ul
        style={{
          listStyleType: 'none', // Remove default list styling
          padding: '0', // Remove padding from the list
          margin: '0', // Remove margin from the list
        }}
      >
        {/* Individual navigation items */}
        <li style={{ padding: '15px' }}>
          
            {/* Link to the "Code" page */}
            Code
          
        </li>
        <li style={{ padding: '15px' }}>
          
            {/* Link to the "Insights" page */}
            Insights
          
        </li>
        <li style={{ padding: '15px' }}>
          
            {/* Link to the "Actions" page */}
            Actions
          
        </li>
        <li style={{ padding: '15px' }}>
          
            {/* Link to the "Issues" page */}
            Issues
          
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

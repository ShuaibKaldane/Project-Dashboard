import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import CodePage from './CodePage';

function CodeTab() {
  return (
    
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar on the left */}
        <Sidebar />
        
        {/* Main content area */}
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff' }}>
          
            <CodePage />
          
        </div>
      </div>
    
  );
}

export default CodeTab;

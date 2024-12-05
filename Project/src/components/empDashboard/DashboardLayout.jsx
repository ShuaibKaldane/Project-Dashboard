import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Overview from './Overview';
import Footer from './Footer';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{ flex: '0 0 200px', backgroundColor: '#f4f4f4' }}>
          <Sidebar />
        </div>
        {/* Main Content */}
        <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
          <Overview />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

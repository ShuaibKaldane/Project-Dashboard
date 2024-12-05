import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import Footer from "./Footer";
import  "../../App.css";
const EmpDashboard = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Overview />
        </div>
      </div>
      
    </div>
  );
};



export default EmpDashboard;

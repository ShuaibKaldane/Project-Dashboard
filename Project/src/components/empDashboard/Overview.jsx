import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <h2>November 14, 2024 – November 21, 2024</h2>
      <div className="stats">
        <div className="stat">
          <p>0 Active pull requests</p>
        </div>
        <div className="stat">
          <p>0 Active issues</p>
        </div>
        <div className="stat">
          <p>0 Merged pull requests</p>
        </div>
        <div className="stat">
          <p>0 Open pull requests</p>
        </div>
        <div className="stat">
          <p>0 Closed issues</p>
        </div>
        <div className="stat">
          <p>0 New issues</p>
        </div>
      </div>
      <footer>
        <p>There hasn’t been any commit activity in the last week.</p>
      </footer>
    </div>
  );
};

export default Overview;

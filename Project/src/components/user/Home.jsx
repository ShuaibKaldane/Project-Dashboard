import React from 'react';
import { BsFillArchiveFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import UsageIndicator from './UsageIndicator'; // Ensure the path is correct
import '../../App.css'; // Ensure this path is correct

function Home() {
  const data = [
    { name: 'Project A', issue: 4000, solved: 2400, amt: 2400 },
    { name: 'Project B', issue: 3000, solved: 1398, amt: 2210 },
    { name: 'Project C', issue: 2000, solved: 1500, amt: 2290 },
    { name: 'Project D', issue: 2780, solved: 1000, amt: 2000 },
    { name: 'Project E', issue: 1890, solved: 600, amt: 2181 },
    { name: 'Project F', issue: 2390, solved: 1000, amt: 2500 },
    { name: 'Project G', issue: 3490, solved: 2000, amt: 2100 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Projects</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Disk Space</h3>
            <UsageIndicator />
          </div>
          <h1>12 GB</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Users</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Issues</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: 'white' }} />
            <Legend />
            <Bar dataKey="issue" fill="#8884d8" />
            <Bar dataKey="solved" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: 'white' }} />
            <Legend />
            <Line type="monotone" dataKey="solved" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="issue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;

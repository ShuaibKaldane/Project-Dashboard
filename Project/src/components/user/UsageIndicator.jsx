import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UsageIndicator = () => {
  const percentage = 50;

  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}% used`}
        styles={buildStyles({
          pathColor: 'red', 
          textColor: 'black', 
          trailColor: '#d6d6d6',
          textSize: '15px', 
        })}
      />
    </div>
  );
};

export default UsageIndicator;

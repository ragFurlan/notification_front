import React from 'react';

const LogHistory = ({ logs }) => {
  return (
    <div>
      <h2>Log History</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <strong>User ID: </strong>{log.UserID} &nbsp; &nbsp; 
            <strong>Category:</strong> {log.Category}&nbsp; &nbsp; 
            <strong>Message:</strong> {log.Message}&nbsp; &nbsp; 
            <strong>Type: </strong>{log.NotificationType}&nbsp; &nbsp; 
            <strong>Time:</strong> {log.Timestamp}&nbsp; &nbsp;   
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogHistory;
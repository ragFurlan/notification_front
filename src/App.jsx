import React, { useState, useEffect } from 'react';
import apiService from './services/api';
import NotificationForm from './components/NotificationForm';
import LogHistory from './components/LogHistory';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const fetchLogs = async () => {
    try {
      const logs = await apiService.getLogs();  
      console.log('logs:', logs);
      setLogs(logs);
    } catch (error) {
      console.log('Error fetching logs:', error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleSubmitNotification = async (category, message) => {
    if (!category || !message) {
      alert('Please fill in all fields');
      return;
    }   

    const notificationData = {
      category,
      message,
    };

    try {
      await apiService.addNotification(notificationData);
      fetchLogs(); // Fetch logs again to update the list
      // Clear form fields
      setCategory('');
      setMessage('');
    } catch (error) {
      console.log('Error submitting notification:', error);
    }
  };

  return (
    <div >
      <h1>Notification Test</h1>
      <NotificationForm
        categories={['Sports', 'Finance', 'Movies']}
        onSubmit={handleSubmitNotification}
        category={category}
        message={message}
        setCategory={setCategory}
        setMessage={setMessage}
      />
      <br/>
      <hr></hr>
      <LogHistory logs={logs} />
    </div>
  );
};

export default App;
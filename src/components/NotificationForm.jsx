import React, { useState } from 'react';

const NotificationForm = ({ categories, onSubmit }) => {
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !message) {
      alert('Please fill in all fields');
      return;
    }

    onSubmit(category, message);

    // Clear form fields
    setCategory('');
    setMessage('');
  };

  return (
    <div>
      <h2>Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label data-testid="category">Category:</label> &nbsp; &nbsp;
          <select data-testid="categorySelect"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div> 
      
< br />     
        <div>
          <label data-testid="message">Message:</label> &nbsp; &nbsp;
          <textarea
            data-testid="messageSelect" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        < br /> 
        <button data-testid="button" type="submit">Send Notification</button>
      </form>
    </div>
  );
};

export default NotificationForm;
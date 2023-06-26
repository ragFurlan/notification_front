import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import apiService from './services/api'


jest.mock('./services/api', () => ({
  getLogs: jest.fn(() => Promise.resolve([])),
  addNotification: jest.fn(() => Promise.resolve()),
}));

describe('App', () => {
  beforeEach(() => {
    const mockLogs = [
      { 
        ID: "3-Movies-E-Mail",
        UserID: "3",
        Message: "teste teste",
        Category: "Movies",
        NotificationType: "E-Mail",
        Timestamp: "2023-06-26T13:33:25.0989872-03:00" 
      },
    ];  
    
    apiService.getLogs.mockResolvedValue(mockLogs);
    render(<App />);
  });

  it('renders the app', () => {
  
    expect(screen.getByText('Notification Test')).toBeInTheDocument();
  });

  it('renders the notification form', () => {
    
    expect(screen.getByTestId('category')).toBeInTheDocument();
    expect(screen.getByTestId('message')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('submits a notification and fetches logs', async () => {   
  
    fireEvent.change(screen.getByTestId('categorySelect'), { target: { value: 'Sports' } });
    fireEvent.change(screen.getByTestId('messageSelect'), { target: { value: 'Test notification' } });
    
    fireEvent.click(screen.getByTestId('button'));   
   
    expect(screen.getByTestId('categorySelect')).toHaveValue('');
    expect(screen.getByTestId('messageSelect')).toHaveValue(''); 
   
  });
});
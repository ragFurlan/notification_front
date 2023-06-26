import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

const api = axios.create({
  baseURL: API_URL,
});

const apiService = {
  getLogs: async () => {
    try {
        const response = await api.get('/get');
        return response.data;
    } catch (error) {
        console.log('Error fetching logs:', error);
        throw error;
    }
  },

  addNotification: async (notificationData) => {
    try {
        const response = await api.post('/add', notificationData);
        return response.data;
    } catch (error) {
        console.log('Error submitting notification:', error);
        throw error;
    }
  },
};

export default apiService;
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://15.134.218.187', // Your live AWS EC2 backend
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;

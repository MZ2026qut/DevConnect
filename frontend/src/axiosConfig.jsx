import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '', // Leaving this blank means it automatically uses current EC2 IP address!
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;

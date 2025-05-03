import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v2', // or your deployed URL
  withCredentials: true, // important for cookies (auth)
});

export default instance;

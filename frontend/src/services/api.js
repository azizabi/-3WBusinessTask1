import axios from 'axios';

const API = axios.create({
  baseURL: 'https://3wbusinesstask1-1.onrender.com/api',
});

export default API;

import axios from 'axios';

// Base URL for all API requests
const API = axios.create({
  baseURL: 'https://multi-lvl-referral-system.onrender.com/api',
});

export default API;

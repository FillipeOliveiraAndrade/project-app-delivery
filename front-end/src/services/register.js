import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const register = async (endpoint, body) => api.post(endpoint, body);

export default register;

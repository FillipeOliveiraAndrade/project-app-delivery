import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const requestLogin = async (endpoint, body) => api.post(endpoint, body);

export default requestLogin;

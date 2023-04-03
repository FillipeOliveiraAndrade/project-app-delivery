import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const requestLogin = async (endpoint, body) => api.post(endpoint, body);

const requestProducts = async (endpoint) => api.get(endpoint);

export {
  requestLogin,
  requestProducts,
};

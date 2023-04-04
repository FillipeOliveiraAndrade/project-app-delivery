import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestLogin = async (endpoint, body) => api.post(endpoint, body);
export const requestData = async (endpoint) => api.get(endpoint);
export const requestProducts = async (endpoint) => api.get(endpoint);

export default api;

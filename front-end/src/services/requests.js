import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const requestLogin = async (endpoint, body) => api.post(endpoint, body);
const requestData = async (endpoint) => api.get(endpoint);
const requestProducts = async (endpoint) => api.get(endpoint);
const requestSales = async (endpoint, body) => api.post(endpoint, body);
const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default api;

export {
  requestData,
  requestLogin,
  requestProducts,
  requestSales,
  setToken,
};

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

const requestLogin = async (endpoint, body) => {
  const { token } = await api.post(endpoint, body);
  return token;
};

const requestRole = async (endpoint) => {
  const { role } = await api.get(endpoint);
  return role;
};

export {
  setToken,
  requestLogin,
  requestRole,
};

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

const requestRole = async (endpoint) => {
  const role = await api.get(endpoint);
  return role;
};

export {
  setToken,
  requestLogin,
  requestRole,
};

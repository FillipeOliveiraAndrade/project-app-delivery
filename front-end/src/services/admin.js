import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const register = async (endpoint, body, token) => api
  .post(endpoint, body, { headers: { authorization: token } });

export default register;

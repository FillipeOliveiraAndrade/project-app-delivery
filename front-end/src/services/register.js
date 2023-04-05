import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const register = async (endpoint, body) => api.post(endpoint, body);

export default register;

// Precisava alterar algo pra dar commit com as mudanças do arthur junto.
// Aproveitar e deixar um abraço aqui pra vcs. Bebam agua.

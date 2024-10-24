import axios from 'axios';

// Define any reusable API calls for backend or external APIs here

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchRecipes = async () => {
  const res = await API.get('/recipes');
  return res.data;
};

export const login = async (credentials) => {
  const res = await API.post('/users/login', credentials);
  return res.data;
};

export const register = async (user) => {
  const res = await API.post('/users/register', user);
  return res.data;
};

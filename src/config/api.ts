import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const api = axios.create({ baseURL });

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: handle error
    return Promise.reject(error);
  }
);

export default api;

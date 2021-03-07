import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: 'json',
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (typeof err.response === 'undefined') {
      return 'die';
    }
    return err.response;
  },
);

export default api;
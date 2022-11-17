import axios from 'axios';

export const secureApi = axios.create({
  baseURL: '',
  timeout: 60 * 1000,
});
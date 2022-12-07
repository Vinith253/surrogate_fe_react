import axios from 'axios';
import { url } from '../utils/constants/url';

export const secureApi = axios.create({
  baseURL: url.baseUrl,
  timeout: 60 * 1000,
});

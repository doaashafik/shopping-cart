import axios from 'axios';
import { SuccessHandler, ErrorHandler } from '../Interceptors';

export const Instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
Instance.interceptors.response.use(
    response => SuccessHandler(response),
    error => ErrorHandler(error)
  );
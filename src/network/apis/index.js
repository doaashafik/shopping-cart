import axios from 'axios';
import { SuccessHandler, ErrorHandler } from '../Interceptors';

export const Instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?',
    params: {
        key: 'AIzaSyB9HREZ2R-gIbdDSh0arzkvbFmDqS6YLSc'
    }
});
Instance.interceptors.response.use(
    response => SuccessHandler(response),
    error => ErrorHandler(error)
  );
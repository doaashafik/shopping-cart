import axios from 'axios';
import { SuccessHandler, ErrorHandler } from '../Interceptors';
import { BASE_URL, GOOGLE_API_KEY} from '../../utils/Constants'
export const Instance = axios.create({
    baseURL: BASE_URL,
    params: {
        key: GOOGLE_API_KEY
    }
});
Instance.interceptors.response.use(
    response => SuccessHandler(response),
    error => ErrorHandler(error)
  );
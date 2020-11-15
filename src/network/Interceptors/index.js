import { Instance } from '../apis'

export const ErrorHandler = (response) => {
 /* Toastify For Error tosatify.error() */
 return {
    success: false,
    data: response
}
}

export const SuccessHandler = (response) => {
  /* Toastify For Success tosatify.success() */
   return {
       success: true,
       data: response
   }
}
 
Instance.interceptors.response.use(
    response => SuccessHandler(response),
    error => ErrorHandler(error)
  );

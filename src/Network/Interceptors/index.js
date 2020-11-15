import { Instance } from '../apis/Instance'

export const ErrorHandler = (response) => {
 /* Toastify For Error tosatify.error() */
 console.log('error', response)
}

export const SuccessHandler = (response) => {
  /* Toastify For Success tosatify.success() */
  console.log('success', response)
}
 
Instance.interceptors.response.use(
    response => SuccessHandler(response),
    error => ErrorHandler(error)
  );

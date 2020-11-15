import { Instance } from '../apis'

export const ErrorHandler = (response) => {
 /* Toastify For Error tosatify.error() */
 return {
    success: false,
    data: response
}
}

export const SuccessHandler = ({ data }) => {
  /* Toastify For Success tosatify.success() */
   return {
       success: true,
       data
   }
}
 

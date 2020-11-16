import store from '../../store/index'
import { isLoading } from '../../store/Loading/actions'
export const ErrorHandler = (response) => {
  store.dispatch(isLoading(false))
 return response
}

export const SuccessHandler = (response) => {
   store.dispatch(isLoading(false))
  return response
}
export const RequestHandler = (request) => {
  store.dispatch(isLoading(true))
 return request
}

import { combineReducers } from 'redux'
import { productReducer } from './Product/reducer';
import { loadingReducer } from './Loading/reducer'
export default combineReducers({
    products: productReducer,
    isLoading: loadingReducer
})
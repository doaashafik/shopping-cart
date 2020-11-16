import { combineReducers } from 'redux'
import { bookReducer } from './Book/reducer';
import { loadingReducer } from './Loading/reducer'
export default combineReducers({
    books: bookReducer,
    isLoading: loadingReducer
})
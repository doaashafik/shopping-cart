import { combineReducers } from 'redux'
import { bookReducer } from './Book/reducer'
export default combineReducers({
    books: bookReducer
})
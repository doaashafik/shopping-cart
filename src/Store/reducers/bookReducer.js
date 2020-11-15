const { BOOK_SEARCH, IS_LOADING } = require("../../routes/types");

const INIT_STATE = [];

export const bookReducer = (state= INIT_STATE, action)  => {
    switch(action.type) {
        case BOOK_SEARCH:
        return state = action.payload;
        case IS_LOADING: 
        return { 
            ...state,
            isLoading: action.payload
        }
        default: 
       return state
    }
}
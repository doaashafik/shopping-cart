const { BOOK_SEARCH_RECIEVE, ERROR_REQUESTS, IS_LOADING } = require("./types");

const INIT_STATE = {};

export const bookReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BOOK_SEARCH_RECIEVE:
      return (state = { ...state, data: action.payload });
    case ERROR_REQUESTS:
      return { ...state, error: true };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

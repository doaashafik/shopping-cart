const { BOOK_SEARCH_ASYNC, IS_LOADING } = require("../types");

const INIT_STATE = {};

export const bookReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BOOK_SEARCH_ASYNC:
      return (state = { ...state, data: action.payload });
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

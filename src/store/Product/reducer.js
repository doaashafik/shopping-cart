const { ALL_PRODUCTS_RECIEVE, ERROR_REQUESTS } = require("./types");

const INIT_STATE = {};

export const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_RECIEVE:
      return (state = { ...state, data: action.payload });
    case ERROR_REQUESTS:
      return { ...state, error: true };
    default:
      return state;
  }
};

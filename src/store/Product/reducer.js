import * as actions from "../types";

const INIT_STATE = {};

export const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actions.ALL_PRODUCTS_RECIEVE:
      return (state = { ...state, data: action.payload });
    case actions.ERROR_REQUESTS:
      return { ...state, error: true };
    default:
      return state;
  }
};

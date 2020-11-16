const { IS_LOADING_RECIEVE } = require("./types");

const INIT_STATE =  false;

export const loadingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case IS_LOADING_RECIEVE:
      return state =  action.payload
    default:
      return state;
  }
};

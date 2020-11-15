import { createStore } from "redux";
import RootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools();
export const store = createStore(RootReducer, composedEnhancer);
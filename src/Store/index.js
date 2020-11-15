import { createStore,  applyMiddleware } from "redux";
import RootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
const composedEnhancer = composeWithDevTools();
const saga = createSagaMiddleware();
composedEnhancer(applyMiddleware(saga));
export const store = createStore(RootReducer, composedEnhancer);
import { createStore,  applyMiddleware } from "redux";
import RootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga/index";
const saga = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(saga));

 const store = createStore(RootReducer, composedEnhancer);
saga.run(rootSaga);
export default store;
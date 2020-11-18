import { createStore,  applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['products', 'cart'],
    blacklist: ['isLoading']
  }
  
const persistedReducer = persistReducer(persistConfig, RootReducer)
  

const saga = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(saga));

const store = createStore(persistedReducer, composedEnhancer);
export const persistor = persistStore(store);
saga.run(rootSaga);
export default store;
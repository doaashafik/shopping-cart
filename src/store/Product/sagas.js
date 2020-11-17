import { put, takeEvery, call } from "redux-saga/effects";
import {  ALL_PRODUCTS } from "../types";
import { allProductsRequest } from "../../network/apis/Requests/Product";

function* handleAllProducts(query) {
  try {
    const result = yield call(allProductsRequest, query.payload);
    yield put(allProductsRecieved(result.data));
  }
  catch {
    yield put(allProductsError());
  }  
}
export function* ProductSagaWatch() {
  yield takeEvery(ALL_PRODUCTS, handleAllProducts);
}

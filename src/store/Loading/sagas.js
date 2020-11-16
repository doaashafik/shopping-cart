import { put, takeEvery } from "redux-saga/effects";
import {  IS_LOADING } from "./types";
import { isLoading } from './actions'
function* handleLoading(loading) {
    yield put(isLoading(loading));
}
export function* IsLoadingWatch() {
  yield takeEvery(IS_LOADING, handleLoading);
}

import { put, takeEvery } from "redux-saga/effects";
import {  IS_LOADING } from "./types";
import { isLoadingRecieve } from './actions'
function* handleLoading(loading) {
    yield put(isLoadingRecieve(loading.payload));
}
export function* IsLoadingWatch() {
  yield takeEvery(IS_LOADING, handleLoading);
}

import { put, takeEvery, call } from "redux-saga/effects";
import {  BOOK_SEARCH } from "../types";
import { BookSearchAsync, isLoading } from "../actions/book";
import { searchRequest } from "../../network/apis/Requests/Books";
function* handleBookSearch(query) {
  yield put(isLoading(true));
  const result = yield call(searchRequest, query);
  if (result && result.success) {
    yield put(BookSearchAsync(result.data));
  }
  yield put(isLoading(false));
}
export function* watch() {
  yield takeEvery(BOOK_SEARCH, handleBookSearch);
}

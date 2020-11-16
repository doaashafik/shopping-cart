import { put, takeEvery, call } from "redux-saga/effects";
import {  BOOK_SEARCH } from "../types";
import { BookSearchAsync, isLoading, BookSearchError } from "../actions/book";
import { searchRequest } from "../../network/apis/Requests/Books";
function* handleBookSearch(query) {
  yield put(isLoading(true));
  const result = yield call(searchRequest, query.payload);
  if (!result.success)  yield put(BookSearchError());
  else {
    yield put(BookSearchAsync(result.data));
  }
  yield put(isLoading(false));
}
export function* watch() {
  yield takeEvery(BOOK_SEARCH, handleBookSearch);
}

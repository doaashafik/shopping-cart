import { put, takeEvery, call } from "redux-saga/effects";
import {  BOOK_SEARCH } from "./types";
import { BookSearchAsync, BookSearchError } from "./actions";
import { searchRequest } from "../../network/apis/Requests/Books";

function* handleBookSearch(query) {
  try {
    const result = yield call(searchRequest, query.payload);
    yield put(BookSearchAsync(result.data));
  }
  catch {
    yield put(BookSearchError());
  }  
}
export function* BookSagaWatch() {
  yield takeEvery(BOOK_SEARCH, handleBookSearch);
}

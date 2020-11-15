import { BOOK_SEARCH, IS_LOADING, BOOK_SEARCH_ASYNC } from "../types";

export const BookSearch = (payload) => ({
  type: BOOK_SEARCH,
  payload,
});
export const BookSearchAsync = (payload) => ({
  type: BOOK_SEARCH_ASYNC,
  payload,
});

export const isLoading = (payload) => ({
  type: IS_LOADING,
   payload
});

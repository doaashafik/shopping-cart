import { BOOK_SEARCH, IS_LOADING,ERROR_REQUESTS, BOOK_SEARCH_ASYNC } from "../types";

export const BookSearch = (payload) => ({
  type: BOOK_SEARCH,
  payload,
});
export const BookSearchAsync = (payload) => ({
  type: BOOK_SEARCH_ASYNC,
  payload,
});

export const BookSearchError = () => ({
  type: ERROR_REQUESTS
});
export const isLoading = (payload) => ({
  type: IS_LOADING,
   payload
});

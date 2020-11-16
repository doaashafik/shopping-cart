import { BOOK_SEARCH,ERROR_REQUESTS, BOOK_SEARCH_RECIEVE } from "./types";

export const BookSearch = (payload) => ({
  type: BOOK_SEARCH,
  payload,
});
export const BookSearchAsync = (payload) => ({
  type: BOOK_SEARCH_RECIEVE,
  payload,
});

export const BookSearchError = () => ({
  type: ERROR_REQUESTS
});

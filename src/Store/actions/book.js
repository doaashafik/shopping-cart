import { BOOK_SEARCH, IS_LOADING } from "../../routes/types";

export const BookSearch = (payload) => ({
  type: BOOK_SEARCH,
  payload,
});

export const isLoading = (payload) => ({
  type: IS_LOADING,
   payload
});

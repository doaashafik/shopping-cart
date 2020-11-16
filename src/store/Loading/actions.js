import { IS_LOADING, IS_LOADING_RECIEVE } from "./types";


export const isLoading = (payload) => ({
  type: IS_LOADING,
   payload
});
export const isLoadingRecieve = (payload) => ({
  type: IS_LOADING_RECIEVE,
   payload
});

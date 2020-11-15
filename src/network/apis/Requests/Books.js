import { Instance } from '..'
export const bookSearch = (query) => Instance.get(`q=${query}`);
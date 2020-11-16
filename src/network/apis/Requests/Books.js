import { Instance } from '../index'
export const searchRequest = async (query) => Instance.get('/', {
    params: {
        q: `${JSON.stringify(query)}`
    }
});
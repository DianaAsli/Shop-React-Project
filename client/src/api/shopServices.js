import {
    requester
} from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/shop/products';

export default {
    async getAll() {
        const result = await requester('GET', baseUrl);
        return Object.values(result);
    },
    async getById(id) {
        const result = await requester('GET', `${baseUrl}/${id}`);
        return result;
    }
}
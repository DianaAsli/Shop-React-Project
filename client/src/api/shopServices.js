import { requester } from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/shop/products';

export default {
    getAll(){
        return requester('GET', baseUrl);

    }
}
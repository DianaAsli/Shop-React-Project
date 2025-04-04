import {
    useEffect,
    useState
} from "react";
import {
    requester
} from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/shop/products';

export const useProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            try {
                const response = await requester('GET', baseUrl);
                const result = Object.values(response);
                setAllProducts(result);
            } catch (error) {
                console.log('Error frtching all products', error);

            }
        }
        getAll();
    }, [])

    return allProducts;
}

export const useProduct = (productId) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!productId) return;

        const getOne = async () => {
            try {
                const result = await requester('GET', `${baseUrl}/${productId}`);
                setProduct(result);
            } catch (error) {
                console.log('Error fetching the product', error);

            }
        }
        getOne();
    }, [productId]);

    return product;
}

import React, { useEffect, useState } from 'react'
import {useProducts} from "../../api/shopServices";
import Title from '../UI/Title';
import ProductList from '../product/ProductList';

export default function LatestProducts() {
    const products = useProducts();
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        const latestProducts = products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
        setLatestProducts(latestProducts);
    }, [products]);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={'New'} text2={'Arrivals'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta quo unde error doloribus! Est, adipisci. Voluptate, obcaecati perferendis officiis eum, accusamus rem error soluta rerum officia beatae, nulla deserunt.
                </p>
            </div>

            <ProductList products={latestProducts}/>

        </div>
    )
}

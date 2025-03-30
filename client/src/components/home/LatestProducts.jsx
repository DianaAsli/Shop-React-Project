import React, { useEffect, useState } from 'react'
import useProducts from '../../hooks/useProducts'

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
                <Title text1={'Latest'} text2={'Collection'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta quo unde error doloribus! Est, adipisci. Voluptate, obcaecati perferendis officiis eum, accusamus rem error soluta rerum officia beatae, nulla deserunt.
                </p>
            </div>

            {/* Rendering products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.map((product) => {
                    return <ProductItem key={product._id} id={product._id} image={product.imageUrl} name={product.productName} price={product.price} />
                })}
            </div>

        </div>
    )
}

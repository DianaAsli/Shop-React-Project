import React, { useEffect, useState } from 'react'
import ProductItem from '../product/ProductItem'
import Title from '../Title'
import useProducts from '../../hooks/useProducts'
import ProductList from '../product/ProductList';

export default function BestSellers() {
    const products = useProducts();
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const bestSellers = products.filter(product => product.bestseller === true);
        setBestSellers(bestSellers.slice(0, 5));
    },[products])
    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={'Trending'} text2={'Now'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ullam nihil quos rem numquam? Hic molestiae doloremque enim quidem eos reprehenderit suscipit maiores fugiat, excepturi voluptatum deleniti est necessitatibus officia.</p>
            </div>

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSellers.map((product => {
                        return <ProductItem key={product._id} id={product._id} image={product.imageUrl} name={product.productName} price={product.price} />
                    }))
                }
            </div> */}
            <ProductList products={bestSellers}/>

        </div>
    )
}

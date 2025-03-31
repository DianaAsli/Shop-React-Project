import { useParams } from "react-router"
import useProducts from "../../hooks/useProducts";
import { useEffect, useState } from "react";
import Title from "../UI/Title";
import ProductList from "../product/ProductList";

const categoryFilter = {
    accessories: ['Watches', 'Sunglasses', 'Scrunchies', 'Hats', 'Bags'],
    default: ['Gold', 'Rose Gold', 'Silver', 'Pearls', 'Diamonds']
}


export default function Category() {
    const { category } = useParams();
    const products = useProducts();

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const filter = category === 'accessories' ? categoryFilter.accessories : categoryFilter.default;
    const filteredProductsByCategory = products.filter(product => product.category.toLowerCase() === category)

    useEffect(() => {
        setFilteredProducts(filteredProductsByCategory);
    }, [products])

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

            <div className="flex-1">
                <div className=" flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={'All'} text2={`${category.toUpperCase()}`} />

                </div>
                <ProductList products={filteredProducts} />
            </div>
        </div>
    )
}

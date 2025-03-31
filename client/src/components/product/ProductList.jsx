import ProductItem from "./ProductItem"

export default function ProductList({products}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {products.map((product) => {
                return <ProductItem key={product._id} id={product._id} image={product.imageUrl} name={product.productName} price={product.price} />
            })}
        </div>
    )
}

import { useEffect, useState } from "react";
import { useParams } from "react-router"
import shopServices from "../../api/shopServices";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    shopServices.getById(productId)
      .then(result => {
        setProduct(result);
      })
      .catch(error => {
        console.log('Error fetching the prorduct', error);
      })
  }, [productId])

  return (
    <div>{console.log(product)
    }</div>

  )
}

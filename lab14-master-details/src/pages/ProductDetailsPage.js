import React, { useState, useContext} from 'react';
import { useParams } from 'react-router-dom'
import ProductContext from '../ProductContext';
import { useEffect } from 'react';


export default function ProductDetailsPage() {
    // const { productId} = useParams();
    const params = useParams();
    const productId = params.productId;
    const [product, setProduct] = useState({});
    const context = useContext(ProductContext);

    useEffect( ()=>{
        const fetchProduct = ()=> {
            let tempProduct = context.getProductByID(parseInt(productId));
            setProduct(tempProduct);
        }
        fetchProduct();
    }, [productId])

    return (
        <React.Fragment>
            <h1>Product Details</h1>
            <ul>
                <li>ID: {product.id}</li>
                <li>Name: {product.product_name}</li>
                <li>Cost: {product.cost }</li>
            </ul>

        </React.Fragment>
    )
}
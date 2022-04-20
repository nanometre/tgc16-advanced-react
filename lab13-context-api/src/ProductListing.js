import React, { useContext } from 'react'
import ProductContext from './ProductContext'

export default function ProductListing() {
    let context = useContext(ProductContext);
    return <ul>
        {context.products().map(p => <li>{p.product_name} - {p.cost}</li>)}
    </ul>

}